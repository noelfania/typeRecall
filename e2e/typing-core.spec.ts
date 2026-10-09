import { expect, test } from "@playwright/test";

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
});
