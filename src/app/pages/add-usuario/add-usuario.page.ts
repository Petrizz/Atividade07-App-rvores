import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  submitForm(){
  this.navController.navigateBack('/inicio');
  }

}
