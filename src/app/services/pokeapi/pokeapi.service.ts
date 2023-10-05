import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(private http: HttpClient) { }

  getPokedex() {

    return new Promise((resolve, reject) => {

      this.http.get("https://pokeapi.co/api/v2/pokedex/2").subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });

  }


}
