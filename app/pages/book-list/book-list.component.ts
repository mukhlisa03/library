import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: any[] = [];
  filter = '';

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }

  get filtered() {
    const q = this.filter.toLowerCase();
    return this.books.filter(b => b.title.toLowerCase().includes(q));
  }
}
