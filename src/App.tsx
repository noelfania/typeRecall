import { useEffect, useMemo, useRef, useState } from 'react';

import { languageTracks } from './generated/languageLessons';
import { buildHighlightChars } from './lib/codeHighlight';

function App() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [draftValue, setDraftValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const [selectedTrackId, setSelectedTrackId] = useState(languageTracks[0]?.id ?? '');
  const [selectedLessonId, setSelectedLessonId] = useState(languageTracks[0]?.lessons[0]?.id ?? '');
  const [selectedPartId, setSelectedPartId] = useState(languageTracks[0]?.lessons[0]?.parts[0]?.id ?? '');

  const selectedTrack = useMemo(() => {
    return languageTracks.find((track) => track.id === selectedTrackId) ?? languageTracks[0] ?? null;
  }, [selectedTrackId]);

  useEffect(() => {
    if (!selectedTrack) {
      setSelectedLessonId('');
      return;
    }

    const hasSelectedLesson = selectedTrack.lessons.some((lesson) => lesson.id === selectedLessonId);
    if (!hasSelectedLesson) {
      setSelectedLessonId(selectedTrack.lessons[0]?.id ?? '');
    }
  }, [selectedLessonId, selectedTrack]);

  const selectedLesson = useMemo(() => {
    if (!selectedTrack) {
      return null;
    }

    return selectedTrack.lessons.find((lesson) => lesson.id === selectedLessonId) ?? selectedTrack.lessons[0] ?? null;
  }, [selectedLessonId, selectedTrack]);

  useEffect(() => {
    if (!selectedLesson) {
      setSelectedPartId('');
      return;
    }

    const hasSelectedPart = selectedLesson.parts.some((part) => part.id === selectedPartId);
    if (!hasSelectedPart) {
      setSelectedPartId(selectedLesson.parts[0]?.id ?? '');
    }
  }, [selectedLesson, selectedPartId]);

  const selectedPart = useMemo(() => {
    if (!selectedLesson) {
      return null;
    }

    return selectedLesson.parts.find((part) => part.id === selectedPartId) ?? selectedLesson.parts[0] ?? null;
  }, [selectedLesson, selectedPartId]);

  const practiceText = selectedPart?.content ?? '예문 데이터가 없습니다.';
  const displayText = selectedPart?.displayContent ?? practiceText;
  const practiceLanguage = selectedLesson?.language ?? 'text';

  const normalizedTarget = useMemo(() => practiceText.replace(/\s/g, ''), [practiceText]);
  const limitedValue = inputValue.slice(0, normalizedTarget.length);
  const totalCount = normalizedTarget.length;
  const typedCount = limitedValue.length;

  useEffect(() => {
    inputRef.current?.focus();
  }, [selectedPart?.id]);

  useEffect(() => {
    setInputValue('');
    setDraftValue('');
    setIsComposing(false);
  }, [selectedPart?.id]);

  const displayChars = useMemo(() => {
    return buildHighlightChars(displayText, practiceLanguage);
  }, [displayText, practiceLanguage]);

  const correctCount = useMemo(() => {
    let count = 0;
    for (let index = 0; index < limitedValue.length; index += 1) {
      if (limitedValue[index] === normalizedTarget[index]) {
        count += 1;
      }
    }
    return count;
  }, [limitedValue, normalizedTarget]);
  const accuracyValue = typedCount === 0 ? 100 : Math.round((correctCount / typedCount) * 100);
  const isDone = typedCount === totalCount;
  const normalizedDraft = useMemo(() => draftValue.replace(/\s/g, ''), [draftValue]);
  const previewText = isComposing && normalizedDraft.startsWith(limitedValue)
    ? normalizedDraft.slice(limitedValue.length)
    : '';
  const previewChar = previewText[previewText.length - 1] ?? '';
  const trackIndex = selectedTrack ? languageTracks.findIndex((track) => track.id === selectedTrack.id) : -1;
  const lessonIndex = selectedTrack && selectedLesson
    ? selectedTrack.lessons.findIndex((lesson) => lesson.id === selectedLesson.id)
    : -1;
  const partIndex = selectedLesson && selectedPart
    ? selectedLesson.parts.findIndex((part) => part.id === selectedPart.id)
    : -1;
  const hasLessons = languageTracks.some((track) => track.lessons.length > 0);
  const isLastLesson = selectedTrack !== null
    && selectedLesson !== null
    && selectedPart !== null
    && trackIndex === languageTracks.length - 1
    && lessonIndex === selectedTrack.lessons.length - 1
    && partIndex === selectedLesson.parts.length - 1;

  const acceptInput = (rawValue: string) => {
    const normalizedInput = rawValue.replace(/\s/g, '');
    let nextAcceptedValue = '';

    for (let index = 0; index < normalizedInput.length; index += 1) {
      if (normalizedInput[index] !== normalizedTarget[index]) {
        break;
      }
      nextAcceptedValue += normalizedInput[index];
    }

    setInputValue(nextAcceptedValue);
    setDraftValue(nextAcceptedValue);
  };

  const resetTyping = () => {
    setInputValue('');
    setDraftValue('');
    setIsComposing(false);
    inputRef.current?.focus();
  };

  const moveToNextLesson = () => {
    if (!selectedTrack || !selectedLesson || !selectedPart) {
      return;
    }

    const nextPart = selectedLesson.parts[partIndex + 1];
    if (nextPart) {
      setSelectedPartId(nextPart.id);
      return;
    }

    const nextLesson = selectedTrack.lessons[lessonIndex + 1];
    if (nextLesson) {
      setSelectedLessonId(nextLesson.id);
      setSelectedPartId(nextLesson.parts[0]?.id ?? '');
      return;
    }

    const nextTrack = languageTracks[trackIndex + 1];
    if (nextTrack?.lessons[0]) {
      setSelectedTrackId(nextTrack.id);
      setSelectedLessonId(nextTrack.lessons[0].id);
      setSelectedPartId(nextTrack.lessons[0].parts[0]?.id ?? '');
      return;
    }

    const firstTrack = languageTracks[0];
    const firstLesson = firstTrack?.lessons[0];
    if (firstTrack && firstLesson) {
      setSelectedTrackId(firstTrack.id);
      setSelectedLessonId(firstLesson.id);
      setSelectedPartId(firstLesson.parts[0]?.id ?? '');
    }
  };

  return (
    <main
      className="page"
      onClick={(event) => {
        const target = event.target;
        if (target instanceof HTMLElement && target.closest('button, select, option, label')) {
          return;
        }
        inputRef.current?.focus();
      }}
    >
      <section className="panel">
        <header className="header">
          <h1>개발 예문 타이핑 연습</h1>
          <p className="subtitle">영어는 바로 반영되고, 한글 조합 입력은 글자가 완성되는 순간 판정합니다. 공백과 줄바꿈은 무시됩니다.</p>
        </header>

        <section className="toolbar" aria-label="예문 선택">
          <div className="toolbarGroup">
            <span className="toolbarLabel">언어</span>
            <div className="trackList">
              {languageTracks.map((track) => {
                const className = track.id === selectedTrack?.id ? 'trackButton isActive' : 'trackButton';
                return (
                  <button
                    key={track.id}
                    type="button"
                    className={className}
                    onClick={() => setSelectedTrackId(track.id)}
                  >
                    {track.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="toolbarGroup">
            <label className="toolbarLabel" htmlFor="lesson-select">파일</label>
            <select
              id="lesson-select"
              className="lessonSelect"
              value={selectedLesson?.id ?? ''}
              onChange={(event) => {
                const nextLessonId = event.target.value;
                const nextLesson = selectedTrack?.lessons.find((lesson) => lesson.id === nextLessonId);
                setSelectedLessonId(nextLessonId);
                setSelectedPartId(nextLesson?.parts[0]?.id ?? '');
              }}
              disabled={!selectedTrack}
            >
              {selectedTrack?.lessons.map((lesson) => (
                <option key={lesson.id} value={lesson.id}>
                  {lesson.title}
                </option>
              ))}
            </select>
          </div>

          <div className="toolbarGroup">
            <label className="toolbarLabel" htmlFor="part-select">파트</label>
            <select
              id="part-select"
              className="lessonSelect"
              value={selectedPart?.id ?? ''}
              onChange={(event) => setSelectedPartId(event.target.value)}
              disabled={!selectedLesson}
            >
              {selectedLesson?.parts.map((part) => (
                <option key={part.id} value={part.id}>
                  {part.title}
                </option>
              ))}
            </select>
          </div>
        </section>

        <div className="stats">
          <div className="statCard">
            <span className="statLabel">진행률</span>
            <strong>{typedCount} / {totalCount}</strong>
          </div>
          <div className="statCard">
            <span className="statLabel">정확도</span>
            <strong>{accuracyValue}%</strong>
          </div>
          <div className="statCard">
            <span className="statLabel">파트</span>
            <strong>{selectedPart ? `${partIndex + 1} / ${selectedLesson?.parts.length ?? 0}` : '없음'}</strong>
          </div>
        </div>

        <section className="lessonMeta" aria-label="현재 예문 정보">
          <strong className="lessonTitle">{selectedPart?.title ?? selectedLesson?.title ?? '예문 없음'}</strong>
          <span className="lessonFile">{selectedLesson?.title ?? '파일 없음'}</span>
          <span className="lessonPath">{selectedLesson?.sourcePath ?? 'assets/typingSource/Language-*'}</span>
        </section>

        <section className="textPanel" aria-label="원문">
          <h2>예문 원문</h2>
          <p className="practiceText">
            {displayChars.map(({ char, key, logicalIndex, tone }) => {
              let className = `char tone-${tone}`;
              const isWhitespace = /\s/.test(char);

              if (logicalIndex === null && isWhitespace) {
                className = `${className} isGap`;
              } else if (logicalIndex !== null && logicalIndex < limitedValue.length) {
                className = limitedValue[logicalIndex] === char ? `${className} isCorrect` : 'char isWrong';
              } else if (logicalIndex !== null && logicalIndex === limitedValue.length) {
                className = previewChar ? `${className} isCurrent hasPreview` : `${className} isCurrent`;
              }

              return (
                <span key={key} className={className}>
                  {char}
                  {logicalIndex === limitedValue.length && previewChar ? (
                    <span className="charPreview">{previewChar}</span>
                  ) : null}
                </span>
              );
            })}
          </p>
        </section>

        <textarea
          ref={inputRef}
          className="hiddenInput"
          value={isComposing ? draftValue : limitedValue}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && event.ctrlKey) {
              event.preventDefault();
              moveToNextLesson();
            }
          }}
          onChange={(event) => {
            const nextValue = event.target.value;

            if (isComposing) {
              setDraftValue(nextValue);
              return;
            }

            acceptInput(nextValue);
          }}
          onCompositionStart={() => {
            if (!hasLessons) {
              return;
            }
            setIsComposing(true);
            setDraftValue(limitedValue);
          }}
          onCompositionEnd={(event) => {
            setIsComposing(false);
            acceptInput(event.currentTarget.value);
          }}
          spellCheck={false}
          autoFocus
          aria-hidden="true"
          tabIndex={-1}
        />

        <div className="actions">
          <button
            type="button"
            className="resetButton"
            onClick={resetTyping}
          >
            다시 시작
          </button>
          <button
            type="button"
            className="nextButton"
            onClick={moveToNextLesson}
            disabled={!selectedPart}
          >
            {isLastLesson ? '처음으로' : '다음 파트'}
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
