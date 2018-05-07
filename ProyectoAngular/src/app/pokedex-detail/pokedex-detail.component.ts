import { Component, OnInit } from '@angular/core';
import {PokeserviceService} from "../pokeservice.service";
import {PokedexesComponent} from "../pokedexes/pokedexes.component";
import {ActivatedRoute} from "@angular/router";


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

  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.pokedexName = parameter['pokedexID'];
      this.loadPokedex();
    });
  }

  loadPokedex(){
    this.pokePetition.pokedexesSearch(this.pokedexName).subscribe(pokedexName =>{
      this.pokedex = pokedexName;
      this.pokemonsArray = pokedexName.pokemon_entries;
      console.log('Objeto devuelto: ', this.pokedex);
      for (let i = 0; i < this.pokemonsArray.length; i++){
        // console.log('pokemon: ',this.pokemonsArray[i].pokemon_species.name);
      }
    })
  }

  muestraid(event){
    console.log('La id es:', event)
  }

}
