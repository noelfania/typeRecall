export type ContentLink = {
  kind: "note" | "lexicon";
  trackId: string;
  lessonId: string;
  partId: string;
  title: string;
};

export type LexiconPart = {
  id: string;
  title: string;
  section: string;
  prompt: string;
  answer: string;
  displayAnswer: string;
  example: string;
  /** 이 용어가 등장하는 판단 시나리오 */
  relatedDrills?: ContentLink[];
};

export type LexiconLesson = {
  id: string;
  title: string;
  fileName: string;
  sourcePath: string;
  parts: LexiconPart[];
};

export type LexiconTrack = {
  id: string;
  label: string;
  folderName: string;
  lessons: LexiconLesson[];
};
