import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddArvorePage } from './add-arvore.page';

const routes: Routes = [
  {
    path: '',
    component: AddArvorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddArvorePageRoutingModule {}
