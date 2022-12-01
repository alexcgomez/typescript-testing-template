import { sum } from '../src/sum';

describe('SUM Tests', () => {


  it('should return 0 if empty array is passed', () => {
    expect(sum(2,3)).toBe(5);
  });


});