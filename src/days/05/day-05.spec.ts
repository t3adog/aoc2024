import * as fs from 'fs';
import { Day05 } from './day-05';

const day05 = new Day05(
  fs.readFileSync('./src/days/05/inputs/test.txt', 'utf8'),
);
describe('day 05', () => {
  it('should solve part01', () => {
    expect(day05.partOne()).toEqual(143);
  });

  it('should solve part02', () => {
    expect(day05.partTwo()).toEqual(123);
  });
});

describe('isCorrectUpdate', () => {
  it('should return true', () => {
    expect(day05.isCorrectUpdate([75, 47, 61, 53, 29])).toEqual(true);
    expect(day05.isCorrectUpdate([97, 61, 53, 29, 13])).toEqual(true);
    expect(day05.isCorrectUpdate([75, 29, 13])).toEqual(true);
  });

  it('should return false', () => {
    expect(day05.isCorrectUpdate([75, 97, 47, 61, 53])).toEqual(false);
    expect(day05.isCorrectUpdate([61, 13, 29])).toEqual(false);
    expect(day05.isCorrectUpdate([97, 13, 75, 29, 47])).toEqual(false);
  });
});
