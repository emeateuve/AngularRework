import {Pipe, PipeTransform} from '@angular/core';
import {PokedexDetailComponent} from "./pokedex-detail/pokedex-detail.component";
import {isNullOrUndefined} from "util";

@Pipe({
  name: 'pokePipe'
})
export class PokePipePipe implements PipeTransform {


  transform(pokeValue: any[], pokeName: any, pokeMin: any, pokeMax: any): any {
    console.log('valor: ', pokeValue,'nombre: ', pokeName,'minimo: ', pokeMin,'maximo: ', pokeMax);
    return pokeValue.filter(pokemon => {
      if (pokemon.pokemon_species.name.includes(pokeName) && pokemon.entry_number >= pokeMin && pokemon.entry_number <= pokeMax) {
        return true;
      }
    });
  }

}
