/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { Arvore } from 'src/app/models/arvore';
import { ArvoreService } from 'src/app/services/arvore.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { Geolocation, PositionOptions } from '@capacitor/geolocation';

@Component({
  selector: 'app-add-arvore',
  templateUrl: './add-arvore.page.html',
  styleUrls: ['./add-arvore.page.scss'],
})

export class AddArvorePage implements OnInit {

  id = this.activatedRoute.snapshot.paramMap.get('id');
  arvore: Arvore = new Arvore();
  location: any = {};
  keys: string[]=[];

  constructor(private arvoreService: ArvoreService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.id){
      this.arvoreService.getArvoresId(this.id).then((json)=>{
        debugger
        this.arvore = json as Arvore;
      });
  }
}

   async atualizar(){
    const options: PositionOptions={
      enableHighAccuracy:true
    };

    Geolocation.getCurrentPosition(options).then((res)=>{
      console.log(res);
      this.arvore.latitude =res.coords.latitude;
      this.arvore.longitude = res.coords.longitude;
      this.location = res.coords;
      this.keys = Object.keys(this.location);
    }).catch((erro)=>{
      alert(JSON.stringify(erro));
    });
  }



  async submitForm(){

    if(this.id){
    this.usuarioService.getUsuarioId(this.id).then((json)=>{
      this.arvore.usuario = json as Usuario;
      this.arvoreService.salvar(this.arvore);
    });
  }else{
    this.arvoreService.salvar(this.arvore);
  }
  }

}
