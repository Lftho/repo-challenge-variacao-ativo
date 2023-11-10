import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariationComponent } from './variation/variation.component';

const routes: Routes = [
  {
    path: '',
    component: VariationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariationRoutingModule { }
