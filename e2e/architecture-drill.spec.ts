import { expect, test } from "@playwright/test";

test.describe("아키텍처 판단 훈련", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.removeItem("gmtl-type-recall-position");
    });
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");
  });

  test("노트에서 시나리오를 고르고 용어로 점프한다", async ({ page }) => {
    await page.getByRole("tab", { name: "노트" }).click();
    await expect(page.getByRole("heading", { name: /참고 노트|아키텍처 판단/ })).toBeAttached();

    await page
      .getByRole("navigation", { name: "노트·파일 선택" })
      .getByRole("button", { name: /아키텍처 판단 시나리오/ })
      .click();

    await expect(page.getByLabel(/참고 노트|판단 시나리오/)).toBeVisible();

    // 첫 시나리오 파트로 이동 (개요 다음)
    await page.locator(".rightToc .partsTocLink").nth(1).click();
    await expect(page.locator(".scenarioCard.isActive")).toBeVisible();
    await expect(page.locator(".scenarioCard.isActive .scenarioOptions")).toBeVisible();

    await page.locator(".scenarioCard.isActive .scenarioOption").first().click();
    await expect(page.locator(".scenarioCard.isActive .scenarioFeedback")).toBeVisible();

    await page.locator(".scenarioCard.isActive .scenarioTermLink").first().click();
    await expect(
      page.getByRole("heading", { name: "실무 용어 타이핑 연습" }),
    ).toBeAttached();
    await expect(page.locator(".lexiconCard.isActive")).toBeVisible();
  });

  test("비교 노트에서 판단 시나리오로 이어간다", async ({ page }) => {
    await page.getByRole("tab", { name: "노트" }).click();

    await page
      .getByRole("navigation", { name: "노트·파일 선택" })
      .getByRole("button", { name: /연동 경계 한눈에/ })
      .click();

    await expect(page.locator(".noteCard.isActive")).toBeVisible();
    await expect(page.locator(".noteCard.isActive .contentLinkButton").first()).toBeVisible();

    await page.locator(".noteCard.isActive .contentLinkButton").filter({ hasText: /판단:/ }).first().click();
    await expect(page.locator(".scenarioCard.isActive")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "아키텍처 판단 연습" }),
    ).toBeAttached();

    // 같은 탭 안에서 이동한 뒤에도 다음 탭 전환은 첫 항목으로 초기화된다
    await page.getByRole("tab", { name: "언어" }).click();
    await expect(page.locator(".typingCard.isActive")).toBeVisible();
    await expect(page.getByLabel("정확도")).toContainText(/0\/[1-9]/);
    await expect(page.locator(".typingCard.isActive .practiceText")).not.toContainText(
      "예문 데이터가 없습니다",
    );
  });

  test("노트 탭에서 이전·다음 버튼으로 이동한다", async ({ page }) => {
    await page.getByRole("tab", { name: "노트" }).click();
    const tocLinks = page.locator(".rightToc .partsTocLink");
    await expect(tocLinks.first()).toHaveClass(/isActive/);

    await page.getByRole("button", { name: "다음 파트" }).click();
    await expect(tocLinks.nth(1)).toHaveClass(/isActive/);

    await page.getByRole("button", { name: "이전 파트" }).click();
    await expect(tocLinks.first()).toHaveClass(/isActive/);
  });

  test("노트의 마크다운과 범위를 렌더링한다", async ({ page }) => {
    await page.getByRole("tab", { name: "노트" }).click();
    await page
      .getByRole("navigation", { name: "노트·파일 선택" })
      .getByRole("button", { name: /연동 경계 한눈에/ })
      .click();

    const card = page.locator(".noteCard").first();
    await expect(card).toContainText("Schema Federation");
    await expect(page.locator(".noteCard strong").first()).toBeVisible();
    await expect(page.locator(".noteProse").first()).not.toContainText("**");
    await expect(
      card.locator(".contentLinkButton").filter({ hasText: /프로젝트|폴더|구조/ }),
    ).not.toHaveCount(0);
  });
});
