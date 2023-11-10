import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/variation/PETR4.SA',
    pathMatch: 'full'
  },
  {
    path: 'variation/:symbol',
    loadChildren: () => import('./core/variation/variation.module')
      .then(m => m.VariationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
