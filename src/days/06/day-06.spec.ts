import * as fs from 'fs';
import { Day06 } from './day-06';

describe('day 06', () => {
  const day06 = new Day06(
    fs.readFileSync('./src/days/06/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(day06.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day06.partTwo()).toEqual(1);
  });
});
