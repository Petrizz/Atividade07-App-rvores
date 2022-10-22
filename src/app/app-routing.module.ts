import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
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
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./pages/add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
