import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Arvores', url: '/arvore', icon: 'leaf' },
    { title: 'Foto', url: '/foto', icon: 'images' },
    { title: 'Meus Dados', url: '/meusdados', icon: 'body' },
    { title: 'Ocorrencia', url: '/ocorrencia', icon: 'archive' },
  ];
  constructor() {}
}
