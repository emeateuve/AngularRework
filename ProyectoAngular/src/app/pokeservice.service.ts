import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class PokeserviceService {

  constructor(public pokeHttp: HttpClient) { }

  public pokedexID: any;

  pokeSearch(pokeName): Observable<any>{
    return this.pokeHttp.get('http://pokeapi.co/api/v2/pokemon/' + pokeName.toLowerCase());
  };

  pokeMovesSearch(): Observable<any>{
    return this.pokeHttp.get('http://pokeapi.co/api/v2/move/2');
  }

  pokedexesSearch(pokedexID): Observable<any>{
    this.pokedexID = pokedexID;
    return this.pokeHttp.get('https://pokeapi.co/api/v2/pokedex/' + pokedexID.toLowerCase());
  }


}
