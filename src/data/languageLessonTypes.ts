export type LanguagePart = {
  id: string;
  title: string;
  content: string;
  displayContent: string;
};

export type LanguageLesson = {
  id: string;
  title: string;
  fileName: string;
  sourcePath: string;
  language: string;
  parts: LanguagePart[];
};

export type LanguageTrack = {
  id: string;
  label: string;
  folderName: string;
  lessons: LanguageLesson[];
};
