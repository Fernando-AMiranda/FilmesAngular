import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'movie', component: MovieComponent},
  {path: 'search/:titulo', component: SearchComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
