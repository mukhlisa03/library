import { Injectable } from '@angular/core';
import { Book, BOOKS } from '../data/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() {}

  getBooks(): Book[] {
    return BOOKS;
  }

  getBookById(id: number): Book | undefined {
    return BOOKS.find(book => book.id === id);
  }

  getBooksByAuthorId(authorId: number): Book[] {
    return BOOKS.filter(book => book.authorId === authorId);
  }
}
