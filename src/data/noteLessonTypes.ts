/** 노트·용어 간 이동 링크 */
export type ContentLink = {
  kind: "note" | "lexicon";
  trackId: string;
  lessonId: string;
  partId: string;
  title: string;
};

/** 노트 본문 블록 — 읽기 전용 표시용 */
export type NoteBlock =
  | { type: "prose"; text: string }
  | { type: "pre"; text: string }
  | { type: "list"; items: string[] }
  | { type: "kv"; rows: { key: string; value: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "heading"; text: string };

export type ScenarioOption = {
  id: string;
  label: string;
  whenPreferred: string;
  whenAvoid: string;
};

/** 판단 훈련용 시나리오 — notes scenarios[]에서 생성 */
export type NoteScenario = {
  id: string;
  title: string;
  context: string;
  symptom: string;
  options: ScenarioOption[];
  defaultPick: string;
  rationale: string;
  relatedTermIds: string[];
};

export type NotePart = {
  id: string;
  title: string;
  blocks: NoteBlock[];
  scenario?: NoteScenario;
  relatedLinks?: ContentLink[];
};

export type NoteLesson = {
  id: string;
  title: string;
  fileName: string;
  sourcePath: string;
  parts: NotePart[];
};

export type NoteTrack = {
  id: string;
  label: string;
  folderName: string;
  lessons: NoteLesson[];
};
