import { Component, OnInit } from '@angular/core';
import { Arvore } from 'src/app/models/arvore';
import { ArvoreService } from 'src/app/services/arvore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arvore',
  templateUrl: './arvore.page.html',
  styleUrls: ['./arvore.page.scss'],
})
export class ArvorePage implements OnInit {

  arvores: any = [];
  arvore: Arvore = new Arvore();

  constructor(private arvoreService: ArvoreService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  //isso tem q ficar em Arvore service aqui deve ficar uma função chando a que for criada por exemplo carregarArvores() ou nn sla
    this.arvoreService.getArvoresUsuarioId(this.activatedRoute.snapshot.paramMap.get('id'))
    .then((json)=>{
      this.arvores = JSON.parse(JSON.stringify(json));
    }).catch((erro)=>{
     // this.exibirMensagem('Valores invalidos! Erro: ' + erro['message'] );
    //  console.log('Valores invalidos! ' + erro['message'] );
    });

  }

}
