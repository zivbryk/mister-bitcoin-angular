import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe, Subscriber } from 'rxjs';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { map } from 'rxjs/operators';
import { MarketPrice } from '../models/market-price.model';

const RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value=1'
const MARKET_PRICE_URL = 'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
const TRANSACTIONS_DATA_URL = 'https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  rateIntervalId: ReturnType<typeof setInterval>

  constructor(private http: HttpClient) { }

  public getRate() {
    //Uncomment to get repeated live updates of bitcoin Rate (can block API after a while)

    // return new Observable<number>(subscriber => {
    //   this.http.get<number>(RATE_URL).toPromise().then(res => {
    //     subscriber.next(res)
    //   })
    //   this.rateIntervalId = setInterval(async () => {
    //     const res = await this.http.get<number>(RATE_URL).toPromise()
    //     subscriber.next(res)
    //   }, 800000)
    // })

    return new Observable<number>(subscriber => {
      subscriber.next(0.00001583)
    })

  }

  public stopRateUpdates() {
    clearInterval(this.rateIntervalId)
  }

  public getMarketPriceData() {
    return this.http.get<MarketPrice>(MARKET_PRICE_URL)
      .pipe(
        map(data => data.values)
      )
  }

  public getTransactionsData() {
    return this.http.get<MarketPrice>(TRANSACTIONS_DATA_URL)
      .pipe(
        map(data => data.values)
      )
  }
}
