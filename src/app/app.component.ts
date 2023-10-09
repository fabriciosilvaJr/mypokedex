import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pokedex', url: '/pokedex/', icon: 'list' },
    { title: 'Favoritos', url: '/favoritos/', icon: 'heart' },
  ];
  constructor() {}
}
