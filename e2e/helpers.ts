import type { Page } from "@playwright/test";

import { languageTracks } from "../src/generated/languageLessons";
import { lexiconTracks } from "../src/generated/lexiconLessons";
import { visualTracks } from "../src/generated/visualLessons";
import { buildHighlightChars } from "../src/lib/codeHighlight";

export function typingTarget(text: string, language: string) {
  return buildHighlightChars(text, language)
    .filter((item) => item.logicalIndex !== null)
    .map((item) => item.char)
    .join("");
}

/** 저장된 위치를 심어 해당 파트에서 앱을 연다 */
export async function openAtPart(page: Page, partId: string) {
  const position = findPosition(partId);
  await page.addInitScript((value) => {
    localStorage.setItem("gmtl-type-recall-position", JSON.stringify(value));
  }, position);
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  await page.locator(".typingCard.isActive").click();
}

function findPosition(partId: string) {
  for (const track of languageTracks) {
    for (const lesson of track.lessons) {
      if (lesson.parts.some((part) => part.id === partId)) {
        return { tab: "language", trackId: track.id, lessonId: lesson.id, partId };
      }
    }
  }
  for (const track of visualTracks) {
    for (const lesson of track.lessons) {
      if (lesson.parts.some((part) => part.id === partId)) {
        // 시각 레슨은 언어 탭의 CSS 트랙에 합쳐져 있다
        return { tab: "language", trackId: "css", lessonId: lesson.id, partId };
      }
    }
  }
  for (const track of lexiconTracks) {
    for (const lesson of track.lessons) {
      if (lesson.parts.some((part) => part.id === partId)) {
        return { tab: "lexicon", trackId: track.id, lessonId: lesson.id, partId };
      }
    }
  }
  throw new Error(`파트를 찾을 수 없음: ${partId}`);
}
