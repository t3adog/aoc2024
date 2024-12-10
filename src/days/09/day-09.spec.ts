import * as fs from 'fs';
import { Day09 } from './day-09';

describe('day 09', () => {
  const day09 = new Day09(
    fs.readFileSync('./src/days/09/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(day09.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day09.partTwo()).toEqual(1);
  });
});
