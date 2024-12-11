import * as fs from 'fs';
import { Day11 } from './day-11';

const day11 = new Day11(
  fs.readFileSync('./src/days/11/inputs/test.txt', 'utf8'),
);

describe('day 01', () => {
  it('should solve part01', () => {
    expect(day11.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day11.partTwo()).toEqual(1);
  });
});
