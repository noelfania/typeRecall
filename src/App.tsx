import {
  For,
  Show,
  batch,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js";
import type { JSX } from "solid-js";

import { languageTracks } from "./generated/languageLessons";
import { lexiconTracks } from "./generated/lexiconLessons";
import { noteTracks } from "./generated/noteLessons";
import { visualTracks } from "./generated/visualLessons";
import { annotateCode } from "./lib/codeAnnotations";
import { buildHighlightChars } from "./lib/codeHighlight";
import type { HighlightChar } from "./lib/codeHighlight";
import type { LanguagePart } from "./data/languageLessonTypes";
import type { ContentLink, LexiconPart } from "./data/lexiconLessonTypes";
import type { NoteBlock, NotePart, NoteScenario } from "./data/noteLessonTypes";
import type { VisualPart } from "./data/visualLessonTypes";

const THEME_STORAGE_KEY = "gmtl-type-recall-theme";
const POSITION_STORAGE_KEY = "gmtl-type-recall-position";
const NARROW_LAYOUT_MQ = "(max-width: 1023px)";

type SavedPosition = {
  tab: AppTab;
  trackId: string;
  lessonId: string;
  partId: string;
};

function readSavedPosition(): SavedPosition | null {
  try {
    const raw = localStorage.getItem(POSITION_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedPosition;
    if (
      parsed &&
      (parsed.tab === "language" ||
        parsed.tab === "lexicon" ||
        parsed.tab === "notes") &&
      typeof parsed.trackId === "string" &&
      typeof parsed.lessonId === "string" &&
      typeof parsed.partId === "string"
    ) {
      return parsed;
    }
  } catch {
    // localStorage 접근 불가 시 무시
  }
  return null;
}

function savePosition(pos: SavedPosition) {
  try {
    localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(pos));
  } catch {
    // 저장 실패 시 무시
  }
}

type ThemeMode = "light" | "dark";
type AppTab = "language" | "lexicon" | "notes";
type TrackKind = "language" | "visual" | "lexicon" | "notes";

type NavPart = { id: string; title: string };
type NavLesson = {
  id: string;
  title: string;
  parts: NavPart[];
  language?: string;
  kind: TrackKind;
};
type NavTrack = {
  id: string;
  label: string;
  kind: TrackKind;
  lessons: NavLesson[];
};

const CSS_LANGUAGE_TRACK_ID = "css";

function findVisualLesson(lessonId: string) {
  for (const track of visualTracks) {
    const lesson = track.lessons.find((item) => item.id === lessonId);
    if (lesson) {
      return lesson;
    }
  }
  return null;
}

function readStoredTheme(): ThemeMode {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      return stored;
    }
  } catch {
    // localStorage 접근 불가 시 라이트 기본값
  }
  return "light";
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function buildLanguageNavTracks(): NavTrack[] {
  const visualLessons: NavLesson[] = visualTracks.flatMap((track) =>
    track.lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      language: "css",
      kind: "visual" as const,
      parts: lesson.parts.map((part) => ({ id: part.id, title: part.title })),
    })),
  );

  return languageTracks.map((track) => {
    const codeLessons: NavLesson[] = track.lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      language: lesson.language,
      kind: "language" as const,
      parts: lesson.parts.map((part) => ({ id: part.id, title: part.title })),
    }));

    // Option A: CSS 코드 레슨(P01/P02)과 Visual(Grid/Selector)을 한 트랙에 합친다
    if (track.id === CSS_LANGUAGE_TRACK_ID) {
      return {
        id: track.id,
        label: track.label,
        kind: "language" as const,
        lessons: [...codeLessons, ...visualLessons],
      };
    }

    return {
      id: track.id,
      label: track.label,
      kind: "language" as const,
      lessons: codeLessons,
    };
  });
}

function buildLexiconNavTracks(): NavTrack[] {
  return lexiconTracks.map((track) => ({
    id: track.id,
    label: track.label,
    kind: "lexicon" as const,
    lessons: track.lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      kind: "lexicon" as const,
      parts: lesson.parts.map((part) => ({ id: part.id, title: part.title })),
    })),
  }));
}

function buildNotesNavTracks(): NavTrack[] {
  return noteTracks.map((track) => ({
    id: track.id,
    label: track.label,
    kind: "notes" as const,
    lessons: track.lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title,
      kind: "notes" as const,
      parts: lesson.parts.map((part) => ({ id: part.id, title: part.title })),
    })),
  }));
}

function navTracksForTab(tab: AppTab, tracks: {
  language: NavTrack[];
  lexicon: NavTrack[];
  notes: NavTrack[];
}): NavTrack[] {
  if (tab === "lexicon") return tracks.lexicon;
  if (tab === "notes") return tracks.notes;
  return tracks.language;
}

function findNoteLessonParts(lessonId: string): NotePart[] {
  for (const track of noteTracks) {
    const lesson = track.lessons.find((item) => item.id === lessonId);
    if (lesson) {
      return lesson.parts;
    }
  }
  return [];
}

type LexiconJumpTarget = {
  trackId: string;
  lessonId: string;
  partId: string;
  title: string;
  answer: string;
};

function findLexiconTerm(termId: string): LexiconJumpTarget | null {
  for (const track of lexiconTracks) {
    for (const lesson of track.lessons) {
      const part = lesson.parts.find((item) => item.id === termId);
      if (part) {
        return {
          trackId: track.id,
          lessonId: lesson.id,
          partId: part.id,
          title: part.title,
          answer: part.answer,
        };
      }
    }
  }
  return null;
}

function hasTextSelection() {
  const selection = window.getSelection();
  return Boolean(selection && !selection.isCollapsed);
}

function ContentLinkRow(props: {
  heading: string;
  links: ContentLink[];
  onJump: (link: ContentLink) => void;
}) {
  return (
    <Show when={props.links.length > 0}>
      <h3 class="noteHeading">{props.heading}</h3>
      <div class="contentLinkRow">
        <For each={props.links}>
          {(link) => (
            <button
              type="button"
              class="contentLinkButton"
              onClick={(event) => {
                event.stopPropagation();
                props.onJump(link);
              }}
            >
              {link.title}
            </button>
          )}
        </For>
      </div>
    </Show>
  );
}

const INLINE_PATTERN = /\*\*(.+?)\*\*|`([^`]+)`|(https?:\/\/[^\s)\]]*[^\s)\].,])/g;

function renderInline(text: string): JSX.Element[] {
  const nodes: JSX.Element[] = [];
  let cursor = 0;
  for (const match of text.matchAll(INLINE_PATTERN)) {
    const start = match.index ?? 0;
    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }
    const [whole, bold, code, url] = match;
    if (bold !== undefined) {
      nodes.push(<strong>{bold}</strong>);
    } else if (code !== undefined) {
      nodes.push(<code class="inlineCode">{code}</code>);
    } else {
      nodes.push(
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>,
      );
    }
    cursor = start + whole.length;
  }
  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }
  return nodes;
}

type ProseGroup =
  | { kind: "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] };

function groupProse(text: string): ProseGroup[] {
  const groups: ProseGroup[] = [];
  for (const line of text.split(/\n+/).filter((item) => item.trim())) {
    const bullet = line.match(/^\s*[-*]\s+(.+)$/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)$/);
    const kind = bullet ? "ul" : ordered ? "ol" : "p";
    if (kind === "p") {
      groups.push({ kind, text: line });
      continue;
    }
    const item = (bullet ?? ordered)![1];
    const last = groups[groups.length - 1];
    if (last && last.kind === kind) {
      last.items.push(item);
    } else {
      groups.push({ kind, items: [item] });
    }
  }
  return groups;
}

function NoteBlockView(props: { block: NoteBlock }) {
  const block = props.block;
  if (block.type === "prose") {
    return (
      <div class="noteProse">
        <For each={groupProse(block.text)}>
          {(group) => {
            if (group.kind === "p") {
              return <p>{renderInline(group.text)}</p>;
            }
            const items = (
              <For each={group.items}>
                {(item) => <li>{renderInline(item)}</li>}
              </For>
            );
            return group.kind === "ul" ? (
              <ul class="noteList">{items}</ul>
            ) : (
              <ol class="noteList">{items}</ol>
            );
          }}
        </For>
      </div>
    );
  }
  if (block.type === "pre") {
    return <pre class="notePre">{block.text}</pre>;
  }
  if (block.type === "heading") {
    return <h3 class="noteHeading">{block.text}</h3>;
  }
  if (block.type === "list") {
    return (
      <ul class="noteList">
        <For each={block.items}>{(item) => <li>{renderInline(item)}</li>}</For>
      </ul>
    );
  }
  if (block.type === "kv") {
    return (
      <dl class="noteKv">
        <For each={block.rows}>
          {(row) => (
            <div class="noteKvRow">
              <dt>{row.key}</dt>
              <dd>{renderInline(row.value)}</dd>
            </div>
          )}
        </For>
      </dl>
    );
  }
  return (
    <div class="noteTableWrap">
      <table class="noteTable">
        <thead>
          <tr>
            <For each={block.headers}>{(header) => <th>{header}</th>}</For>
          </tr>
        </thead>
        <tbody>
          <For each={block.rows}>
            {(row) => (
              <tr>
                <For each={row}>{(cell) => <td>{renderInline(cell)}</td>}</For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}

type NoteCardProps = {
  part: NotePart;
  trackLabel: string;
  lessonTitle: string;
  isActive: boolean;
  setCardRef: (partId: string, el: HTMLElement | undefined) => void;
  onActivate: (partId: string) => void;
  onJump: (link: ContentLink) => void;
};

function NoteCard(props: NoteCardProps) {
  return (
    <article
      class={props.isActive ? "typingCard noteCard isActive" : "typingCard noteCard isInactive"}
      data-part-id={props.part.id}
      aria-current={props.isActive ? "true" : undefined}
      ref={(el) => props.setCardRef(props.part.id, el)}
      onClick={() => {
        if (!props.isActive && !hasTextSelection()) {
          props.onActivate(props.part.id);
        }
      }}
    >
      <div class="typingCardHeader">
        <span class="typingCardTag">{props.trackLabel}</span>
        <span class="typingCardTitle truncate">
          {props.lessonTitle}
          {" · "}
          {props.part.title}
        </span>
      </div>
      <div class="noteBody">
        <For each={props.part.blocks}>
          {(block) => <NoteBlockView block={block} />}
        </For>
        <ContentLinkRow
          heading="이어가기"
          links={props.part.relatedLinks ?? []}
          onJump={props.onJump}
        />
      </div>
    </article>
  );
}

type ScenarioDrillCardProps = {
  part: NotePart;
  trackLabel: string;
  lessonTitle: string;
  isActive: boolean;
  setCardRef: (partId: string, el: HTMLElement | undefined) => void;
  onActivate: (partId: string) => void;
  onJump: (link: ContentLink) => void;
  onJumpToTerm: (termId: string) => void;
};

function ScenarioDrillCard(props: ScenarioDrillCardProps) {
  const scenario = (): NoteScenario => props.part.scenario!;
  const [pickedId, setPickedId] = createSignal<string | null>(null);

  const pickedOption = createMemo(() => {
    const id = pickedId();
    if (!id) return null;
    return scenario().options.find((option) => option.id === id) ?? null;
  });

  const defaultOption = createMemo(() =>
    scenario().options.find((option) => option.id === scenario().defaultPick) ??
    null,
  );

  const matchesDefault = createMemo(() => {
    const id = pickedId();
    return id !== null && id === scenario().defaultPick;
  });

  return (
    <article
      class={
        props.isActive
          ? "typingCard noteCard scenarioCard isActive"
          : "typingCard noteCard scenarioCard isInactive"
      }
      data-part-id={props.part.id}
      aria-current={props.isActive ? "true" : undefined}
      ref={(el) => props.setCardRef(props.part.id, el)}
      onClick={() => {
        if (!props.isActive && !hasTextSelection()) {
          props.onActivate(props.part.id);
        }
      }}
    >
      <div class="typingCardHeader">
        <span class="typingCardTag">판단 연습</span>
        <span class="typingCardTitle truncate">
          {props.lessonTitle}
          {" · "}
          {props.part.title}
        </span>
      </div>
      <div class="noteBody scenarioBody">
        <h3 class="noteHeading">상황</h3>
        <div class="noteProse">
          <p>{scenario().context}</p>
        </div>
        <h3 class="noteHeading">증상</h3>
        <div class="noteProse">
          <p>{scenario().symptom}</p>
        </div>
        <h3 class="noteHeading">후보를 고르세요</h3>
        <div class="scenarioOptions" role="group" aria-label="아키텍처 후보">
          <For each={scenario().options}>
            {(option) => {
              const isSelected = () => pickedId() === option.id;
              const isDefault = () =>
                pickedId() !== null && option.id === scenario().defaultPick;
              return (
                <button
                  type="button"
                  classList={{
                    scenarioOption: true,
                    isSelected: isSelected(),
                    isDefault: isDefault(),
                  }}
                  aria-pressed={isSelected()}
                  onClick={(event) => {
                    event.stopPropagation();
                    props.onActivate(props.part.id);
                    setPickedId(option.id);
                  }}
                >
                  <span class="scenarioOptionLabel">{option.label}</span>
                </button>
              );
            }}
          </For>
        </div>
        <Show when={pickedOption()}>
          {(option) => (
            <div class="scenarioFeedback">
              <p
                classList={{
                  scenarioVerdict: true,
                  isMatch: matchesDefault(),
                  isDiff: !matchesDefault(),
                }}
              >
                {matchesDefault()
                  ? "기본안과 같습니다."
                  : `기본안은 ${defaultOption()?.label ?? scenario().defaultPick}입니다.`}
              </p>
              <h3 class="noteHeading">고른 안</h3>
              <dl class="noteKv">
                <div class="noteKvRow">
                  <dt>이럴 때</dt>
                  <dd>{option().whenPreferred}</dd>
                </div>
                <div class="noteKvRow">
                  <dt>피할 때</dt>
                  <dd>{option().whenAvoid}</dd>
                </div>
              </dl>
              <h3 class="noteHeading">기본안 근거</h3>
              <div class="noteProse">
                <p>{scenario().rationale}</p>
              </div>
              <Show when={!matchesDefault() && defaultOption()}>
                {(def) => (
                  <>
                    <h3 class="noteHeading">기본안 조건</h3>
                    <dl class="noteKv">
                      <div class="noteKvRow">
                        <dt>이럴 때</dt>
                        <dd>{def().whenPreferred}</dd>
                      </div>
                      <div class="noteKvRow">
                        <dt>피할 때</dt>
                        <dd>{def().whenAvoid}</dd>
                      </div>
                    </dl>
                  </>
                )}
              </Show>
            </div>
          )}
        </Show>
        <Show when={scenario().relatedTermIds.length > 0}>
          <h3 class="noteHeading">관련 용어</h3>
          <div class="scenarioTermLinks">
            <For each={scenario().relatedTermIds}>
              {(termId) => {
                const target = () => findLexiconTerm(termId);
                return (
                  <Show
                    when={target()}
                    fallback={
                      <span class="scenarioTermMissing">{termId}</span>
                    }
                  >
                    {(item) => (
                      <button
                        type="button"
                        class="scenarioTermLink"
                        onClick={(event) => {
                          event.stopPropagation();
                          props.onJumpToTerm(termId);
                        }}
                      >
                        {item().title}
                        <span class="scenarioTermAnswer">{item().answer}</span>
                      </button>
                    )}
                  </Show>
                );
              }}
            </For>
          </div>
        </Show>
        <ContentLinkRow
          heading="이어가기"
          links={props.part.relatedLinks ?? []}
          onJump={props.onJump}
        />
      </div>
    </article>
  );
}

const APP_TABS: { id: AppTab; label: string }[] = [
  { id: "language", label: "언어" },
  { id: "lexicon", label: "용어" },
  { id: "notes", label: "노트" },
];

function AppTabButtons(props: {
  appTab: AppTab;
  onSelect: (tab: AppTab) => void;
  class?: string;
}) {
  const onKeyDown = (event: KeyboardEvent & { currentTarget: HTMLElement }) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }
    event.preventDefault();
    const list = event.currentTarget;
    const step = event.key === "ArrowRight" ? 1 : -1;
    const current = APP_TABS.findIndex((tab) => tab.id === props.appTab);
    const nextIndex = (current + step + APP_TABS.length) % APP_TABS.length;
    props.onSelect(APP_TABS[nextIndex].id);
    // 탭 전환이 입력창으로 옮긴 포커스를 키보드 사용자를 위해 탭으로 되돌린다
    queueMicrotask(() => {
      list.querySelectorAll<HTMLElement>('[role="tab"]')[nextIndex]?.focus();
    });
  };

  return (
    <div
      class={props.class ?? "appTabBar"}
      role="tablist"
      aria-label="콘텐츠 종류"
      onKeyDown={onKeyDown}
    >
      <For each={APP_TABS}>
        {(tab) => (
          <button
            type="button"
            role="tab"
            class={props.appTab === tab.id ? "appTab isActive" : "appTab"}
            aria-selected={props.appTab === tab.id}
            aria-controls="mainPanel"
            tabIndex={props.appTab === tab.id ? 0 : -1}
            onClick={() => props.onSelect(tab.id)}
          >
            {tab.label}
          </button>
        )}
      </For>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 10 9" fill="none" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 10 9" fill="none" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg class="sunIcon" viewBox="0 0 20 20" stroke-width="1.5" aria-hidden="true">
      <path d="M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <path
        stroke-linecap="round"
        d="M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg class="moonIcon" viewBox="0 0 20 20" stroke-width="1.5" aria-hidden="true">
      <path d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z" />
    </svg>
  );
}

type LessonNavProps = {
  tracks: NavTrack[];
  selectedTrackId: string;
  selectedLessonId: string;
  onSelectTrack: (trackId: string) => void;
  onSelectLesson: (lessonId: string) => void;
  onSelectPart: (partId: string) => void;
  onNavigate?: () => void;
  ariaLabel?: string;
  /** 좁은 화면: 활성 레슨 바로 아래에 파트 목록을 붙인다 */
  inlineTocParts?: NavPart[];
  selectedPartId?: string;
};

function LessonNavigation(props: LessonNavProps) {
  const selectLesson = (trackId: string, lessonId: string, partId: string) => {
    props.onSelectTrack(trackId);
    props.onSelectLesson(lessonId);
    props.onSelectPart(partId);
    props.onNavigate?.();
  };

  return (
    <nav class="sidebarNav" aria-label={props.ariaLabel ?? "트랙·레슨 선택"}>
      <ul class="navRootList" role="list">
        <For each={props.tracks}>
          {(track) => {
            const isTrackOpen = () => track.id === props.selectedTrackId;
            return (
              <li class="navGroup">
                <h2 class="navGroupTitle">{track.label}</h2>
                <div class="navGroupBody">
                  <div class="navRail" aria-hidden="true" />
                  <ul class="navList" role="list">
                    <For each={track.lessons}>
                      {(lesson) => {
                        const isLessonActive = () =>
                          isTrackOpen() && lesson.id === props.selectedLessonId;
                        return (
                          <li class="navItem">
                            <Show when={isLessonActive()}>
                              <span class="navMarker" aria-hidden="true" />
                            </Show>
                            <button
                              type="button"
                              class={
                                isLessonActive() ? "navLink isActive" : "navLink"
                              }
                              aria-current={isLessonActive() ? "page" : undefined}
                              onClick={() =>
                                selectLesson(
                                  track.id,
                                  lesson.id,
                                  lesson.parts[0]?.id ?? "",
                                )
                              }
                            >
                              <span class="truncate">{lesson.title}</span>
                            </button>
                            <Show
                              when={props.inlineTocParts && isLessonActive()}
                            >
                              <PartsToc
                                parts={props.inlineTocParts ?? []}
                                selectedPartId={props.selectedPartId ?? ""}
                                onSelectPart={props.onSelectPart}
                                onNavigate={props.onNavigate}
                                ariaLabel="좁은 화면 파트 목록"
                                variant="inline"
                              />
                            </Show>
                          </li>
                        );
                      }}
                    </For>
                  </ul>
                </div>
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
}

type PartsTocProps = {
  parts: NavPart[];
  selectedPartId: string;
  onSelectPart: (partId: string) => void;
  onNavigate?: () => void;
  ariaLabel?: string;
  variant?: "inline";
};

function PartsToc(props: PartsTocProps) {
  let listRef: HTMLUListElement | undefined;

  // 활성 파트가 바뀌면 TOC 안에서도 해당 항목이 보이도록 따라간다
  createEffect(() => {
    const partId = props.selectedPartId;
    if (!partId) {
      return;
    }
    queueMicrotask(() => {
      const el = listRef?.querySelector(
        `[data-part-id="${CSS.escape(partId)}"]`,
      );
      el?.scrollIntoView({ block: "nearest" });
    });
  });

  return (
    <nav
      class={props.variant === "inline" ? "partsToc isInline" : "partsToc"}
      aria-label={props.ariaLabel ?? "파트 목록"}
    >
      <Show when={props.variant !== "inline"}>
        <h2 class="partsTocTitle">파트</h2>
      </Show>
      <ul class="partsTocList" role="list" ref={(el) => (listRef = el)}>
        <For each={props.parts}>
          {(part, index) => {
            const isActive = () => part.id === props.selectedPartId;
            return (
              <li>
                <button
                  type="button"
                  data-part-id={part.id}
                  class={isActive() ? "partsTocLink isActive" : "partsTocLink"}
                  aria-current={isActive() ? "true" : undefined}
                  onClick={() => {
                    props.onSelectPart(part.id);
                    props.onNavigate?.();
                  }}
                >
                  <span class="partsTocIndex">{index() + 1}</span>
                  <span class="partsTocLabel truncate">{part.title}</span>
                </button>
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
}

function charClass(item: HighlightChar, typed: string, preview: string) {
  const base = `char tone-${item.tone}`;
  const { logicalIndex } = item;
  if (logicalIndex === null) {
    return /\s/.test(item.char) ? `${base} isGap` : base;
  }
  if (logicalIndex < typed.length) {
    return typed[logicalIndex] === item.char
      ? `${base} isCorrect`
      : "char isWrong";
  }
  if (logicalIndex === typed.length) {
    return preview ? `${base} isCurrent hasPreview` : `${base} isCurrent`;
  }
  return base;
}

type ActiveCharsProps = {
  chars: HighlightChar[];
  typed: string;
  preview: string;
};

// 글자 목록은 파트가 바뀔 때만 새로 만들고, 입력 중에는 class만 갱신한다
function ActiveChars(props: ActiveCharsProps) {
  return (
    <For each={props.chars}>
      {(item) => (
        <span class={charClass(item, props.typed, props.preview)}>
          {item.char}
          <Show when={item.logicalIndex === props.typed.length && props.preview}>
            <span class="charPreview">{props.preview}</span>
          </Show>
        </span>
      )}
    </For>
  );
}

type TypingCardProps = {
  part: LanguagePart;
  trackLabel: string;
  lessonTitle: string;
  isActive: boolean;
  typed: string;
  preview: string;
  language: string;
  setCardRef: (partId: string, el: HTMLElement | undefined) => void;
  onActivate: (partId: string) => void;
};

function TypingCard(props: TypingCardProps) {
  const lines = createMemo(() =>
    annotateCode(
      props.part.displayContent || props.part.content,
      props.language,
      props.part.title,
    ),
  );

  return (
    <article
      class={props.isActive ? "typingCard isActive" : "typingCard isInactive"}
      data-part-id={props.part.id}
      aria-current={props.isActive ? "true" : undefined}
      ref={(el) => props.setCardRef(props.part.id, el)}
      onClick={() => {
        if (!props.isActive && !hasTextSelection()) {
          props.onActivate(props.part.id);
        }
      }}
    >
      <div class="typingCardHeader">
        <span class="typingCardTag">{props.trackLabel}</span>
        <span class="typingCardTitle truncate">
          {props.lessonTitle}
          {" · "}
          {props.part.title}
        </span>
      </div>
      <div class="practiceText annotatedCode">
        <For each={lines()}>
          {(line) => (
            <div class="codeLine">
              <span class="codeText" style={{ "--code-indent": line.indent }}>
                <Show
                  when={props.isActive}
                  fallback={
                    <For each={line.chars}>
                      {(item) => (
                        <span class={`char tone-${item.tone}`}>{item.char}</span>
                      )}
                    </For>
                  }
                >
                  <ActiveChars
                    chars={line.chars}
                    typed={props.typed}
                    preview={props.preview}
                  />
                </Show>
              </span>
              <For each={line.notes}>
                {(note) => (
                  <div
                    class={note.kind === "result" ? "codeNote isResult" : "codeNote"}
                    style={{ "--note-indent": line.indent }}
                  >
                    <Show when={note.kind === "result"}>
                      <span aria-hidden="true">→ </span>
                    </Show>
                    {/* 코드 주석의 ** 는 굵게가 아니라 연산자일 수 있다 */}
                    {note.kind === "result" || note.text.includes("**")
                      ? note.text
                      : renderInline(note.text)}
                  </div>
                )}
              </For>
            </div>
          )}
        </For>
      </div>
    </article>
  );
}

type LexiconCardProps = {
  part: LexiconPart;
  trackLabel: string;
  lessonTitle: string;
  isActive: boolean;
  chars: HighlightChar[];
  typed: string;
  preview: string;
  setCardRef: (partId: string, el: HTMLElement | undefined) => void;
  onActivate: (partId: string) => void;
  onJump: (link: ContentLink) => void;
};

function LexiconCard(props: LexiconCardProps) {
  return (
    <article
      class={props.isActive ? "typingCard lexiconCard isActive" : "typingCard lexiconCard isInactive"}
      data-part-id={props.part.id}
      aria-current={props.isActive ? "true" : undefined}
      ref={(el) => props.setCardRef(props.part.id, el)}
      onClick={() => {
        if (!props.isActive && !hasTextSelection()) {
          props.onActivate(props.part.id);
        }
      }}
    >
      <div class="typingCardHeader">
        <span class="typingCardTag">{props.trackLabel}</span>
        <span class="typingCardTitle truncate">
          {props.lessonTitle}
          {" · "}
          {props.part.title}
        </span>
      </div>
      <p class="lexiconPrompt">{renderInline(props.part.prompt)}</p>
      <p class="practiceText lexiconAnswer" aria-hidden={!props.isActive}>
        <Show
          when={props.isActive}
          fallback={<span class="lexiconAnswerGhost">{props.part.answer}</span>}
        >
          <ActiveChars chars={props.chars} typed={props.typed} preview={props.preview} />
        </Show>
      </p>
      <Show when={props.part.displayAnswer !== props.part.answer || props.part.aliases.length > 0}>
        <p class="lexiconForms">
          <Show when={props.part.displayAnswer !== props.part.answer}>
            <span>표기: {props.part.displayAnswer}</span>
          </Show>
          <Show when={props.part.aliases.length > 0}>
            <span>다른 이름: {props.part.aliases.join(", ")}</span>
          </Show>
        </p>
      </Show>
      <Show when={props.part.example}>
        <p class="lexiconExample">{renderInline(props.part.example)}</p>
      </Show>
      <div class="lexiconLinks">
        <ContentLinkRow
          heading="관련 판단 연습"
          links={props.part.relatedDrills ?? []}
          onJump={props.onJump}
        />
      </div>
    </article>
  );
}

type VisualCardProps = {
  part: VisualPart;
  trackLabel: string;
  lessonTitle: string;
  isActive: boolean;
  chars: HighlightChar[];
  typed: string;
  preview: string;
  setCardRef: (partId: string, el: HTMLElement | undefined) => void;
  onActivate: (partId: string) => void;
};

function VisualCard(props: VisualCardProps) {
  const inactiveChars = createMemo(() =>
    buildHighlightChars(props.part.displayContent, props.part.language),
  );

  return (
    <article
      class={props.isActive ? "typingCard visualCard isActive" : "typingCard visualCard isInactive"}
      data-part-id={props.part.id}
      aria-current={props.isActive ? "true" : undefined}
      ref={(el) => props.setCardRef(props.part.id, el)}
      onClick={() => {
        if (!props.isActive && !hasTextSelection()) {
          props.onActivate(props.part.id);
        }
      }}
    >
      <div class="typingCardHeader">
        <span class="typingCardTag">{props.trackLabel}</span>
        <span class="typingCardTitle truncate">
          {props.lessonTitle}
          {" · "}
          {props.part.title}
        </span>
      </div>
      <Show when={props.part.imagePaths.length > 0}>
        <figure class="visualFigure">
          <For each={props.part.imagePaths}>
            {(imagePath) => (
              <img
                class="visualImage"
                src={`${import.meta.env.BASE_URL}${imagePath.replace(/^\//, "")}`}
                alt={props.part.caption || props.part.title}
                loading="lazy"
                decoding="async"
              />
            )}
          </For>
        </figure>
      </Show>
      <Show when={props.part.caption}>
        <p class="visualCaption">{props.part.caption}</p>
      </Show>
      <Show when={props.part.explanation}>
        <div class="visualExplanation">
          <For each={props.part.explanation.split(/\n+/).filter((line) => line.trim())}>
            {(line) => <p>{line}</p>}
          </For>
        </div>
      </Show>
      <Show when={props.part.displayCaptions.length > 0}>
        <ul class="visualCaptionList">
          <For each={props.part.displayCaptions}>
            {(caption) => <li>{caption}</li>}
          </For>
        </ul>
      </Show>
      <p class="practiceText visualCode" aria-hidden={!props.isActive}>
        <Show
          when={props.isActive}
          fallback={
            <For each={inactiveChars()}>
              {(item) => (
                <span class={`char tone-${item.tone}`}>{item.char}</span>
              )}
            </For>
          }
        >
          <ActiveChars chars={props.chars} typed={props.typed} preview={props.preview} />
        </Show>
      </p>
    </article>
  );
}

// 공백·줄바꿈은 판정 대상이 아니므로 입력에서도 뺀다
function normalizeInput(rawValue: string) {
  return rawValue.replace(/\s/g, "");
}

const CARET_KEYS = new Set([
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
]);

function App() {
  let inputRef: HTMLTextAreaElement | undefined;
  let menuToggleRef: HTMLButtonElement | undefined;
  let drawerRef: HTMLDivElement | undefined;
  const cardEls = new Map<string, HTMLElement>();
  let spyObserver: IntersectionObserver | undefined;
  // 초기 로드·파트 선택에 의한 프로그램 스크롤 동안은 스크롤 연동을 잠시 멈춘다
  let suppressSpyUntil = 0;

  const languageNavTracks = buildLanguageNavTracks();
  const lexiconNavTracks = buildLexiconNavTracks();
  const notesNavTracks = buildNotesNavTracks();
  const allNavTracks = {
    language: languageNavTracks,
    lexicon: lexiconNavTracks,
    notes: notesNavTracks,
  };

  const [inputValue, setInputValue] = createSignal("");
  const [draftValue, setDraftValue] = createSignal("");
  const [isComposing, setIsComposing] = createSignal(false);
  // 백스페이스로 줄지 않는 입력 기록. 고친 오타도 정확도에 남긴다.
  const [keystrokes, setKeystrokes] = createSignal(0);
  const [errors, setErrors] = createSignal(0);
  const [startedAt, setStartedAt] = createSignal(0);
  const [lastInputAt, setLastInputAt] = createSignal(0);
  const [theme, setTheme] = createSignal<ThemeMode>("light");
  const [mobileNavOpen, setMobileNavOpen] = createSignal(false);
  const [isNarrowLayout, setIsNarrowLayout] = createSignal(false);

  // 저장된 위치로 초기값 결정
  const _savedPos = readSavedPosition();
  const _initTab: AppTab = _savedPos?.tab ?? "language";
  const _initTracks = navTracksForTab(_initTab, allNavTracks);
  const _initTrackId = _savedPos?.trackId && _initTracks.some((t) => t.id === _savedPos.trackId)
    ? _savedPos.trackId
    : (_initTracks[0]?.id ?? "");
  const _initTrack = _initTracks.find((t) => t.id === _initTrackId);
  const _initLessonId = _savedPos?.lessonId && _initTrack?.lessons.some((l) => l.id === _savedPos.lessonId)
    ? _savedPos.lessonId
    : (_initTrack?.lessons[0]?.id ?? "");
  const _initLesson = _initTrack?.lessons.find((l) => l.id === _initLessonId);
  const _initPartId = _savedPos?.partId && _initLesson?.parts.some((p) => p.id === _savedPos.partId)
    ? _savedPos.partId
    : (_initLesson?.parts[0]?.id ?? "");

  const [appTab, setAppTab] = createSignal<AppTab>(_initTab);
  const [selectedTrackId, setSelectedTrackId] = createSignal(_initTrackId);
  const [selectedLessonId, setSelectedLessonId] = createSignal(_initLessonId);
  const [selectedPartId, setSelectedPartId] = createSignal(_initPartId);
  // 스크롤 위치 기준으로 TOC가 따라가는 파트 (타이핑 선택과는 별개)
  const [spyPartId, setSpyPartId] = createSignal("");

  const navTracks = createMemo(() => navTracksForTab(appTab(), allNavTracks));
  const isNotesTab = createMemo(() => appTab() === "notes");

  onMount(() => {
    const initial = readStoredTheme();
    setTheme(initial);
    applyTheme(initial);

    // 화면 세로 중앙을 지나는 카드를 감지해 TOC 포커스를 스크롤에 연동한다
    suppressSpyUntil = Date.now() + 1200;
    spyObserver = new IntersectionObserver(
      (entries) => {
        if (Date.now() < suppressSpyUntil) {
          return;
        }
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const partId = entry.target.getAttribute("data-part-id");
            if (partId) {
              setSpyPartId(partId);
            }
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const el of cardEls.values()) {
      spyObserver.observe(el);
    }
    onCleanup(() => spyObserver?.disconnect());

    const mq = window.matchMedia(NARROW_LAYOUT_MQ);
    const syncNarrow = () => setIsNarrowLayout(mq.matches);
    syncNarrow();
    mq.addEventListener("change", syncNarrow);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
      }
      // 노트 탭에는 입력창이 없으므로 여기서 파트 이동 단축키를 받는다
      if (isNotesTab() && event.key === "Enter" && event.ctrlKey && !event.altKey) {
        event.preventDefault();
        if (event.shiftKey) {
          moveToPrevPart();
        } else {
          moveToNextPart();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    onCleanup(() => {
      mq.removeEventListener("change", syncNarrow);
      window.removeEventListener("keydown", onKeyDown);
    });
  });

  const clearTyping = () => {
    batch(() => {
      setInputValue("");
      setDraftValue("");
      setIsComposing(false);
      setKeystrokes(0);
      setErrors(0);
      setStartedAt(0);
      setLastInputAt(0);
    });
  };

  // 탭을 직접 바꿀 때만 첫 항목으로 리셋한다. 링크 이동은 jumpTo를 쓴다.
  const selectTab = (tab: AppTab) => {
    if (tab === appTab()) {
      return;
    }
    const firstTrack = navTracksForTab(tab, allNavTracks)[0];
    const firstLesson = firstTrack?.lessons[0];
    batch(() => {
      setAppTab(tab);
      setSelectedTrackId(firstTrack?.id ?? "");
      setSelectedLessonId(firstLesson?.id ?? "");
      setSelectedPartId(firstLesson?.parts[0]?.id ?? "");
      clearTyping();
    });
  };

  const jumpTo = (
    tab: AppTab,
    target: { trackId: string; lessonId: string; partId: string },
  ) => {
    batch(() => {
      setAppTab(tab);
      setSelectedTrackId(target.trackId);
      setSelectedLessonId(target.lessonId);
      setSelectedPartId(target.partId);
      clearTyping();
      setMobileNavOpen(false);
    });
  };

  // 선택이 바뀔 때마다 위치를 저장한다
  createEffect(() => {
    savePosition({
      tab: appTab(),
      trackId: selectedTrackId(),
      lessonId: selectedLessonId(),
      partId: selectedPartId(),
    });
  });

  const selectedTrack = createMemo(() => {
    return (
      navTracks().find((track) => track.id === selectedTrackId()) ??
      navTracks()[0] ??
      null
    );
  });

  createEffect(() => {
    const track = selectedTrack();
    if (!track) {
      setSelectedLessonId("");
      return;
    }

    const hasSelectedLesson = track.lessons.some(
      (lesson) => lesson.id === selectedLessonId(),
    );
    if (!hasSelectedLesson) {
      setSelectedLessonId(track.lessons[0]?.id ?? "");
    }
  });

  const selectedLesson = createMemo(() => {
    const track = selectedTrack();
    if (!track) {
      return null;
    }

    return (
      track.lessons.find((lesson) => lesson.id === selectedLessonId()) ??
      track.lessons[0] ??
      null
    );
  });

  createEffect(() => {
    const lesson = selectedLesson();
    if (!lesson) {
      setSelectedPartId("");
      return;
    }

    const hasSelectedPart = lesson.parts.some(
      (part) => part.id === selectedPartId(),
    );
    if (!hasSelectedPart) {
      setSelectedPartId(lesson.parts[0]?.id ?? "");
    }
  });

  const selectedLanguagePart = createMemo((): LanguagePart | null => {
    if (appTab() !== "language" || selectedLesson()?.kind === "visual") {
      return null;
    }
    const track = languageTracks.find((item) => item.id === selectedTrackId());
    const lesson = track?.lessons.find((item) => item.id === selectedLessonId());
    return lesson?.parts.find((item) => item.id === selectedPartId()) ?? null;
  });

  const selectedVisualPart = createMemo((): VisualPart | null => {
    if (appTab() !== "language" || selectedLesson()?.kind !== "visual") {
      return null;
    }
    const lesson = findVisualLesson(selectedLessonId());
    return lesson?.parts.find((item) => item.id === selectedPartId()) ?? null;
  });

  const selectedVisualLessonParts = createMemo((): VisualPart[] => {
    if (selectedLesson()?.kind !== "visual") {
      return [];
    }
    return findVisualLesson(selectedLessonId())?.parts ?? [];
  });

  const selectedLexiconPart = createMemo((): LexiconPart | null => {
    if (appTab() !== "lexicon") {
      return null;
    }
    for (const track of lexiconTracks) {
      if (track.id !== selectedTrackId()) {
        continue;
      }
      const lesson = track.lessons.find((item) => item.id === selectedLessonId());
      return lesson?.parts.find((item) => item.id === selectedPartId()) ?? null;
    }
    return null;
  });

  const selectedNoteLessonParts = createMemo((): NotePart[] => {
    if (!isNotesTab()) {
      return [];
    }
    return findNoteLessonParts(selectedLessonId());
  });

  const noteLessonHasScenarios = createMemo(() =>
    selectedNoteLessonParts().some((part) => Boolean(part.scenario)),
  );

  const jumpToLexiconTerm = (termId: string) => {
    const target = findLexiconTerm(termId);
    if (!target) return;
    jumpTo("lexicon", target);
  };

  const jumpToContent = (link: ContentLink) => {
    if (!link.trackId || !link.lessonId || !link.partId) return;
    jumpTo(link.kind === "lexicon" ? "lexicon" : "notes", link);
  };

  const practiceText = createMemo(() => {
    if (isNotesTab()) {
      return "";
    }
    if (selectedLexiconPart()) {
      return selectedLexiconPart()?.answer ?? "";
    }
    if (selectedVisualPart()) {
      return selectedVisualPart()?.content ?? "";
    }
    return selectedLanguagePart()?.content ?? "예문 데이터가 없습니다.";
  });

  const displayText = createMemo(() => {
    if (isNotesTab()) {
      return "";
    }
    if (selectedLexiconPart()) {
      return selectedLexiconPart()?.answer ?? "";
    }
    if (selectedVisualPart()) {
      return selectedVisualPart()?.displayContent ?? "";
    }
    return selectedLanguagePart()?.displayContent ?? practiceText();
  });

  const practiceLanguage = createMemo(() => {
    if (selectedVisualPart()) {
      return selectedVisualPart()?.language ?? "css";
    }
    return selectedLesson()?.language ?? "text";
  });

  const displayChars = createMemo(() => {
    if (selectedLexiconPart()) {
      return buildHighlightChars(displayText(), "text");
    }
    return buildHighlightChars(displayText(), practiceLanguage());
  });

  // 화면에서 입력 대상으로 표시한 글자가 곧 정답이다
  const normalizedTarget = createMemo(() =>
    displayChars()
      .filter((item) => item.logicalIndex !== null)
      .map((item) => item.char)
      .join(""),
  );
  const limitedValue = createMemo(() =>
    inputValue().slice(0, normalizedTarget().length),
  );
  const totalCount = createMemo(() => normalizedTarget().length);
  const typedCount = createMemo(() => limitedValue().length);

  createEffect(() => {
    selectedPartId();
    if (isNotesTab()) {
      return;
    }
    queueMicrotask(() => {
      inputRef?.focus();
    });
  });

  createEffect(() => {
    selectedPartId();
    clearTyping();
  });

  // 파트를 직접 선택하면 TOC 포커스도 그 파트로 맞춘다
  createEffect(() => {
    setSpyPartId(selectedPartId());
  });

  // 활성 카드가 화면 세로 중앙에 오도록 스크롤한다
  createEffect(() => {
    const partId = selectedPartId();
    if (!partId) {
      return;
    }
    suppressSpyUntil = Date.now() + 1200;
    queueMicrotask(() => {
      const el = cardEls.get(partId);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  const accuracyValue = createMemo(() => {
    const typed = keystrokes();
    return typed === 0 ? 100 : Math.round(((typed - errors()) / typed) * 100);
  });

  const isComplete = createMemo(
    () => totalCount() > 0 && limitedValue() === normalizedTarget(),
  );

  // 통상의 WPM 정의대로 5글자를 한 단어로 센다. 첫 글자는 시간 측정의 기준점이라 뺀다.
  const wpmValue = createMemo(() => {
    const minutes = (lastInputAt() - startedAt()) / 60000;
    return minutes > 0 ? Math.round((typedCount() - 1) / 5 / minutes) : 0;
  });
  const wpmLabel = createMemo(() =>
    wpmValue() > 0 ? `${wpmValue()} WPM` : "WPM 측정 불가",
  );

  const normalizedDraft = createMemo(() => normalizeInput(draftValue()));
  const previewText = createMemo(() => {
    const draft = normalizedDraft();
    const limited = limitedValue();
    return isComposing() && draft.startsWith(limited)
      ? draft.slice(limited.length)
      : "";
  });
  const previewChar = createMemo(
    () => previewText()[previewText().length - 1] ?? "",
  );

  const trackIndex = createMemo(() => {
    const track = selectedTrack();
    return track
      ? navTracks().findIndex((item) => item.id === track.id)
      : -1;
  });

  const lessonIndex = createMemo(() => {
    const track = selectedTrack();
    const lesson = selectedLesson();
    return track && lesson
      ? track.lessons.findIndex((item) => item.id === lesson.id)
      : -1;
  });

  const partIndex = createMemo(() => {
    const lesson = selectedLesson();
    const partId = selectedPartId();
    return lesson
      ? lesson.parts.findIndex((item) => item.id === partId)
      : -1;
  });

  const hasLessons = createMemo(() =>
    navTracks().some((track) => track.lessons.length > 0),
  );

  const isFirstPartOverall = createMemo(() => {
    return trackIndex() === 0 && lessonIndex() === 0 && partIndex() === 0;
  });

  const isLastPart = createMemo(() => {
    const tracks = navTracks();
    const track = selectedTrack();
    const lesson = selectedLesson();
    const partId = selectedPartId();
    return (
      track !== null &&
      lesson !== null &&
      partId !== "" &&
      trackIndex() === tracks.length - 1 &&
      lessonIndex() === track.lessons.length - 1 &&
      partIndex() === lesson.parts.length - 1
    );
  });

  const acceptInput = (rawValue: string) => {
    const normalizedInput = normalizeInput(rawValue);
    const target = normalizedTarget();
    const previousLength = limitedValue().length;
    let nextAcceptedValue = "";

    for (let index = 0; index < normalizedInput.length; index += 1) {
      if (index >= target.length) {
        break;
      }
      nextAcceptedValue += normalizedInput[index];
      // 틀린 글자는 하나만 받고 멈춘다. 이어서 더 치지 못하게 하고 백스페이스로 고친다.
      if (normalizedInput[index] !== target[index]) {
        break;
      }
    }

    batch(() => {
      setInputValue(nextAcceptedValue);
      setDraftValue(nextAcceptedValue);

      const added = nextAcceptedValue.length - previousLength;
      if (added > 0) {
        const lastIndex = nextAcceptedValue.length - 1;
        const now = Date.now();
        setKeystrokes((count) => count + added);
        if (nextAcceptedValue[lastIndex] !== target[lastIndex]) {
          setErrors((count) => count + 1);
        }
        if (startedAt() === 0) {
          setStartedAt(now);
        }
        setLastInputAt(now);
      }
    });

    // Solid는 signal 값이 같으면 DOM을 갱신하지 않는다.
    // 거절된 입력이 textarea에 남으면 이후 올바른 타이핑도 계속 막힌다.
    if (inputRef && !isComposing() && inputRef.value !== nextAcceptedValue) {
      inputRef.value = nextAcceptedValue;
    }
  };

  const resetTyping = () => {
    clearTyping();
    if (inputRef) {
      inputRef.value = "";
    }
    inputRef?.focus();
  };

  const moveToNextPart = () => {
    const tracks = navTracks();
    const track = selectedTrack();
    const lesson = selectedLesson();
    const partId = selectedPartId();
    if (!track || !lesson || !partId) {
      return;
    }

    const nextPart = lesson.parts[partIndex() + 1];
    if (nextPart) {
      setSelectedPartId(nextPart.id);
      return;
    }

    const nextLesson = track.lessons[lessonIndex() + 1];
    if (nextLesson) {
      setSelectedLessonId(nextLesson.id);
      setSelectedPartId(nextLesson.parts[0]?.id ?? "");
      return;
    }

    const nextTrack = tracks[trackIndex() + 1];
    if (nextTrack?.lessons[0]) {
      setSelectedTrackId(nextTrack.id);
      setSelectedLessonId(nextTrack.lessons[0].id);
      setSelectedPartId(nextTrack.lessons[0].parts[0]?.id ?? "");
      return;
    }

    const firstTrack = tracks[0];
    const firstLesson = firstTrack?.lessons[0];
    if (firstTrack && firstLesson) {
      setSelectedTrackId(firstTrack.id);
      setSelectedLessonId(firstLesson.id);
      setSelectedPartId(firstLesson.parts[0]?.id ?? "");
    }
  };

  const moveToPrevPart = () => {
    const tracks = navTracks();
    const track = selectedTrack();
    const lesson = selectedLesson();
    const partId = selectedPartId();
    if (!track || !lesson || !partId) {
      return;
    }

    const prevPart = lesson.parts[partIndex() - 1];
    if (prevPart) {
      setSelectedPartId(prevPart.id);
      return;
    }

    const prevLesson = track.lessons[lessonIndex() - 1];
    if (prevLesson) {
      setSelectedLessonId(prevLesson.id);
      const lastPart = prevLesson.parts[prevLesson.parts.length - 1];
      setSelectedPartId(lastPart?.id ?? "");
      return;
    }

    const prevTrack = tracks[trackIndex() - 1];
    if (prevTrack) {
      const lastLesson = prevTrack.lessons[prevTrack.lessons.length - 1];
      if (lastLesson) {
        setSelectedTrackId(prevTrack.id);
        setSelectedLessonId(lastLesson.id);
        const lastPart = lastLesson.parts[lastLesson.parts.length - 1];
        setSelectedPartId(lastPart?.id ?? "");
      }
    }
  };

  const toggleTheme = () => {
    const next: ThemeMode = theme() === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // 저장 실패해도 세션 내 토글은 유지
    }
  };

  const setCardRef = (partId: string, el: HTMLElement | undefined) => {
    const previous = cardEls.get(partId);
    if (previous) {
      spyObserver?.unobserve(previous);
    }
    if (el) {
      cardEls.set(partId, el);
      spyObserver?.observe(el);
    } else {
      cardEls.delete(partId);
    }
  };

  const lessonNavProps = (options?: {
    onNavigate?: () => void;
  }): LessonNavProps => ({
    tracks: navTracks(),
    selectedTrackId: selectedTrackId(),
    selectedLessonId: selectedLessonId(),
    onSelectTrack: setSelectedTrackId,
    onSelectLesson: setSelectedLessonId,
    onSelectPart: setSelectedPartId,
    onNavigate: options?.onNavigate,
    ariaLabel:
      appTab() === "lexicon"
        ? "용어·파일 선택"
        : appTab() === "notes"
          ? "노트·파일 선택"
          : "언어·파일 선택",
  });

  createEffect(() => {
    const lessonTitle = selectedLesson()?.title;
    document.title = lessonTitle ? `${lessonTitle} · Type Recall` : "Type Recall";
  });

  // 드로어를 열면 안으로 포커스를 옮기고, 닫으면 메뉴 버튼으로 돌려준다
  let wasDrawerOpen = false;
  createEffect(() => {
    const isOpen = mobileNavOpen();
    if (isOpen) {
      queueMicrotask(() => drawerRef?.focus());
    } else if (wasDrawerOpen) {
      queueMicrotask(() => {
        if (document.activeElement === document.body) {
          menuToggleRef?.focus();
        }
      });
    }
    wasDrawerOpen = isOpen;
  });

  const trapDrawerFocus = (event: KeyboardEvent) => {
    if (event.key !== "Tab" || !drawerRef) {
      return;
    }
    const focusable = drawerRef.querySelectorAll<HTMLElement>(
      "button:not([tabindex='-1'])",
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || active === drawerRef)) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  const parts = createMemo(() => selectedLesson()?.parts ?? []);
  const totalParts = createMemo(() => parts().length);

  const pageHeading = createMemo(() =>
    appTab() === "lexicon"
      ? "실무 용어 타이핑 연습"
      : appTab() === "notes"
        ? noteLessonHasScenarios()
          ? "아키텍처 판단 연습"
          : "참고 노트"
        : "개발 예문 타이핑 연습",
  );

  const scrollLabel = createMemo(() =>
    appTab() === "lexicon"
      ? "용어 카드"
      : appTab() === "notes"
        ? noteLessonHasScenarios()
          ? "판단 시나리오"
          : "참고 노트"
        : selectedLesson()?.kind === "visual"
          ? "시각 참고"
          : "원문",
  );

  return (
    <div
      class="appShell"
      classList={{ hasRightToc: !isNarrowLayout() }}
      onClick={(event) => {
        if (isNotesTab() || mobileNavOpen()) {
          return;
        }
        const target = event.target;
        if (!(target instanceof Element)) {
          return;
        }
        if (target.closest("a, label, textarea, input") || hasTextSelection()) {
          return;
        }
        // 키보드로 누른 버튼(detail 0)은 탭 순서를 유지하고, 좁은 화면은 가상 키보드를 띄우지 않는다
        if (target.closest("button") && (event.detail === 0 || isNarrowLayout())) {
          return;
        }
        inputRef?.focus();
      }}
    >
      <aside class="sidebar" aria-label="문서 탐색">
        <div class="sidebarBrand">
          <span class="sidebarBrandMark">T</span>
          <span class="sidebarBrandText">Type Recall</span>
        </div>
        <AppTabButtons
          class="appTabBar sidebarTabBar"
          appTab={appTab()}
          onSelect={selectTab}
        />
        <LessonNavigation {...lessonNavProps()} />
      </aside>

      <header class="topHeader">
        <div class="headerLeft">
          <button
            type="button"
            class="iconButton menuToggle"
            ref={(element) => {
              menuToggleRef = element;
            }}
            aria-label={mobileNavOpen() ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileNavOpen()}
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <Show when={mobileNavOpen()} fallback={<MenuIcon />}>
              <CloseIcon />
            </Show>
          </button>
          <span class="headerTitleMobile">Type Recall</span>
          <AppTabButtons
            class="appTabBar headerTabBar"
            appTab={appTab()}
            onSelect={selectTab}
          />
          <p class="headerMeta">
            {selectedTrack()?.label ?? ""}
            <Show when={selectedLesson()}>
              {" · "}
              {selectedLesson()?.title}
            </Show>
          </p>
        </div>
        <div class="headerRight">
          <Show
            when={!isNotesTab()}
            fallback={
              <span class="headerAccuracy">
                {noteLessonHasScenarios() ? "판단 연습" : "읽기 전용"}
              </span>
            }
          >
            <span class="headerAccuracy" aria-label="정확도">
              <span class="headerAccuracyLabel">정확도 </span>
              {accuracyValue()}%
              <span class="headerAccuracySep">·</span>
              {typedCount()}/{totalCount()}
              <Show when={wpmValue() > 0}>
                <span class="headerWpm">
                  <span class="headerAccuracySep">·</span>
                  {wpmValue()} WPM
                </span>
              </Show>
            </span>
          </Show>
          <button
            type="button"
            class="iconButton themeToggle"
            aria-label={
              theme() === "dark" ? "라이트 테마로 전환" : "다크 테마로 전환"
            }
            onClick={toggleTheme}
          >
            <SunIcon />
            <MoonIcon />
          </button>
        </div>
      </header>

      <Show when={mobileNavOpen()}>
        <div
          class="mobileBackdrop"
          onClick={() => setMobileNavOpen(false)}
          aria-hidden="true"
        />
        <div
          class="mobileDrawer"
          role="dialog"
          aria-modal="true"
          aria-label="탐색 메뉴"
          tabIndex={-1}
          ref={(element) => {
            drawerRef = element;
          }}
          onKeyDown={trapDrawerFocus}
        >
          <AppTabButtons
            class="appTabBar drawerTabBar"
            appTab={appTab()}
            onSelect={selectTab}
          />
          <LessonNavigation
            {...lessonNavProps({
              onNavigate: () => setMobileNavOpen(false),
            })}
            inlineTocParts={parts()}
            selectedPartId={selectedPartId()}
          />
        </div>
      </Show>

      <div class="mainArea">
        <div class="mainInner">
          <header class="centerHeader">
            <p class="lessonBreadcrumb">
              {selectedTrack()?.label ?? ""}
              <Show when={selectedLesson()}>
                {" – "}
                {selectedLesson()?.title}
              </Show>
            </p>
            <h1 class="pageHeading visuallyHidden">{pageHeading()}</h1>
          </header>

          <section
            id="mainPanel"
            class="scrollStack"
            role="tabpanel"
            aria-label={scrollLabel()}
          >
            <Show
              when={appTab() === "notes"}
              fallback={
                <Show
                  when={appTab() === "lexicon"}
                  fallback={
                    <Show
                      when={selectedLesson()?.kind === "visual"}
                      fallback={
                        <For each={languageTracks.find((t) => t.id === selectedTrackId())?.lessons.find((l) => l.id === selectedLessonId())?.parts ?? []}>
                          {(part) => (
                            <TypingCard
                              part={part}
                              trackLabel={selectedTrack()?.label ?? "연습"}
                              lessonTitle={selectedLesson()?.title ?? "예문"}
                              isActive={part.id === selectedPartId()}
                              typed={limitedValue()}
                              preview={previewChar()}
                              language={practiceLanguage()}
                              setCardRef={setCardRef}
                              onActivate={setSelectedPartId}
                            />
                          )}
                        </For>
                      }
                    >
                      <For each={selectedVisualLessonParts()}>
                        {(part) => (
                          <VisualCard
                            part={part}
                            trackLabel={selectedTrack()?.label ?? "시각"}
                            lessonTitle={selectedLesson()?.title ?? "참고"}
                            isActive={part.id === selectedPartId()}
                            chars={displayChars()}
                            typed={limitedValue()}
                            preview={previewChar()}
                            setCardRef={setCardRef}
                            onActivate={setSelectedPartId}
                          />
                        )}
                      </For>
                    </Show>
                  }
                >
                  <For each={lexiconTracks.find((t) => t.id === selectedTrackId())?.lessons.find((l) => l.id === selectedLessonId())?.parts ?? []}>
                    {(part) => (
                      <LexiconCard
                        part={part}
                        trackLabel={selectedTrack()?.label ?? "용어"}
                        lessonTitle={selectedLesson()?.title ?? "용어"}
                        isActive={part.id === selectedPartId()}
                        chars={displayChars()}
                        typed={limitedValue()}
                        preview={previewChar()}
                        setCardRef={setCardRef}
                        onActivate={setSelectedPartId}
                        onJump={jumpToContent}
                      />
                    )}
                  </For>
                </Show>
              }
            >
              <For each={selectedNoteLessonParts()}>
                {(part) => (
                  <Show
                    when={part.scenario}
                    fallback={
                      <NoteCard
                        part={part}
                        trackLabel={selectedTrack()?.label ?? "노트"}
                        lessonTitle={selectedLesson()?.title ?? "노트"}
                        isActive={part.id === selectedPartId()}
                        setCardRef={setCardRef}
                        onActivate={setSelectedPartId}
                        onJump={jumpToContent}
                      />
                    }
                  >
                    <ScenarioDrillCard
                      part={part}
                      trackLabel={selectedTrack()?.label ?? "노트"}
                      lessonTitle={selectedLesson()?.title ?? "노트"}
                      isActive={part.id === selectedPartId()}
                      setCardRef={setCardRef}
                      onActivate={setSelectedPartId}
                      onJump={jumpToContent}
                      onJumpToTerm={jumpToLexiconTerm}
                    />
                  </Show>
                )}
              </For>
            </Show>
            <Show when={parts().length === 0}>
              <p class="emptyParts">
                {isNotesTab() ? "노트 데이터가 없습니다." : "예문 데이터가 없습니다."}
              </p>
            </Show>
          </section>

          <Show when={!isNotesTab()}>
            <textarea
              ref={(element) => {
                inputRef = element;
              }}
              class="hiddenInput"
              value={isComposing() ? draftValue() : limitedValue()}
              onKeyDown={(event) => {
                if (event.isComposing) {
                  return;
                }
                // 입력은 항상 끝에서만 받는다. 커서를 옮기면 판정이 어긋난다.
                if (CARET_KEYS.has(event.key)) {
                  event.preventDefault();
                  return;
                }
                if (event.key !== "Enter" || !event.ctrlKey) {
                  return;
                }
                event.preventDefault();
                if (event.altKey) {
                  resetTyping();
                } else if (event.shiftKey) {
                  moveToPrevPart();
                } else {
                  moveToNextPart();
                }
              }}
              onBeforeInput={(event) => {
                const element = event.currentTarget;
                if (!event.isComposing) {
                  element.setSelectionRange(element.value.length, element.value.length);
                }
              }}
              onPaste={(event) => event.preventDefault()}
              onDrop={(event) => event.preventDefault()}
              onInput={(event) => {
                const nextValue = event.currentTarget.value;

                if (isComposing()) {
                  setDraftValue(nextValue);
                  return;
                }

                acceptInput(nextValue);
              }}
              onCompositionStart={() => {
                if (!hasLessons()) {
                  return;
                }
                setIsComposing(true);
                setDraftValue(limitedValue());
              }}
              onCompositionEnd={(event) => {
                // setIsComposing이 textarea 값을 동기적으로 되돌리므로 먼저 읽어 둔다
                const committedValue = event.currentTarget.value;
                setIsComposing(false);
                acceptInput(committedValue);
              }}
              spellcheck={false}
              autocapitalize="off"
              autocomplete="off"
              autocorrect="off"
              autofocus
              aria-label="타이핑 입력"
            />
            <div class="visuallyHidden" role="status">
              {isComplete()
                ? `완료. 정확도 ${accuracyValue()}%, ${wpmLabel()}`
                : ""}
            </div>
          </Show>

          <div class="controlBar" role="toolbar" aria-label="파트 조작">
            <Show when={!isNotesTab() && isComplete()}>
              <p class="completionNotice" aria-hidden="true">
                완료 · 정확도 {accuracyValue()}% · {wpmLabel()}
                <span class="completionHint">Ctrl+Enter로 다음 파트</span>
              </p>
            </Show>
            <div class="controlBarInner">
              <div class="controlItem">
                <button
                  type="button"
                  class="btn btnGhost"
                  onClick={moveToPrevPart}
                  disabled={!selectedPartId() || isFirstPartOverall()}
                >
                  이전 파트
                </button>
                <span class="controlHint">Ctrl+Shift+Enter</span>
              </div>
              <Show when={!isNotesTab()}>
                <div class="controlItem">
                  <button
                    type="button"
                    class="btn btnPrimary"
                    onClick={resetTyping}
                  >
                    다시 시작
                  </button>
                  <span class="controlHint">Ctrl+Alt+Enter</span>
                </div>
              </Show>
              <div class="controlItem">
                <button
                  type="button"
                  class="btn btnGhost"
                  onClick={moveToNextPart}
                  disabled={!selectedPartId()}
                >
                  {isLastPart() ? "처음으로" : "다음 파트"}
                </button>
                <span class="controlHint">Ctrl+Enter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Show when={!isNarrowLayout() && parts().length > 0}>
        <aside class="rightToc" aria-label="현재 레슨 파트">
          <PartsToc
            parts={parts()}
            selectedPartId={spyPartId() || selectedPartId()}
            onSelectPart={setSelectedPartId}
          />
        </aside>
      </Show>
    </div>
  );
}

export default App;
