import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariationRoutingModule } from './variation-routing.module';
import { VariationComponent } from './variation/variation.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'src/app/shared/ui/table/table.module';
import { ChartModule } from 'src/app/shared/ui/chart/chart.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [VariationComponent],
  imports: [
    CommonModule,
    VariationRoutingModule,

    ReactiveFormsModule,
    TableModule,
    ChartModule,
    MatToolbarModule
  ]
})
export class VariationModule { }
