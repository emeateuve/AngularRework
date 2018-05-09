import { Component, OnInit } from '@angular/core';
import {PokeserviceService} from "../pokeservice.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokePetition: PokeserviceService) {

  }

  public pokemonName;
  public pokemon;
  public pokemonLoaded = false;

  public pokemonArrayStats;
  public pokemonArrayAbilities;
  public pokemonArrayTypes;

  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.pokemonName = parameter['pokeID'];
      this.loadPokemon();
    });
  }

  // pokeHover(pokemon){
  //   console.log('encima')
  //   pokemon.setAttribute('src',pokemon.sprites.back_default);
  // };
  // pokeUnhover(pokemon){
  //   console.log('fuera')
  //   pokemon.setAttribute('src',pokemon.sprites.front_default);
  // };

  loadPokemon() {
    this.pokePetition.pokeSearch(this.pokemonName).subscribe(pokemonData => {
      console.log('Pokemon buscado: ', pokemonData);

      this.pokemon = pokemonData;
      this.pokemonArrayStats = pokemonData.stats;
      this.pokemonArrayAbilities = pokemonData.abilities;
      this.pokemonArrayTypes = pokemonData.types;

      this.pokemonLoaded = true;
    })
  }


}
