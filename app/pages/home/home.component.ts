import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: any[] = [];
  authors: any[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) {
    this.books = this.bookService.getBooks();
    this.authors = this.authorService.getAuthors();
  }
}