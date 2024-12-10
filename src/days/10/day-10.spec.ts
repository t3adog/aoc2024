import * as fs from 'fs';
import { Day10 } from './day-10';

describe('day 10', () => {
  const day10 = new Day10(
    fs.readFileSync('./src/days/10/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(day10.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day10.partTwo()).toEqual(1);
  });
});
