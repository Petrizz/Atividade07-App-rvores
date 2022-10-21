import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'meusdados',
    loadChildren: () => import('./pages/meusdados/meusdados.module').then( m => m.MeusdadosPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'arvore',
    loadChildren: () => import('./pages/arvore/arvore.module').then( m => m.ArvorePageModule)
  },
  {
    path: 'add-arvore',
    loadChildren: () => import('./pages/add-arvore/add-arvore.module').then( m => m.AddArvorePageModule)
  },
  {
    path: 'foto',
    loadChildren: () => import('./pages/foto/foto.module').then( m => m.FotoPageModule)
  },
  {
    path: 'ocorrencia',
    loadChildren: () => import('./pages/ocorrencia/ocorrencia.module').then( m => m.OcorrenciaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
