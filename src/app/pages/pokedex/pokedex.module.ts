import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokedexPageRoutingModule } from './pokedex-routing.module';

import { PokedexPage } from './pokedex.page';
import { PokemonNamePipe } from 'src/app/pipes/pokemon-name.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokedexPageRoutingModule
  ],
  declarations: [PokedexPage,PokemonNamePipe]
})
export class PokedexPageModule {}
