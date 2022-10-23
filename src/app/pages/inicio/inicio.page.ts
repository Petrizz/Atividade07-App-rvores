/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  usuarios: any = [];
  usuario: Usuario = new Usuario();

  constructor(private navController: NavController,
    private usuarioService: UsuarioService,
    private toastController: ToastController) { }

  ngOnInit() {
  }
  async exibirMensagem(mensagem: string) {

    const toast = await  this.toastController.create({
      message: mensagem,
      duration: 1500
    });
    toast.present();
  }
  async submitForm(){
    this.usuarioService.getUsuario(this.usuario.email, this.usuario.senha)
    .then((json)=>{
      if(json){
        this.navController.navigateBack('/menu/'+ json['id']);
      }else{
        this.exibirMensagem('Valores invalidos!');
      console.log('Valores invalidos!');
      }
    }).catch((erro)=>{
      this.exibirMensagem('Valores invalidos! Erro: ' + erro['message'] );
      console.log('Valores invalidos! ' + erro['message'] );
    });

 }
/*

 async submitForm(){
  this.contatos = JSON.parse(localStorage.getItem('tbContatos'));
  if(this.id){
    this.contatos[this.id] =  this.contato;
  }else{
    this.contatos.push(this.contato);
  }
  localStorage.setItem('tbContatos', JSON.stringify(this.contatos));
  this.exibirMensagem('Registro salvo com sucesso!');
  this.navController.navigateBack('/contato');
}


 async preencherEndereco(){
  this.cepService.obterEnderco(this.contato.cep).then((json)=>{
    this.contato.rua = json['logradouro'];
    this.contato.bairro = json['bairro'];
    this.contato.cidade = json['localidade'];
    this.contato.estado = json['uf'];
  }).catch((erro)=>{
    this.exibirMensagem('CEP inválido! Erro: ' + erro['message'] );
    console.log('CEP inválido! Erro: ' + erro['message'] );
  });
}*/

}
