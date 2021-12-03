import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'market-price-chart',
  templateUrl: './market-price-chart.component.html',
  styleUrls: ['./market-price-chart.component.scss']
})
export class MarketPriceChartComponent implements OnInit {
  marketPriceData: any
  chartLabels: any
  chartData: any

  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Market Price' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true
  };
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
    this.marketPriceData = await this.bitcoinService.getMarketPriceData().toPromise()
    this.setChartLabels()
    this.setChartData()
  }

  setChartLabels() {
    this.lineChartLabels = this.marketPriceData.map(dataPoint => new Date(dataPoint.x * 1000).toLocaleDateString("en-GB", { month: 'short', day: 'numeric' }))
  }
  setChartData() {
    const chartData = this.marketPriceData.map(dataSet => dataSet.y / 1000)
    this.lineChartData = [{
      data: chartData,
      label: 'Market Price [Thousand USD]',
      borderWidth: 2,
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent"
    }]
  }
}
