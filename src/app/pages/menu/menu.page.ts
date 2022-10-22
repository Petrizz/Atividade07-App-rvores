import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    { title: 'Arvores', url: '/arvore', icon: 'leaf' },
    { title: 'Foto', url: '/foto', icon: 'images' },
    { title: 'Meus Dados', url: '/meusdados', icon: 'body' },
    { title: 'Ocorrencia', url: '/ocorrencia', icon: 'archive' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
