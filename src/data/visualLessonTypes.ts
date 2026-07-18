export type VisualPart = {
  id: string;
  title: string;
  content: string;
  displayContent: string;
  language: string;
  imagePath: string;
  caption: string;
  explanation: string;
  displayCaptions: string[];
};

export type VisualLesson = {
  id: string;
  title: string;
  slug: string;
  sourcePath: string;
  parts: VisualPart[];
};

export type VisualTrack = {
  id: string;
  label: string;
  folderName: string;
  lessons: VisualLesson[];
};
