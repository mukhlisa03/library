import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BookService } from '../../services/book.service';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
  author: any;
  books: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorService: AuthorService,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.author = this.authorService.getAuthorById(id);

    if (!this.author) {
      this.router.navigate(['/404']);
      return;
    }

    this.books = this.bookService.getBooksByAuthorId(this.author.id);
  }
}
