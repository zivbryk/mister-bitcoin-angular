import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { BitcoinService } from '../services/bitcoin.service';

@Pipe({
  name: 'btcToUsd'
})
export class BtcToUsdPipe implements PipeTransform {
  private bitcoinRate: number
  constructor(private bitcoinService: BitcoinService) { }

  transform(value: number): number {
    this.bitcoinService.getRate().subscribe(rate => {
      this.bitcoinRate = rate
    })

    // const convertedSum = Number((value / this.bitcoinRate).toFixed(3))
    const convertedSum = value / this.bitcoinRate

    return convertedSum;
  }

}
