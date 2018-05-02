import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class PokeserviceService {

  constructor(public http: HttpClient) { }

  pokeSearch(pokeName): Observable<any>{
    return this.http.get('http://pokeapi.co/api/v2/pokemon/' + pokeName);
  };

}
