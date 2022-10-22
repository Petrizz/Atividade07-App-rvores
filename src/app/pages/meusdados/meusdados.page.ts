import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-meusdados',
  templateUrl: './meusdados.page.html',
  styleUrls: ['./meusdados.page.scss'],
})
export class MeusdadosPage implements OnInit {
  usuario: Usuario = new Usuario();
  constructor() { }

  ngOnInit() {
  }

}
