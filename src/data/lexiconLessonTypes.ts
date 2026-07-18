export type LexiconPart = {
  id: string;
  title: string;
  section: string;
  prompt: string;
  answer: string;
  displayAnswer: string;
  example: string;
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
