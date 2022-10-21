import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusdadosPageRoutingModule } from './meusdados-routing.module';

import { MeusdadosPage } from './meusdados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusdadosPageRoutingModule
  ],
  declarations: [MeusdadosPage]
})
export class MeusdadosPageModule {}
