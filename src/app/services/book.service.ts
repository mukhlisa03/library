import { Injectable } from '@angular/core';
import { books } from '../data/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks() {
    return books;
  }

  getBookById(id: string) {
    return books.find(book => book.id === parseInt(id));
  }
}
