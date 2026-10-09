import { expect, test } from "@playwright/test";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, "screenshots");

test.describe("데스크톱 레이아웃 시각 확인", () => {
  test.use({
    viewport: { width: 1920, height: 1080 },
  });

  test("넓은 화면에서 좌·중·우 3열과 라운드 카드를 확인한다", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.getByLabel("문서 탐색")).toBeVisible();
    await expect(page.locator(".sidebar")).toBeVisible();
    await expect(page.getByLabel("현재 레슨 파트")).toBeVisible();
    await expect(page.locator(".menuToggle")).toBeHidden();
    await expect(page.locator(".typingCard.isActive")).toBeVisible();
    await expect(page.locator(".navMarker")).toBeVisible();
    await expect(page.getByLabel("정확도")).toContainText(/\d+\/\d+/);

    const radii = await page.evaluate(() => {
      const selectors = [
        ".typingCard.isActive",
        ".btnPrimary",
        ".btnGhost",
        ".controlBarInner",
        ".charPreview",
      ];
      return selectors.map((selector) => {
        const element = document.querySelector(selector);
        return {
          selector,
          radius: element ? getComputedStyle(element).borderRadius : null,
        };
      });
    });

    for (const item of radii) {
      // charPreview는 입력이 없으면 없을 수 있음
      if (item.selector === ".charPreview" && item.radius === null) {
        continue;
      }
      expect(item.radius, `${item.selector} border-radius`).not.toBe("0px");
      expect(item.radius, `${item.selector} border-radius`).not.toBeNull();
    }

    await page.screenshot({
      path: path.join(screenshotDir, "desktop-three-column.png"),
      fullPage: true,
    });
  });

  test("좁은 화면에서는 파트 목록이 좌측 드로어에 포함된다", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator(".sidebar")).toBeHidden();
    await expect(page.locator(".rightToc")).toBeHidden();
    await expect(page.getByRole("button", { name: "메뉴 열기" })).toBeVisible();

    await page.getByRole("button", { name: "메뉴 열기" }).click();
    await expect(page.getByLabel("탐색 메뉴")).toBeVisible();
    await expect(page.locator(".mobileDrawer .navGroup").first()).toBeVisible();
    await expect(
      page.getByLabel("좁은 화면 파트 목록"),
    ).toBeVisible();
    await expect(
      page.locator(".mobileDrawer .partsTocLink").first(),
    ).toBeVisible();

    await page.screenshot({
      path: path.join(screenshotDir, "narrow-parts-in-drawer.png"),
      fullPage: true,
    });
  });
});
