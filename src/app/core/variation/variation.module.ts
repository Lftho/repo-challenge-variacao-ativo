import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariationRoutingModule } from './variation-routing.module';
import { VariationComponent } from './variation/variation.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'src/app/shared/ui/table/table.module';

@NgModule({
  declarations: [VariationComponent],
  imports: [
    CommonModule,
    VariationRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    ReactiveFormsModule,
    TableModule
  ]
})
export class VariationModule { }
