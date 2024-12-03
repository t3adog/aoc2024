import * as fs from 'fs';
import { Day04 } from './day-04';

describe('day 04', () => {
  const day04 = new Day04(
    fs.readFileSync('./src/days/04/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(day04.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day04.partTwo()).toEqual(1);
  });
});
