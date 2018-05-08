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

  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.pokemonName = parameter['pokeID'];
      this.loadPokemon();
    });
  }

  loadPokemon() {
    this.pokePetition.pokeSearch(this.pokemonName).subscribe(pokemonData => {
      console.log('Pokemon buscado: ', pokemonData);
      this.pokemon = pokemonData;
    })
  }
}
