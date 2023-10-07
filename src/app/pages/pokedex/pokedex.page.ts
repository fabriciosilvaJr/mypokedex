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
  favoritos: { [key: number]: boolean } = {};

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  constructor(public pokeapiService: PokeapiService, public router:Router) { 
  }

  ngOnInit() {
    this.loadData();
    this.loadFavoritosFromLocalStorage();


  }
  loadData(event?: any) {
    this.pokeapiService.getPokedex(this.currentPage, this.itemsPerPage).then((data: any) => {
      const newPokemonData = data;

      if (newPokemonData.length > 0) {
        this.pokedex = [...this.pokedex, ...newPokemonData];
        this.currentPage++;
      } else {
        this.isInfiniteScrollDisabled = true;
      }

      if (event) {
        event.target.complete();
      }
    });
  }

  verMais(pokemonId: string) {

    this.router.navigate([`pokemon/${pokemonId}`]);

  }
  toggleFavorito(pokemonId: number,event: Event) {
    event.stopPropagation();

    this.favoritos[pokemonId] = !this.favoritos[pokemonId];
    const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos') || '{}');
    favoritosLocalStorage[pokemonId] = this.favoritos[pokemonId];
    localStorage.setItem('favoritos', JSON.stringify(favoritosLocalStorage));
  }
  
  loadFavoritosFromLocalStorage() {
    const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos') || '{}');
    this.favoritos = favoritosLocalStorage;
  }

}
