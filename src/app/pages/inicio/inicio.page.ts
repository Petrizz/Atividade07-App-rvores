import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  async submitForm(){
    this.navController.navigateBack('/menu');
 }

}
