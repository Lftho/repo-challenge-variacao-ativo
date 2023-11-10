import { Component, OnInit } from '@angular/core';
import { VariationService } from '../../../shared/services/variation.service';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.scss']
})
export class VariationComponent implements OnInit {

  constructor(private variationService: VariationService) { }

  ngOnInit(): void {
    this.variationService.dataVariation().subscribe((x: any) => {
      console.log(x)
    })
  }

}
