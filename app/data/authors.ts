export interface Author {
  id: number;
  name: string;
  nationality?: string;
  birthYear?: number;
  bio?: string;
  books?: number[];
}

export const AUTHORS: Author[] = [
  { id: 1, name: 'F. Scott Fitzgerald', nationality: 'American', birthYear: 1896, bio: 'American novelist and short-story writer.', books: [1] },
  { id: 2, name: 'George Orwell', nationality: 'English', birthYear: 1903, bio: 'English novelist, essayist, journalist and critic.', books: [2] },
  { id: 3, name: 'Harper Lee', nationality: 'American', birthYear: 1926, bio: 'American novelist best known for To Kill a Mockingbird.', books: [3] }
];
