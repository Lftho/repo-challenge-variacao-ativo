import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DateService } from '../../services/date/date.service';
import { tap } from 'rxjs/operators';
import { IVariation } from '../../interface/model';
export interface PeriodicElement {
  day: number;
  close: string;
  open: string;
  date: string;
  variation: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  symbol = "";
  displayedColumns = ['day', 'date', 'open', 'close', 'variation'];

  dataSource: IVariation[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private dateService: DateService
  ) {
    this.recoveryParams();
  }

  ngOnInit(): void {

    this.subscription = this.dateService
      .getVariationData().pipe(
        tap(response => this.dataSource = response)
      ).subscribe();
  }

  recoveryParams() {
    this.route.params.subscribe((params) => {
      this.symbol = params['symbol']
    })
  }

  isVariationUp(variation: string): boolean {
    return parseFloat(variation) > 0;
  }

  ngOnDestroy(): void {
    this.subscription ? this.subscription.unsubscribe() : null;
  }
}
