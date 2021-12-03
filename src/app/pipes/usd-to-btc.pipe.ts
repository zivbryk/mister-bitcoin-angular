import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToBtc'
})
export class UsdToBtcPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {


    return;
  }

}
