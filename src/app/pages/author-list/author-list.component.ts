import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: any[] = [];

  constructor(private authorService: AuthorService) {}

  ngOnInit() {
    this.authors = this.authorService.getAuthors();
  }
}
