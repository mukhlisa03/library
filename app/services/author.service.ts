import { Injectable } from '@angular/core';
import { Author, AUTHORS } from '../data/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor() {}

  getAuthors(): Author[] {
    return AUTHORS;
  }

  getAuthorById(id: number): Author | undefined {
    return AUTHORS.find(author => author.id === id);
  }
}
