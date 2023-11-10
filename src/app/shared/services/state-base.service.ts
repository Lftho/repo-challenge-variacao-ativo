import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVariationChart } from 'src/app/core/variation/interface/model';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StateBaseService {
  private urlAPI = environment.urlAPI;

  constructor(private http: HttpClient) { }

  get(url: string): Observable<IVariationChart> {
    return this.http.get<IVariationChart>(`${url}`);
  }

  getId(id: string) {
    return this.http.get(`${this.urlAPI}/${id}`);
  }
}
