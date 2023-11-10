import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StateBaseService } from './state-base.service';
import { Observable } from 'rxjs';
import { IVariationChart } from 'src/app/core/variation/interface/model';


@Injectable({
  providedIn: 'root'
})
export class VariationService {
  private urlAPI = environment.urlAPI + "PETR4.SA";

  constructor(private stateBaseService: StateBaseService) {
    this.dataVariation();
  }

  dataVariation() {
    return this.stateBaseService.get(this.urlAPI);
  }
}
