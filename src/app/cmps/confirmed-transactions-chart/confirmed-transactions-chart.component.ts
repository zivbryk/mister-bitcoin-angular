import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'confirmed-transactions-chart',
  templateUrl: './confirmed-transactions-chart.component.html',
  styleUrls: ['./confirmed-transactions-chart.component.scss']
})
export class ConfirmedTransactionsChartComponent implements OnInit {
  confirmedTransactionsData: any
  chartLabels: any
  chartData: any

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmed Transactions' }
  ];
  public lineChartLabels: Label[] = [];
  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //   responsive: true,
  // };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(93, 44, 238, 1)',
      backgroundColor: 'rgba(93, 44, 238, 0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartPlugins = [];

  constructor(private bitcoinService: BitcoinService) { }


  async ngOnInit(): Promise<void> {
    this.confirmedTransactionsData = await this.bitcoinService.getTransactionsData().toPromise()
    this.setChartLabels()
    this.setChartData()
  }

  setChartLabels() {
    this.lineChartLabels = this.confirmedTransactionsData.map(dataPoint => new Date(dataPoint.x * 1000).toLocaleDateString("en-GB", { month: 'short', day: 'numeric' }))
  }
  setChartData() {
    const chartData = this.confirmedTransactionsData.map(dataSet => dataSet.y / 1000000000)
    this.lineChartData = [{
      data: chartData,
      label: 'Trade Volume [Billion USD]',
      borderWidth: 2,
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent"
    }]
  }
}
