import { Component, OnInit } from '@angular/core';
import {PokeserviceService} from "../pokeservice.service";

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.css']
})
export class MovesComponent implements OnInit {

  public pokeMove: any;

  constructor(private pokePetition: PokeserviceService) { }

  ngOnInit() {
    this.pokePetition.pokeMovesSearch().subscribe(pokeMove =>{
      this.pokeMove = pokeMove;
      console.log('Movimiento: ', this.pokeMove.name);
    });


  }

}
