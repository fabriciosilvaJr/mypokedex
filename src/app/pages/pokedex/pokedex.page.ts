import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {
  pokedex: any = [];
  query: string = '';
  currentPage: number = 1; // Página atual
  itemsPerPage: number = 10; // Itens por página
  isInfiniteScrollDisabled: boolean = false;
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  constructor(public pokeapiService: PokeapiService, public router:Router) { 
    // this.getPokedex();
  }

  // getPokedex() {

  //   this.pokeapiService.getPokedex().then((data: any) => {
  //     this.pokedex = data.pokemon_entries;
  //   });

  // }

  ngOnInit() {
    this.loadData();

  }
  loadData(event?: any) {
    this.pokeapiService.getPokedex(this.currentPage, this.itemsPerPage).then((data: any) => {
      const newPokemonData = data;

      // Verificar se há mais itens a serem carregados
      if (newPokemonData.length > 0) {
        this.pokedex = [...this.pokedex, ...newPokemonData];
        this.currentPage++;
      } else {
        // Se não houver mais itens, desative o carregamento infinito
        this.isInfiniteScrollDisabled = true;
      }

      // Encerrar o evento do IonInfiniteScroll
      if (event) {
        event.target.complete();
      }
    });
  }

  verMais(pokemonId: string) {

    this.router.navigate([`pokemon/${pokemonId}`]);

  }

}
