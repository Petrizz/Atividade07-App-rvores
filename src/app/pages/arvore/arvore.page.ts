import { Component, OnInit } from '@angular/core';
import { Arvore } from 'src/app/models/arvore';

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.page.html',
  styleUrls: ['./arvore.page.scss'],
})
export class ArvorePage implements OnInit {
  arvores: any = [];
  arvore: Arvore = new Arvore();
  constructor() { }

  ngOnInit() {
  }

}
