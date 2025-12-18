export interface Book {
  id: number;
  title: string;
  authorId: number;
  publisher?: string;
  year?: number;
  description?: string;
  genre?: string;
}

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    authorId: 1,
    publisher: 'Scribner',
    year: 1925,
    genre: 'Fiction',
    description: 'A novel about the American dream.'
  },
  {
    id: 2,
    title: '1984',
    authorId: 2,
    publisher: 'Secker & Warburg',
    year: 1949,
    genre: 'Dystopia',
    description: 'Dystopian novel about surveillance and totalitarianism.'
  },
  {
    id: 3,
    title: 'To Kill a Mockingbird',
    authorId: 3,
    publisher: 'J. B. Lippincott',
    year: 1960,
    genre: 'Fiction',
    description: 'A novel about racial injustice in the Deep South.'
  }
];
