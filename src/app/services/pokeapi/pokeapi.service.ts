import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  // getPokedex() {

  //   return new Promise((resolve, reject) => {

  //     this.http.get("https://pokeapi.co/api/v2/pokedex/2").subscribe((data: any) => {
  //       return resolve(data);
  //     }, (err: any) => {
  //       return reject(err);
  //     })

  //   });

  // }
  getPokedex(currentPage: number, itemsPerPage: number) {
    const offset = (currentPage - 1) * itemsPerPage; // Calcular o deslocamento com base na página atual
  
    return new Promise((resolve, reject) => {
      this.http
        .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`)
        .subscribe(
          (data: any) => {
            const pokemonEntries = data.results.map((entry: any) => {
              const urlParts = entry.url.split("/");
              const pokemonId = urlParts[urlParts.length - 2];
              return {
                ...entry,
                id: parseInt(pokemonId, 10), // Converte para um número e adiciona como uma nova propriedade
              };
            });
            return resolve(pokemonEntries);
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
