import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { AuthorDetailComponent } from './pages/author-detail/author-detail.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/:id', component: AuthorDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];
