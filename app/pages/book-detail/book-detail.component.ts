import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  book: any;
  author: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.bookService.getBookById(id);

    if (!this.book) {
      this.router.navigate(['/404']);
      return;
    }

    this.author = this.authorService.getAuthorById(this.book.authorId);
  }
}
