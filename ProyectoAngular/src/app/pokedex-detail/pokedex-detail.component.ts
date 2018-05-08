import {Component, OnInit} from '@angular/core';
import {PokeserviceService} from "../pokeservice.service";
import {PokedexesComponent} from "../pokedexes/pokedexes.component";
import {ActivatedRoute} from "@angular/router";

/* PokéDeclaring jQuery PokéVariables */
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.css']
})


export class PokedexDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokePetition: PokeserviceService, public pokedexComponent: PokedexesComponent) {

  }

  public pokedexName;
  public pokedex;
  public pokemonsArray;
  public pokeReturn;
  public pokeBoolean;


  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.pokedexName = parameter['pokedexID'];
      this.loadPokedex();
    });
    this.pokeBoolean = true;
  }

  loadPokedex() {
    this.pokePetition.pokedexesSearch(this.pokedexName).subscribe(pokedexName => {
      this.pokedex = pokedexName;
      this.pokemonsArray = pokedexName.pokemon_entries;
    })
  }

  pokeCall(pokemon) {
    if (this.pokeBoolean){
      this.pokeBoolean = false;
      this.pokePetition.pokeSearch(pokemon).subscribe(pokeData => {
        this.pokeReturn = pokeData;
        console.log('Desde el componente de vuelta', pokeData);
        this.pokeBoolean = true;
      })
    }

  }
  pokeCollapse(){
    $('.collapse').collapse('hide')
  }

}
