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

  public pokedex: any;
  public pokedexArray = [
    {pokedexName: 'Kanto', pokedexID: 1, pokeImage: 'kanto_map.jpg'},
    {pokedexName: 'Johto', pokedexID: 2, pokeImage: 'johto_map.png'},
    {pokedexName: 'Hoenn', pokedexID: 3, pokeImage: 'hoenn_map.png'},
    {pokedexName: 'Sinnoh', pokedexID: 4, pokeImage: 'sinnoh_map.jpg'},
    {pokedexName: 'Kanto', pokedexID: 5, pokeImage: 'unova_map.png'}
    ];

  ngOnInit() {
    this.pokePetition.pokedexesSearch().subscribe(pokedex => {
      this.pokedex = pokedex;
      console.log('Nombre de la generación: ', this.pokedex.name);
    })
  }



}
