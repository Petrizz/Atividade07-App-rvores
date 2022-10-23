import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    { title: 'Arvores', url: '/arvore/'+  this.activatedRoute.snapshot.paramMap.get('id'), icon: 'leaf' },
    { title: 'Meus Dados', url: '/meusdados/' + this.activatedRoute.snapshot.paramMap.get('id'), icon: 'body' }
  ];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
