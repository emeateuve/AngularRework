import { Pipe, PipeTransform } from '@angular/core';
import {PokedexDetailComponent} from "./pokedex-detail/pokedex-detail.component";

@Pipe({
  name: 'pokePipe'
})
export class PokePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
