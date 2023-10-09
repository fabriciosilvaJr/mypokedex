import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokedexFav() {
    return new Promise((resolve, reject) => {
      this.http.get("https://pokeapi.co/api/v2/pokedex/2").subscribe((data: any) => {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos') || '{}');
        const pokemonData = data.pokemon_entries.filter((entry: any) => {
          const pokemonId = entry.entry_number;
          return favoritosLocalStorage[pokemonId] === true;
        });
        return resolve(pokemonData);
      }, (err: any) => {
        return reject(err);
      });
    });
  }
  getPokedex(currentPage: number, itemsPerPage: number, searchName: string | null = null) {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * itemsPerPage}&limit=${itemsPerPage}`;
  
    if (searchName) {
      apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchName.toLowerCase()}`;
    }
  
    return new Promise((resolve, reject) => {
      this.http
        .get(apiUrl)
        .subscribe(
          (data: any) => {
            if (searchName) {
              return resolve([data]);
            } else {
              const pokemonEntries = data.results.map((entry: any) => {
                const urlParts = entry.url.split("/");
                const pokemonId = urlParts[urlParts.length - 2];
                return {
                  ...entry,
                  id: parseInt(pokemonId, 10),
                };
              });
              return resolve(pokemonEntries);
            }
          },
          (err: any) => {
            return reject(err);
          }
        );
    });
  }

  getPokemon(pokemonId: string) {

    return new Promise((resolve, reject) => {

      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });

  }


}
