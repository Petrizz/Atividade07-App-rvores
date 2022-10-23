/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-meusdados',
  templateUrl: './meusdados.page.html',
  styleUrls: ['./meusdados.page.scss'],
})
export class MeusdadosPage implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private toastController: ToastController) { }

  ngOnInit() {
  this.usuario.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

   this.usuarioService.getUsuarioId(this.usuario.id)
    .then((json)=>{
      this.usuario.email = json['email'];
      this.usuario.nome = json['nome'];
    }).catch((erro)=>{
      this.exibirMensagem('Valores invalidos! Erro: ' + erro['message'] );
      console.log('Valores invalidos! ' + erro['message'] );
    });
  }

  async exibirMensagem(mensagem: string) {
    const toast = await  this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }

}
