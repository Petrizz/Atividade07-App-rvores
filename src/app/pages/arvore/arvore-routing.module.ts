import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArvorePage } from './arvore.page';

const routes: Routes = [
  {
    path: '',
    component: ArvorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArvorePageRoutingModule {}
