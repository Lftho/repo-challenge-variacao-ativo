import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StateBaseService } from './state-base.service';
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


  search(id: string) {
    return this.stateBaseService.getId(id);
  }
}
