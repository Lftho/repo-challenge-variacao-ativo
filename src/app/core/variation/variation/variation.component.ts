import { Component, OnInit } from '@angular/core';
import { VariationService } from '../../../shared/services/variation.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Quotes, Result } from 'src/app/shared/interface/model';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.scss']
})
export class VariationComponent implements OnInit {
  formGroup!: FormGroup;
  options: unknown[] = [];
  isLoading = false;
  show = false;

  private debounceTimeMs = 300; // Set the debounce time (in milliseconds)

  constructor(
    private fb: FormBuilder,
    private variationService: VariationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //verificando se o serviço está retornando
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
      this.variationService
        .search(active)
        .subscribe((x: Result | any) => {
          x.quotes?.map((x: Quotes) => {
            this.options.push(x.symbol)
          });
        });
      console.log('search', this.options);
    }
  }

  handleOption(event: MatAutocompleteSelectedEvent) {
    this.router.navigateByUrl(`/chart/${event.option.value}`);
  }
}
