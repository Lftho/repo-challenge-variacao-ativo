import { Component, OnInit } from '@angular/core';
import { VariationService } from '../../../shared/services/variation.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormBuilder, FormGroup } from '@angular/forms';
import { timer } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.scss']
})
export class VariationComponent implements OnInit {
  formGroup!: FormGroup;
  options: string[] = [];
  isLoading = false;
  private debounceTimeMs = 300; // Set the debounce time (in milliseconds)

  constructor(
    private fb: FormBuilder,
    private variationService: VariationService
  ) { }

  ngOnInit(): void {
    this.variationService.dataVariation().subscribe((x: any) => {
      console.log(x)
    });

    this.formGroup = this.fb.group({
      search: [''],
    });

    this.formGroup.get('search')
      ?.valueChanges.pipe(
        debounceTime(this.debounceTimeMs)
      ).subscribe((value: any) => this.search(value))
  }

  async search(active: string) {
    if (active) {
      let data = this.variationService.search(active);
      console.log(data);
    }
  }

  handleSelect(event: any) {

  }
}
