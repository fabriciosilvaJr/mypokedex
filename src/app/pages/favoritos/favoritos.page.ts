import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi/pokeapi.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  favoritos: any = [];


  constructor(
    public pokeapiService: PokeapiService,
    public router: Router
    ) { }

  ngOnInit() {
    this.loadFavoritos();


  }

  loadFavoritos() {
    this.pokeapiService.getPokedexFav().then((data: any) => {
      this.favoritos = data;
    });
  }


  verMais(pokemonId: string) {

    this.router.navigate([`pokemon/${pokemonId}`]);

  }

}
