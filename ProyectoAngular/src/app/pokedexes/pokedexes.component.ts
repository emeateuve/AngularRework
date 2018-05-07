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

  public pokedexID: any;
  public pokedexArray = [
    {pokedexName: 'Kanto', pokedexID: 2, pokeImage: 'kanto_map.jpg'},
    {pokedexName: 'Original-Johto', pokedexID: 2, pokeImage: 'johto_map.png'},
    {pokedexName: 'Hoenn', pokedexID: 3, pokeImage: 'hoenn_map.png'},
    {pokedexName: 'Original-Sinnoh', pokedexID: 4, pokeImage: 'sinnoh_map.jpg'},
    {pokedexName: 'Original-Unova', pokedexID: 5, pokeImage: 'unova_map.png'}
    ];

  ngOnInit() {
  }

}
