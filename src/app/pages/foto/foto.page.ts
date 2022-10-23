import { Component, OnInit } from '@angular/core';
import { Arvore } from 'src/app/models/arvore';
import { Foto } from 'src/app/models/foto';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})
export class FotoPage implements OnInit {
  arvore: Arvore = new Arvore();
  foto: Foto = new Foto();
  fotos: any = [];
  constructor() { }

  ngOnInit() {
  }

}
