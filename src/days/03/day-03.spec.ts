import * as fs from 'fs';
import { Day03 } from './day03';

describe('day 03', () => {
  const day03 = new Day03(
    fs.readFileSync('./src/days/template/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(day03.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day03.partTwo()).toEqual(1);
  });
});
