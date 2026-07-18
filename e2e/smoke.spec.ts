import { expect, test } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, "screenshots");

async function readRadii(page: import("@playwright/test").Page, selectors: string[]) {
  return page.evaluate((list) => {
    return list.map((selector) => {
      const element = document.querySelector(selector);
      if (!element) {
        return { selector, radius: null };
      }
      return {
        selector,
        radius: getComputedStyle(element).borderRadius,
      };
    });
  }, selectors);
}

test.describe("개발 예문 타이핑 연습", () => {
  test("3열 Docs Shell·스크롤 카드·진행률·라운드 모서리가 보인다", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "개발 예문 타이핑 연습" }),
    ).toBeAttached();
    await expect(page.getByLabel("문서 탐색")).toBeVisible();
    await expect(page.getByLabel("현재 레슨 파트")).toBeVisible();
    await expect(page.getByLabel("원문")).toBeVisible();
    await expect(page.locator(".typingCard.isActive")).toBeVisible();
    await expect(
      page.locator(".typingCard.isActive .typingCardProgress"),
    ).toHaveText(/진행률:\s*1\/\d+/);
    await expect(page.getByRole("button", { name: "다시 시작" })).toBeVisible();
    await expect(page.getByRole("button", { name: "이전 파트" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: /다음 파트|처음으로/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /테마로 전환/ }),
    ).toBeVisible();

    // 좌측에는 레슨만, 파트 상세는 우측
    await expect(page.locator(".sidebar .partsToc")).toHaveCount(0);
    await expect(page.locator(".rightToc .partsTocLink").first()).toBeVisible();

    const navGroups = page.locator(".sidebar .navGroup");
    await expect(navGroups.first()).toBeVisible();
    expect(await navGroups.count()).toBeGreaterThan(0);

    const radii = await readRadii(page, [
      ".typingCard.isActive",
      ".btnPrimary",
      ".btnGhost",
      ".controlBarInner",
    ]);

    for (const item of radii) {
      expect(item.radius, `${item.selector} border-radius`).not.toBe("0px");
      expect(item.radius, `${item.selector} border-radius`).not.toBeNull();
    }

    const markerColor = await page.locator(".sidebar .navMarker").evaluate(
      (element) => getComputedStyle(element).backgroundColor,
    );
    // emerald-500 ≈ rgb(16, 185, 129)
    expect(markerColor).toMatch(/rgb\(\s*16,\s*185,\s*129\s*\)/);

    await page.screenshot({
      path: path.join(screenshotDir, "home-scroll-stack-light.png"),
      fullPage: true,
    });
  });

  test("다시 시작 버튼으로 입력을 초기화할 수 있다", async ({ page }) => {
    await page.goto("/");

    const practiceText = page.locator(".typingCard.isActive .practiceText");
    await expect(practiceText).toBeVisible();
    await expect(page.getByLabel("정확도")).toBeVisible();

    await page.getByRole("button", { name: "다시 시작" }).click();
    await expect(page.getByLabel("정확도")).toContainText(/0\/\d+/);

    await page.screenshot({
      path: path.join(screenshotDir, "reset-ready.png"),
      fullPage: true,
    });
  });

  test("우측 목차·다음·이전 파트로 활성 카드를 바꾼다", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    const activeProgress = page.locator(
      ".typingCard.isActive .typingCardProgress",
    );
    await expect(activeProgress).toHaveText(/진행률:\s*1\/\d+/);

    await page.locator(".rightToc .partsTocLink").nth(1).click();
    await expect(activeProgress).toHaveText(/진행률:\s*2\/\d+/);
    await expect(page.locator(".rightToc .partsTocLink.isActive")).toContainText(
      /.+/,
    );

    await page.getByRole("button", { name: "다음 파트" }).click();
    await expect(activeProgress).toHaveText(/진행률:\s*3\/\d+/);

    await page.getByRole("button", { name: "이전 파트" }).click();
    await expect(activeProgress).toHaveText(/진행률:\s*2\/\d+/);
  });

  test("테마 토글로 다크 모드를 전환한다", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    await page.getByRole("button", { name: "다크 테마로 전환" }).click();
    await expect(page.locator("html")).toHaveClass(/dark/);

    const stored = await page.evaluate(() =>
      localStorage.getItem("gmtl-type-recall-theme"),
    );
    expect(stored).toBe("dark");

    await page.screenshot({
      path: path.join(screenshotDir, "home-scroll-stack-dark.png"),
      fullPage: true,
    });

    await page.getByRole("button", { name: "라이트 테마로 전환" }).click();
    await expect(page.locator("html")).not.toHaveClass(/dark/);
  });

  test("언어·용어 탭을 전환하고 용어 카드를 표시한다", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    await expect(page.getByRole("tab", { name: "언어" })).toBeVisible();
    await expect(page.getByRole("tab", { name: "용어" })).toBeVisible();
    await expect(page.getByLabel("원문")).toBeVisible();

    await page.getByRole("tab", { name: "용어" }).click();
    await expect(
      page.getByRole("heading", { name: "실무 용어 타이핑 연습" }),
    ).toBeAttached();
    await expect(page.getByLabel("용어 카드")).toBeVisible();
    await expect(page.locator(".lexiconCard.isActive")).toBeVisible();
    await expect(page.locator(".lexiconCard.isActive .lexiconPrompt")).toBeVisible();
    await expect(page.locator(".lexiconCard.isActive .lexiconExample")).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "lexicon-tab-light.png"),
      fullPage: true,
    });
  });

  test("CSS Grid 시각 레슨에서 이미지·캡션·코드 카드를 표시한다", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    await page.getByRole("tab", { name: "언어" }).click();
    await page
      .getByRole("navigation", { name: "언어·파일 선택" })
      .getByRole("button", { name: "Grid", exact: true })
      .click();

    await expect(page.getByLabel("시각 참고")).toBeVisible();
    await expect(page.locator(".visualCard.isActive")).toBeVisible();
    await expect(page.locator(".visualCard.isActive .visualImage")).toBeVisible();
    await expect(page.locator(".visualCard.isActive .visualCaption")).toBeVisible();
    await expect(page.locator(".visualCard.isActive .visualCode")).toBeVisible();

    // 섹션 제목은 왼쪽 네비가 아니라 오른쪽 TOC에 있다
    await expect(
      page
        .getByLabel("현재 레슨 파트")
        .getByRole("button", { name: /좌우 반전/ }),
    ).toBeVisible();
    await expect(
      page
        .getByLabel("현재 레슨 파트")
        .getByRole("button", { name: /카드 레이아웃/ }),
    ).toBeVisible();

    await page
      .getByLabel("현재 레슨 파트")
      .getByRole("button", { name: /카드 레이아웃/ })
      .click();
    await expect(page.locator(".visualCard.isActive .visualCaption")).toContainText(
      /카드/,
    );

    await page.screenshot({
      path: path.join(screenshotDir, "visual-card-light.png"),
      fullPage: true,
    });
  });
});
