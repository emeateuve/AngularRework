import { Component, OnInit } from '@angular/core';
import {PokeserviceService} from "../pokeservice.service";
import {Router} from "@angular/router";

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


  constructor(private pokePetition: PokeserviceService, private pokeRouter: Router) { }

  ngOnInit() {
  }

  pokeEnter(poKey, pokeInput){
    if(poKey.keyCode == 13){
      this.pokeRouter.navigateByUrl('/pokemon/' + pokeInput);
    }
    /*Easter pokEgg*/
    if(pokeInput === '619' || 'mienfoo' || 'Mienfoo'){
      console.log('BOOYAKA BOOAYA, 619!!')
    }
  }

  // buscarPokemon(){
  //   console.log('Antes de la petición: ');
  //   this.pokePetition.pokeSearch(this.pokeInput).subscribe(pokeResult =>{
  //     this.pokemon = pokeResult;
  //     console.log('Resultado: ', this.pokemon);
  //   });
  // }

}
