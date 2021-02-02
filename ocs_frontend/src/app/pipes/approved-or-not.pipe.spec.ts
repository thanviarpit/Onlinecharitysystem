import { ApprovedOrNotPipe } from './approved-or-not.pipe';

describe('ApprovedOrNotPipe', () => {
  it('create an instance', () => {
    const pipe = new ApprovedOrNotPipe();
    expect(pipe).toBeTruthy();
  });
});
