import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from "@angular/router";
import { FormsModule } from '@angular/forms';
import {HttpClient, HttpClientModule} from "@angular/common/http";


import { PokeserviceService } from "./pokeservice.service";

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PokedexesComponent } from './pokedexes/pokedexes.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MovesComponent } from './moves/moves.component';
import { MoreComponent } from './more/more.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';



const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'pokemon', redirectTo: ''},
  {path: 'pokedexes', component: PokedexesComponent},
  {path: 'pokedexes/:pokedexID', component: PokedexDetailComponent},
  {path: 'moves', component: MovesComponent},
  {path: 'pokemon/:pokeID', component: PokemonComponent},
  {path: 'moves/:moveID', component: MovesComponent},
  {path: 'more', component: MoreComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    PokedexesComponent,
    PokemonComponent,
    MovesComponent,
    MoreComponent,
    PokedexDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    FormsModule
  ],
  providers: [PokeserviceService, PokedexesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
