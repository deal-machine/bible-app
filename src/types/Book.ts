import { IChapter } from "./Chapter";

export interface IBook {
  abbrev: string;
  chapters: IChapter[];
  name: string;
}
