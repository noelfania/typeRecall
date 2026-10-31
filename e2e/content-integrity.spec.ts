import { expect, test } from "@playwright/test";

import { languageTracks } from "../src/generated/languageLessons";
import { lexiconTracks } from "../src/generated/lexiconLessons";
import { visualTracks } from "../src/generated/visualLessons";
import { annotateCode } from "../src/lib/codeAnnotations";
import { typingTarget } from "./helpers";

const KEYBOARD_ONLY =
  /^[\x21-\x7eᄀ-ᇿ぀-ヿ㄰-㆏㐀-鿿가-힣]+$/;

function allParts() {
  const parts: { id: string; target: string }[] = [];
  for (const track of languageTracks) {
    for (const lesson of track.lessons) {
      for (const part of lesson.parts) {
        parts.push({
          id: part.id,
          target: typingTarget(part.displayContent || part.content, lesson.language),
        });
      }
    }
  }
  for (const track of visualTracks) {
    for (const lesson of track.lessons) {
      for (const part of lesson.parts) {
        parts.push({
          id: part.id,
          target: typingTarget(part.displayContent, part.language),
        });
      }
    }
  }
  for (const track of lexiconTracks) {
    for (const lesson of track.lessons) {
      for (const part of lesson.parts) {
        parts.push({ id: part.id, target: typingTarget(part.answer, "text") });
      }
    }
  }
  return parts;
}

test.describe("콘텐츠 무결성", () => {
  test("모든 파트의 입력 대상이 비어 있지 않고 키보드로 칠 수 있다", () => {
    const parts = allParts();
    expect(parts.length).toBeGreaterThan(900);

    const invalid = parts
      .filter((part) => !KEYBOARD_ONLY.test(part.target))
      .map((part) => part.id);
    expect(invalid).toEqual([]);
  });

  test("문자열 안의 주석 기호는 입력 대상에 남는다", () => {
    expect(typingTarget("var a = '// AAA';", "javascript")).toBe("vara='//AAA';");
    expect(typingTarget('echo "# no" # yes', "shell")).toBe('echo"#no"');
  });

  test("줄 설명으로 나눠도 입력할 글자가 순서대로 모두 남는다", () => {
    for (const track of languageTracks) {
      for (const lesson of track.lessons) {
        for (const part of lesson.parts) {
          const display = part.displayContent || part.content;
          const visible = annotateCode(display, lesson.language, part.title)
            .flatMap((line) => line.chars)
            .filter((item) => item.logicalIndex !== null)
            .map((item) => item.char)
            .join("");
          expect(visible, part.id).toBe(typingTarget(display, lesson.language));
        }
      }
    }
  });

  test("주석을 코드 줄의 설명으로 나눈다", () => {
    const notesOf = (display: string, language: string, title = "제목") =>
      annotateCode(display, language, title).map((line) => ({
        code: line.chars.map((item) => item.char).join(""),
        notes: line.notes,
      }));

    // 제목은 버리고, 줄 끝 주석은 그 줄에, 자기 줄 주석은 다음 줄에 붙는다
    expect(
      notesOf("// 제목\n// 앞 설명\nconst a = 1;   // 끝 설명", "javascript"),
    ).toEqual([
      {
        code: "const a = 1;",
        notes: [
          { kind: "note", text: "앞 설명" },
          { kind: "note", text: "끝 설명" },
        ],
      },
    ]);
    // 제목 뒤의 설명은 살린다
    expect(notesOf("// 제목 — 뜻 설명\nrun();", "javascript")[0].notes).toEqual([
      { kind: "note", text: "뜻 설명" },
    ]);
    // 결과값은 구분한다
    expect(notesOf("2 ** 10 // 1024", "javascript")[0].notes).toEqual([
      { kind: "result", text: "1024" },
    ]);
    expect(notesOf("x(); // 결과: abc", "javascript")[0].notes).toEqual([
      { kind: "result", text: "abc" },
    ]);
    // 값으로 시작하는 문장은 결과가 아니다
    for (const text of ["null|undefined → 재할당: 99", "0이면 거짓", "true면 통과"]) {
      expect(notesOf(`x(); // ${text}`, "javascript")[0].notes).toEqual([
        { kind: "note", text },
      ]);
    }
    // 값 뒤의 괄호 설명은 결과로 둔다
    expect(notesOf("2 ** 3 ** 2 // 512 (3**2=9, 2**9=512)", "javascript")[0].notes).toEqual([
      { kind: "result", text: "512 (3**2=9, 2**9=512)" },
    ]);
    // 여러 줄 결과값은 하나로 합친다
    expect(notesOf("run();\n// [\n//   1,\n// ]", "javascript")[0].notes).toEqual([
      { kind: "result", text: "[ 1, ]" },
    ]);
    // 변수에 담긴 값은 결과다
    expect(notesOf("f(); // adA=10, adB=20", "javascript")[0].notes[0].kind).toBe("result");
    // 정규식의 이스케이프된 슬래시는 주석이 아니다
    expect(notesOf("a.match(/x:\\/\\//) // 설명", "javascript")[0].code).toBe("a.match(/x:\\/\\//)");
    // 명령어의 문장 설명은 결과가 아니다
    expect(notesOf("git pull # 결과: 최신 이력 반영", "shell")[0].notes).toEqual([
      { kind: "note", text: "최신 이력 반영" },
    ]);
    // 코드 뒤에 남은 주석은 앞 줄에 붙는다
    expect(notesOf("run();\n// 끝난 뒤 설명", "javascript")[0].notes).toEqual([
      { kind: "note", text: "끝난 뒤 설명" },
    ]);
    // 주석 처리된 코드는 코드 자리에 남고, 그 설명만 떼어 낸다
    const commented = notesOf("// obj = {};   // 재할당 불가\nrun();", "javascript")[0];
    expect(commented.code).toBe("// obj = {};");
    expect(commented.notes).toEqual([{ kind: "note", text: "재할당 불가" }]);
    // 문자열 안의 // 는 주석이 아니다
    expect(notesOf("a = '// x'; // 설명", "javascript")[0].code).toBe("a = '// x';");
  });

  test("CSS 주석은 입력 대상에서 빠진다", () => {
    expect(typingTarget("/* 설명 */\na { color: red; }", "css")).toBe("a{color:red;}");
  });
});
