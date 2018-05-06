import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class PokeserviceService {

  constructor(public pokeHttp: HttpClient) { }

  pokeSearch(pokeName): Observable<any>{
    return this.pokeHttp.get('http://pokeapi.co/api/v2/pokemon/' + pokeName.toLowerCase());
  };

  pokeMovesSearch(): Observable<any>{
    return this.pokeHttp.get('http://pokeapi.co/api/v2/move/2');
  }

  pokedexesSearch(): Observable<any>{
    return this.pokeHttp.get('https://pokeapi.co/api/v2/pokedex/1/')
  }

}
