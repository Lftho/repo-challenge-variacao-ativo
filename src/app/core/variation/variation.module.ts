import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariationRoutingModule } from './variation-routing.module';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VariationRoutingModule,
    HighchartsChartModule
  ]
})
export class VariationModule { }
