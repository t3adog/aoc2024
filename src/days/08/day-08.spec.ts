import * as fs from 'fs';
import { Day08 } from './day-08';

describe('day 08', () => {
  const day08 = new Day08(
    fs.readFileSync('./src/days/template/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(day08.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day08.partTwo()).toEqual(1);
  });
});
