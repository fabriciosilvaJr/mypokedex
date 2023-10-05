import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  pokedex: any = [];
  query: string = '';
  constructor(public pokeapiService: PokeapiService) { 
    this.getPokedex();
  }

  getPokedex() {

    this.pokeapiService.getPokedex().then((data: any) => {
      this.pokedex = data.pokemon_entries;
    });

  }

  ngOnInit() {
  }

}
