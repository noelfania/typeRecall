import { expect, test } from "@playwright/test";


test.describe("데스크톱 레이아웃 시각 확인", () => {
  test.use({
    viewport: { width: 1920, height: 1080 },
  });

  test("넓은 화면에서 좌·중·우 3열과 라운드 카드를 확인한다", async ({ page }, testInfo) => {
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
      path: testInfo.outputPath("desktop-three-column.png"),
      fullPage: true,
    });
  });

  test("좁은 화면에서는 파트 목록이 좌측 드로어에 포함된다", async ({ page }, testInfo) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator(".sidebar")).toBeHidden();
    await expect(page.locator(".rightToc")).toBeHidden();
    await expect(page.getByRole("button", { name: "메뉴 열기" })).toBeVisible();

    // 긴 코드 줄의 이어지는 줄은 왼쪽 끝으로 돌아가지 않는다
    const codeText = page.locator(".typingCard.isActive .codeText").first();
    expect(
      await codeText.evaluate((element) => parseFloat(getComputedStyle(element).paddingLeft)),
    ).toBeGreaterThan(0);

    // 헤더에 진행률이 보이고, 탭 글자가 세로로 꺾이거나 화면이 가로로 넘치지 않는다
    await expect(page.getByLabel("정확도")).toBeVisible();
    const tab = page.locator(".headerTabBar .appTab").first();
    const tabBox = await tab.boundingBox();
    expect(tabBox!.width).toBeGreaterThan(tabBox!.height * 0.9);
    const toggleBox = await page.getByRole("button", { name: "메뉴 열기" }).boundingBox();
    expect(toggleBox!.width).toBeGreaterThanOrEqual(36);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);

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
      path: testInfo.outputPath("narrow-parts-in-drawer.png"),
      fullPage: true,
    });
  });
});
