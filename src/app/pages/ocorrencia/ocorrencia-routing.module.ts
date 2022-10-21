import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcorrenciaPage } from './ocorrencia.page';

const routes: Routes = [
  {
    path: '',
    component: OcorrenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcorrenciaPageRoutingModule {}
