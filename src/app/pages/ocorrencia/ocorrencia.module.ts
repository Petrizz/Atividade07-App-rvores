import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcorrenciaPageRoutingModule } from './ocorrencia-routing.module';

import { OcorrenciaPage } from './ocorrencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcorrenciaPageRoutingModule
  ],
  declarations: [OcorrenciaPage]
})
export class OcorrenciaPageModule {}
