import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLink, Routes } from "@angular/router";

import { PokeserviceService } from "./pokeservice.service";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PokedexesComponent } from './pokedexes/pokedexes.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MovesComponent } from './moves/moves.component';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'pokedexes', component: PokedexesComponent},
  {path: 'moves', component: MovesComponent},
  {path: 'pokemon/:pokeID', component: PokemonComponent},
  {path: 'moves/:moveID', component: MovesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    PokedexesComponent,
    PokemonComponent,
    MovesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [PokeserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
