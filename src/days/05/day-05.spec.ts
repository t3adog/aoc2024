import * as fs from 'fs';
import { Day05 } from './day-05';

const day05 = new Day05(
  fs.readFileSync('./src/days/05/inputs/test.txt', 'utf8'),
);
describe('day 05', () => {
  it('should solve part01', () => {
    expect(day05.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(day05.partTwo()).toEqual(1);
  });
});
