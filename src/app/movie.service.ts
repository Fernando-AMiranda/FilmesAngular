import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Movie } from './movie/movie.model';
import { Observable } from 'rxjs';


const URL_API = "http://localhost:8080/angularsearch/";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http : HttpClient) { }

  public getFilmes() : Observable<Movie[]>{
    return this.http.get<Movie[]>(URL_API);
  }

  public getFilmesTitulo(titulo : string) : Observable<Movie[]>{
    return this.http.get<Movie[]>(URL_API + titulo);
  }
}
