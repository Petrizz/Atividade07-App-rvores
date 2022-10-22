import { Component, OnInit } from '@angular/core';
import { Arvore } from 'src/app/models/arvore';
import { Ocorrencia } from 'src/app/models/ocorrencia';

@Component({
  selector: 'app-ocorrencia',
  templateUrl: './ocorrencia.page.html',
  styleUrls: ['./ocorrencia.page.scss'],
})
export class OcorrenciaPage implements OnInit {
  arvore: Arvore = new Arvore();
  ocorrencia: Ocorrencia = new Ocorrencia();
  constructor() { }

  ngOnInit() {
  }

}
