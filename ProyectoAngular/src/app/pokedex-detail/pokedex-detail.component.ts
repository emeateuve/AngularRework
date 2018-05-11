import {Component, OnInit} from '@angular/core';
import {PokeserviceService} from "../pokeservice.service";
import {PokedexesComponent} from "../pokedexes/pokedexes.component";
import {ActivatedRoute} from "@angular/router";
import {PokePipePipe} from "../poke-pipe.pipe";
import {isUndefined} from "util";

/* PokéDeclaring jQuery PokéVariables */
declare var jquery: any;
declare var $: any;

/* PokéPipe */


@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.css']
})


export class PokedexDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokePetition: PokeserviceService, public pokedexComponent: PokedexesComponent) {

  }

  public pokeName;
  public pokeMinimun;
  public pokeMaximun;

  public pokedexName;
  public pokedex;
  public pokemonsArray;
  public pokeReturn;
  public pokeBoolean;
  public pokedexLoaded = false;


  ngOnInit() {
    this.pokeBoolean = true;
    this.route.params.subscribe(parameter => {
      this.pokedexName = parameter['pokedexID'];
      this.loadPokedex();
    });
  }

  loadPokedex() {
    this.pokePetition.pokedexesSearch(this.pokedexName).subscribe(pokedexName => {
      this.pokedex = pokedexName;
      this.pokemonsArray = pokedexName.pokemon_entries;
      this.pokedexLoaded = true;

      this.pokeMinimun = 0;
      this.pokeMaximun = 151;
      this.pokeName = '';
    });


  };

  pokeCall(pokemon) {
    if (this.pokeBoolean) {
      this.pokeBoolean = false;
      this.pokePetition.pokeSearch(pokemon).subscribe(pokeData => {
        this.pokeReturn = pokeData;
        this.pokeBoolean = true;
      });
    }
  };

  pokeCollapse() {
    $('.collapse').collapse('hide')
  };

}
