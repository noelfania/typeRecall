import { expect, test, type Page } from "@playwright/test";

import { languageTracks } from "../src/generated/languageLessons";
import { visualTracks } from "../src/generated/visualLessons";
import { openAtPart, typingTarget } from "./helpers";

test.describe("타이핑 코어", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.removeItem("gmtl-type-recall-position");
    });
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");
    await page.locator(".typingCard.isActive").click();
  });

  test("정타 입력 시 정확도 100%와 typed가 오른다", async ({ page }) => {
    // 기본 첫 파트 content = "pwd" (bash)
    await page.keyboard.type("pwd");
    await expect(page.getByLabel("정확도")).toContainText(/정확도 100%/);
    await expect(page.getByLabel("정확도")).toContainText(/3\/3/);
  });

  test("오타 입력 시 그 글자에서 멈추고 이후 입력을 거절한다", async ({
    page,
  }) => {
    await page.keyboard.type("pxd");
    // 틀린 'x'까지 받고 정지 → 'd'는 거절. typed=2 (p,x)
    await expect(page.getByLabel("정확도")).toContainText(/2\/3/);
    await expect(page.getByLabel("정확도")).not.toContainText(/정확도 100%/);

    await page.keyboard.type("wd");
    await expect(page.getByLabel("정확도")).toContainText(/2\/3/);
  });

  test("언어 탭에서 공백·줄바꿈을 무시하고 판정한다", async ({ page }) => {
    await page.locator(".rightToc .partsTocLink").nth(1).click();
    await page.locator(".typingCard.isActive").click();
    // part-2 content: "ls\nls -al" → stripSpaces 후 "lsls-al"
    await page.keyboard.type("ls ls -al");
    await expect(page.getByLabel("정확도")).toContainText(/정확도 100%/);
    await expect(page.getByLabel("정확도")).toContainText(/7\/7/);
  });

  test("Ctrl+Alt+Enter로 입력을 리셋한다", async ({ page }) => {
    await page.keyboard.type("pw");
    await expect(page.getByLabel("정확도")).toContainText(/2\/3/);

    await page.keyboard.press("Control+Alt+Enter");
    await expect(page.getByLabel("정확도")).toContainText(/0\/3/);
  });

  test("고친 오타도 정확도에 남고 완료 시 결과를 보여 준다", async ({ page }) => {
    await page.keyboard.type("px");
    await page.keyboard.press("Backspace");
    await page.keyboard.type("wd");

    await expect(page.getByLabel("정확도")).toContainText(/3\/3/);
    await expect(page.getByLabel("정확도")).toContainText(/정확도 75%/);
    await expect(page.locator(".completionNotice")).toContainText(/완료/);
    await expect(page.locator(".completionNotice")).toContainText(/WPM/);
  });

  test("방향키로 커서를 옮겨도 입력이 망가지지 않는다", async ({ page }) => {
    await page.keyboard.type("pw");
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("Home");
    await page.keyboard.type("d");
    await expect(page.getByLabel("정확도")).toContainText(/3\/3/);
    await expect(page.getByLabel("정확도")).toContainText(/정확도 100%/);
  });

  test("붙여넣기를 막는다", async ({ page }) => {
    const prevented = await page.locator(".hiddenInput").evaluate((element) => {
      const event = new ClipboardEvent("paste", { bubbles: true, cancelable: true });
      element.dispatchEvent(event);
      return event.defaultPrevented;
    });
    expect(prevented).toBe(true);
  });

  test("활성 파트의 목차 버튼을 눌러도 이어서 입력할 수 있다", async ({ page }) => {
    await page.keyboard.type("p");
    await page.locator(".rightToc .partsTocLink").first().click();
    await page.keyboard.type("wd");
    await expect(page.getByLabel("정확도")).toContainText(/3\/3/);
  });

  test("입력해도 글자 요소를 다시 만들지 않는다", async ({ page }) => {
    const chars = page.locator(".typingCard.isActive .practiceText .char");
    await chars.first().evaluate((element) => {
      element.setAttribute("data-marker", "kept");
    });
    await page.keyboard.type("pw");
    await expect(chars.first()).toHaveAttribute("data-marker", "kept");
  });
});

test.describe("표시와 판정 일치", () => {
  const expectAllTyped = async (page: Page, target: string) => {
    await page.keyboard.type(target);
    await expect(page.getByLabel("정확도")).toContainText(
      new RegExp(`${target.length}/${target.length}`),
    );
    await expect(page.getByLabel("정확도")).toContainText(/정확도 100%/);
    await expect(page.locator(".typingCard.isActive .char.isWrong")).toHaveCount(0);
  };

  test("공백이 있는 용어를 공백을 포함해 쳐도 맞다", async ({ page }) => {
    await openAtPart(page, "arch-api-gateway");
    await page.keyboard.type("API Gateway");
    await expect(page.getByLabel("정확도")).toContainText(/10\/10/);
    await expect(page.locator(".typingCard.isActive .char.isWrong")).toHaveCount(0);
  });

  test("CSS 파트는 주석을 건너뛰고 코드부터 친다", async ({ page }) => {
    await openAtPart(page, "language-css-p01-part-1");
    await expectAllTyped(page, "*,*::before,*::after{box-sizing:border-box;}");
  });

  test("시각 레슨 파트는 줄바꿈 없이 칠 수 있다", async ({ page }) => {
    const part = visualTracks[0].lessons[0].parts.find((item) =>
      item.displayContent.includes("\n"),
    )!;
    await openAtPart(page, part.id);
    await expectAllTyped(page, typingTarget(part.displayContent, part.language));
  });

  test("표시된 이스케이프 그대로 정규식을 칠 수 있다", async ({ page }) => {
    await openAtPart(page, "language-regex-for-javascript-p03-part-4");
    await expectAllTyped(page, '"123abc.mp4".match(/(?<=\\d+)[A-Za-z]+(?=\\.)/)[0];');
  });

  for (const partId of [
    "language-react-p02-part-3",
    "language-html-p01-part-8",
    "language-docker-p03-part-1",
    "language-python-p03-part-1",
    "language-sql-p04-part-4",
    "language-spring-boot-p01-part-6",
    "language-spring-boot-p06-part-1",
    "language-spring-boot-p07-part-2",
    "language-gradle-p01-part-4",
    "language-gradle-p02-part-2",
    "language-yaml-p01-part-6",
  ]) {
    test(`보강 예문을 끝까지 칠 수 있다: ${partId}`, async ({ page }) => {
      const found = languageTracks
        .flatMap((track) => track.lessons)
        .flatMap((lesson) =>
          lesson.parts.map((part) => ({ part, language: lesson.language })),
        )
        .find((item) => item.part.id === partId)!;
      await openAtPart(page, partId);
      await page.keyboard.type(
        typingTarget(found.part.displayContent, found.language),
      );
      await expect(page.locator(".completionNotice")).toContainText(/완료/);
      await expect(page.locator(".typingCard.isActive .char.isWrong")).toHaveCount(0);
    });
  }

  test("설명을 코드 줄 바로 밑에 항상 보여 준다", async ({ page }) => {
    await openAtPart(page, "language-python-p03-part-1");
    const printLine = page
      .locator(".typingCard.isActive .codeLine")
      .filter({ hasText: "print" });
    await expect(printLine.locator(".codeNote.isResult")).toContainText("kim is 30");
    // 코드 칸에는 주석이 없고, 입력 전후로 설명이 유지된다
    await expect(printLine.locator(".codeText")).not.toContainText("결과");
    await page.keyboard.type("name");
    await expect(printLine.locator(".codeNote.isResult")).toBeVisible();

    const textBox = await printLine.locator(".codeText").boundingBox();
    const noteBox = await printLine.locator(".codeNote").boundingBox();
    expect(noteBox!.y).toBeGreaterThanOrEqual(textBox!.y + textBox!.height - 2);
  });

  test("설명 속 ** 연산자를 굵게로 해석하지 않는다", async ({ page }) => {
    await openAtPart(page, "language-javascript-p01-part-2");
    await expect(page.locator(".typingCard.isActive .codeNote").nth(1)).toContainText(
      "3**2=9, 2**9=512",
    );
  });

  test("한글 IME 조합을 확정하면 입력으로 받는다", async ({ page }) => {
    await openAtPart(page, "language-excel-p01-part-4");
    await page.keyboard.type("=INDEX(");
    await expect(page.getByLabel("정확도")).toContainText(/7\//);

    const cdp = await page.context().newCDPSession(page);
    for (const syllable of ["사", "원"]) {
      await cdp.send("Input.imeSetComposition", {
        text: syllable,
        selectionStart: 1,
        selectionEnd: 1,
      });
      await cdp.send("Input.insertText", { text: syllable });
    }

    await expect(page.getByLabel("정확도")).toContainText(/9\//);
    await expect(page.getByLabel("정확도")).toContainText(/정확도 100%/);
  });
});
