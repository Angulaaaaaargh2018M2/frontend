import { IsSendPipe } from './is-send.pipe';

describe('IsSendPipe', () => {
  it('create an instance', () => {
    const pipe = new IsSendPipe();
    expect(pipe).toBeTruthy();
  });
});
