import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  author: any;

  constructor(private route: ActivatedRoute, private authorService: AuthorService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.author = this.authorService.getAuthorById(id);
    }
  }
}
