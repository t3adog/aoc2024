import * as fs from 'fs';
import { Day02 } from './day-02';

describe('day 02', () => {
  const day02 = new Day02(
    fs.readFileSync('./src/days/02/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(day02.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day02.partTwo()).toEqual(1);
  });
});
