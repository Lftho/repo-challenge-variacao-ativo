import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IVariationChart } from '../interface/model';


@Injectable({
  providedIn: 'root'
})
export class StateBaseService {
  private urlAPI = environment.urlAPI;
  private urlSearch = environment.urlSearch;

  constructor(private http: HttpClient) { }

  get(url: string): Observable<IVariationChart> {
    return this.http.get<IVariationChart>(`${url}`);
  }

  getId(id: string) {
    return this.http.get(`${this.urlSearch}?q=${id}`);
  }
}
