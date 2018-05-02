import {Component, OnInit} from '@angular/core';
import {PokeserviceService} from "../pokeservice.service";

@Component({
  selector: 'app-pokedexes',
  templateUrl: './pokedexes.component.html',
  styleUrls: ['./pokedexes.component.css']
})
export class PokedexesComponent implements OnInit {

  constructor(private pokePetition: PokeserviceService) {
  }

  private pokedex: string;

  ngOnInit() {
    this.pokePetition.pokedexesSearch().subscribe(pokedex => {
      this.pokedex = pokedex;
      console.log('Nombre de la generación: ', this.pokedex.name);
    })

  }

}
