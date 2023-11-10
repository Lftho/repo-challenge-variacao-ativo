import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { VariationService } from '../variation.service';
import { map, take, tap } from 'rxjs/operators';
import { IVariation } from '../../interface/model';

@Injectable({
  providedIn: 'root'
})
export class DateService implements OnDestroy {
  public variation$ = new BehaviorSubject<IVariation[]>([]);
  private subscription = new Subscription();

  constructor(private variationService: VariationService) {
    this.subscription = this.getVariationTable().subscribe();
  }

  public getChartVariation() {
    return this.getVariationdata();
  }

  public getVariationTable() {
    return this.getVariationdata()
      .pipe(
        tap(({ dados, dias }) => this.validationVariation(dados, dias))
      )
  }

  private getVariationdata() {
    return this.variationService.dataVariation().pipe(
      take(1),
      map((data: any) => {
        return {
          dados: data['chart']['result'][0]['indicators']['quote'][0],
          dias: data['chart']['result'][0]['timestamp']
        }
      })
    );
  }

  private validationVariation(dados: any, dias: number[]) {
    const primeiroFechamento = dados['close'][0];
    const Variation: IVariation[] = [];

    dias.forEach((dia, index) => {

      const fechamentoAtual = dados['close'][index];
      const fechamentoAnterior = dados['close'][index - 1] || 0;
      const diferencaPercentual = fechamentoAnterior ? ((fechamentoAtual - fechamentoAnterior) / fechamentoAnterior) * 100 : 0;
      const diferencaPercentualInicio = ((fechamentoAtual - primeiroFechamento) / primeiroFechamento) * 100;

      const variation: IVariation = {
        pregao: new Date(dia * 1000).toLocaleDateString(),
        abertura: dados['open'][index],
        fechamento: fechamentoAtual,
        diferencaPercentual: diferencaPercentual || null,
        diferencaPercentualInicio: diferencaPercentualInicio || null
      }

      Variation.push(variation);
    });

    this.variation$.next(Variation);
  }

  public getVariationData() {
    return this.variation$.asObservable();
  }

  ngOnDestroy(): void {
    this.subscription ? this.subscription.unsubscribe : null;
  }
}
