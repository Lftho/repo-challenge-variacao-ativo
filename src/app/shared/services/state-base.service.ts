import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVariationChart } from 'src/app/core/variation/interface/model';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StateBaseService {
  private urlAPI = environment.urlAPI + "PETR4.SA";

  constructor(private http: HttpClient) { }

  get(url: string): Observable<IVariationChart> {
    return this.http.get<IVariationChart>(`${url}`);
  }

  // protected post(url: string, body: any) {
  //   return this.http.post(`${this.urlAPI}${url}`, body);
  // }
}
