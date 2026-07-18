/** 노트 본문 블록 — 읽기 전용 표시용 */
export type NoteBlock =
  | { type: "prose"; text: string }
  | { type: "pre"; text: string }
  | { type: "list"; items: string[] }
  | { type: "kv"; rows: { key: string; value: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "heading"; text: string };

export type NotePart = {
  id: string;
  title: string;
  blocks: NoteBlock[];
};

export type NoteLesson = {
  id: string;
  title: string;
  fileName: string;
  sourcePath: string;
  parts: NotePart[];
};

export type NoteTrack = {
  id: string;
  label: string;
  folderName: string;
  lessons: NoteLesson[];
};
