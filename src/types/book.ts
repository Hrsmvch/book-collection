export type ReadingStatus = 'to-read' | 'in-progress' | 'completed';

export type Genre = 
  | "Fiction"
  | "Non-Fiction"
  | "Fantasy"
  | "Science Fiction"
  | "Mystery"
  | "Biography"
  | "Historical"
  | "Romance";

export interface Book {
  id?: string;
  title: string;
  author: string;
  genre: Genre;
  createdAt: string | Date;
  status: ReadingStatus;
  language: 'Ukrainian' | 'English';
  rating?: number;
}
