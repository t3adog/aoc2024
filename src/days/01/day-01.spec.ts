import * as fs from 'fs';
import { Day01 } from './day-01';

describe('day 01', () => {
  const day01 = new Day01(
    fs.readFileSync('./src/days/01/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(day01.partOne()).toEqual(4);
  });

  it('should solve part02', () => {
    expect(day01.partTwo()).toEqual(4);
  });
});
