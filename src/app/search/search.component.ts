import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route : ActivatedRoute , private service : MovieService) { }

   tituloBusca : string;

   filmesBuscados : Array<Movie>

  ngOnInit() {
    alert("buscado!");
    this.tituloBusca = this.route.snapshot.paramMap.get('tituloBusca');
    this.filmesBuscados = new Array();
    this.buscarFilmes();
  }

  public buscarFilmes() : void{
      this.service.getFilmesTitulo(this.tituloBusca).subscribe( req => this.filmesBuscados = req);
  }

}
