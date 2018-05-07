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
  public pokedex;

  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.pokedex = parameter['pokedexID'];
      this.loadPokedex();
    });
  }

  loadPokedex(){
    this.pokePetition.pokedexesSearch(this.pokedex).subscribe(pokedexName =>{
      console.log('Objeto devuelto: ', pokedexName);
    })
  }

}
