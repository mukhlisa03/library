import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors: any[] = [];
  filter = '';

  constructor(private authorService: AuthorService) {
    this.authors = this.authorService.getAuthors();
  }

  get filtered() {
    const q = this.filter.toLowerCase();
    return this.authors.filter(a => a.name.toLowerCase().includes(q));
  }
}
