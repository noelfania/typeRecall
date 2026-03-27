import { useEffect, useMemo, useRef, useState } from 'react';

const practiceText = `훈민정음

나라의 말이 중국과 달라
문자와 서로 통하지 아니하니,
이런 까닭으로 어리석은[6] 백성이 이르고자 할 바가 있어도
마침내 제 뜻을 능히 펴지 못할 사람이 많으니라.
내가 이를 위하여 가엾이 여겨
새로 스물여덟 자를 만드노니
사람마다 하여금 쉬이 익혀 날로 쓰는 데 편하게 하고자 할 따름이니라.`;

function App() {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [draftValue, setDraftValue] = useState('');
  const [isComposing, setIsComposing] = useState(false);

  const normalizedTarget = useMemo(() => practiceText.replace(/\s/g, ''), []);
  const limitedValue = inputValue.slice(0, normalizedTarget.length);
  const totalCount = normalizedTarget.length;
  const typedCount = limitedValue.length;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const displayChars = useMemo(() => {
    let logicalIndex = 0;
    return practiceText.split('').map((char, index) => {
      if (/\s/.test(char)) {
        return { char, key: `${char}-${index}`, logicalIndex: null };
      }

      const item = { char, key: `${char}-${index}`, logicalIndex };
      logicalIndex += 1;
      return item;
    });
  }, []);

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

  return (
    <main className="page" onClick={() => inputRef.current?.focus()}>
      <section className="panel">
        <header className="header">
          <h1>훈민정음 타이핑 연습</h1>
          <p className="subtitle">영어는 바로 반영되고, 한글 조합 입력은 글자가 완성되는 순간 판정합니다. 공백과 줄바꿈은 무시됩니다.</p>
        </header>

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
            <span className="statLabel">상태</span>
            <strong>{isDone ? '완료' : '연습 중'}</strong>
          </div>
        </div>

        <section className="textPanel" aria-label="원문">
          <h2>원문</h2>
          <p className="practiceText">
            {displayChars.map(({ char, key, logicalIndex }) => {
              let className = 'char';

              if (logicalIndex === null) {
                className = 'char isGap';
              } else if (logicalIndex < limitedValue.length) {
                className = limitedValue[logicalIndex] === char ? 'char isCorrect' : 'char isWrong';
              } else if (logicalIndex === limitedValue.length) {
                className = previewChar ? 'char isCurrent hasPreview' : 'char isCurrent';
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
          onChange={(event) => {
            const nextValue = event.target.value;

            if (isComposing) {
              setDraftValue(nextValue);
              return;
            }

            acceptInput(nextValue);
          }}
          onCompositionStart={() => {
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
            onClick={() => {
              setInputValue('');
              setDraftValue('');
              setIsComposing(false);
            }}
          >
            다시 시작
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
