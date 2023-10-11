import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private allPokemonData: any[] = [];
  private allPokemonDataLoaded = false;

  constructor(private http: HttpClient) { }

  fetchAllPokemonData(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.allPokemonDataLoaded) {
        this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
          .subscribe(
            (data: any) => {
              this.allPokemonData = data.results.map((entry: any) => {
                const urlParts = entry.url.split("/");
                const pokemonId = urlParts[urlParts.length - 2];
                return {
                  ...entry,
                  id: parseInt(pokemonId, 10),
                };
              });
              this.allPokemonDataLoaded = true; 
              resolve(this.allPokemonData);
            },
            (err: any) => {
              reject(err);
            }
          );
      } else {
        resolve(this.allPokemonData);
      }
    });
  }


  getPokedexFav(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fetchAllPokemonData()
        .then(() => {
          const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos') || '{}');
          const pokemonData = this.allPokemonData.filter((entry: any) => {
            const pokemonId = entry.id;
            return favoritosLocalStorage[pokemonId] === true;
          });
          resolve(pokemonData);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  

  getPokedex(currentPage: number, itemsPerPage: number, query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fetchAllPokemonData().then(() => {
        const offset = (currentPage - 1) * itemsPerPage;
  
        if (query && query.trim() !== '') {
          const filteredData = this.allPokemonData.filter((entry: any) =>
            entry.name.toLowerCase().includes(query.trim().toLowerCase())
          );
          resolve(filteredData.slice(offset, offset + itemsPerPage));
        } else {
          const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`;
          this.http.get(apiUrl)
            .subscribe(
              (data: any) => {
                data.results = data.results.map((entry: any) => {
                  const urlParts = entry.url.split("/");
                  const pokemonId = urlParts[urlParts.length - 2];
                  entry.id = parseInt(pokemonId, 10);
                  return entry;
                });
                resolve(data.results);
              },
              (err: any) => {
                reject(err);
              }
            );
        }
      });
    });
  }
  

  getPokemon(pokemonId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (err: any) => {
            reject(err);
          }
        );
    });
  }
}
