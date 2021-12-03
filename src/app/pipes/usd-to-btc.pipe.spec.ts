import { UsdToBtcPipe } from './usd-to-btc.pipe';

describe('UsdToBtcPipe', () => {
  it('create an instance', () => {
    const pipe = new UsdToBtcPipe();
    expect(pipe).toBeTruthy();
  });
});
