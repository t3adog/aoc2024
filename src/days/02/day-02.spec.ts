import * as fs from 'fs';
import { Day02 } from './day-02';

const day02 = new Day02(
  fs.readFileSync('./src/days/02/inputs/test.txt', 'utf8'),
);

describe('day 02', () => {
  it('should solve part01', () => {
    expect(day02.partOne()).toEqual(2);
  });

  it('should solve part02', () => {
    expect(day02.partTwo()).toEqual(1);
  });
});

describe('isSafe', () => {
  it('should return true', () => {
    expect(day02.isSafe('1 2 3 4 5')).toEqual(true);
    expect(day02.isSafe('7 6 4 2 1')).toEqual(true);
    expect(day02.isSafe('1 3 6 7 9')).toEqual(true);
  });

  it('should return false', () => {
    expect(day02.isSafe('1 2 7 8 9')).toEqual(false);
    expect(day02.isSafe('9 7 6 2 1')).toEqual(false);
    expect(day02.isSafe('1 3 2 4 5')).toEqual(false);
    expect(day02.isSafe('8 6 4 4 1')).toEqual(false);
  });
});

describe('isSorted', () => {
  it('should return true', () => {
    expect(day02.isSorted([1, 2, 3, 4, 5])).toEqual(true);
    expect(day02.isSorted([10, 9, 5, 2, 1].reverse())).toEqual(true);
  });

  it('should return false', () => {
    expect(day02.isSorted([1, 2, 10, 4, 5])).toEqual(false);
    expect(day02.isSorted([10, 9, 1, 2, 1])).toEqual(false);
  });
});
