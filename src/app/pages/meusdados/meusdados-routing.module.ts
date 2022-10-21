import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusdadosPage } from './meusdados.page';

const routes: Routes = [
  {
    path: '',
    component: MeusdadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusdadosPageRoutingModule {}
