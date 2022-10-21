import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArvorePageRoutingModule } from './arvore-routing.module';

import { ArvorePage } from './arvore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArvorePageRoutingModule
  ],
  declarations: [ArvorePage]
})
export class ArvorePageModule {}
