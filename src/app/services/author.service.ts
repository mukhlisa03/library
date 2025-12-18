import { Injectable } from '@angular/core';
import { authors } from '../data/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  getAuthors() {
    return authors;
  }

  getAuthorById(id: string) {
    return authors.find(author => author.id === parseInt(id));
  }
}
