import { Component, OnInit } from '@angular/core';
import {PokeserviceService} from "../pokeservice.service";


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pokeInput = '';
  public pokemon: string;


  constructor(private pokePetition: PokeserviceService) { }

  ngOnInit() {
  }

  // buscarPokemon(){
  //   console.log('Antes de la petición: ');
  //   this.pokePetition.pokeSearch(this.pokeInput).subscribe(pokeResult =>{
  //     this.pokemon = pokeResult;
  //     console.log('Resultado: ', this.pokemon);
  //   });
  // }

}
