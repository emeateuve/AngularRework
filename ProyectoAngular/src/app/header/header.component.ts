import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';


declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public pokeInput = 'ddddd';

  constructor() { }

  ngOnInit() {
  }

  buscarPokemon(){
    console.log('Este es el nombre: ' + this.pokeInput);
  }

}
