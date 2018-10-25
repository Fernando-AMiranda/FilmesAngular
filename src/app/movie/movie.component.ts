import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from './movie.model';
import { EventiEmitterService } from '../eventi-emitter.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private service : MovieService ,private emitter: EventiEmitterService) { }

    filmes : Array<Movie>

  ngOnInit() {
    this.filmes = new Array();
    this.buscarTodos();
  }

  public buscarTodos(): void{
    this.service.getFilmes().subscribe(filmes => this.filmes = filmes);
  }


}
