import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () => import('./core/variation/search/search.module')
      .then(m => m.SearchModule)
  },
  {
    path: 'chart/:symbol',
    loadChildren: () => import('./core/variation/variation.module')
      .then(m => m.VariationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
