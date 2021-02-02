import { ActiveOrNotPipe } from './active-or-not.pipe';

describe('ActiveOrNotPipe', () => {
  it('create an instance', () => {
    const pipe = new ActiveOrNotPipe();
    expect(pipe).toBeTruthy();
  });
});
