import * as fs from 'fs';
import { Day07 } from './day-07';
import { CalibrationEquation } from './equation';
import { Operation } from './operation';

const day07 = new Day07(
  fs.readFileSync('./src/days/07/inputs/test.txt', 'utf8'),
);

describe('day 07', () => {
  it('should solve part01', () => {
    expect(day07.partOne()).toEqual(3749);
  });

  it('should solve part02', () => {
    expect(day07.partTwo()).toEqual(11387);
  });
});

describe('isValidEquation', () => {
  it('should return true', () => {
    expect(
      day07.isValidEquation(new CalibrationEquation(190, [10, 19]), [
        Operation.sum,
        Operation.mul,
      ]),
    ).toEqual(true);

    expect(
      day07.isValidEquation(new CalibrationEquation(3267, [81, 40, 27]), [
        Operation.sum,
        Operation.mul,
      ]),
    ).toEqual(true);

    expect(
      day07.isValidEquation(new CalibrationEquation(292, [11, 6, 16, 20]), [
        Operation.sum,
        Operation.mul,
      ]),
    ).toEqual(true);
  });

  it('should return false', () => {
    expect(
      day07.isValidEquation(new CalibrationEquation(83, [17, 5]), [
        Operation.sum,
        Operation.mul,
      ]),
    ).toEqual(false);

    expect(
      day07.isValidEquation(new CalibrationEquation(156, [15, 6]), [
        Operation.sum,
        Operation.mul,
      ]),
    ).toEqual(false);

    expect(
      day07.isValidEquation(new CalibrationEquation(7290, [6, 8, 6, 15]), [
        Operation.sum,
        Operation.mul,
      ]),
    ).toEqual(false);

    expect(
      day07.isValidEquation(new CalibrationEquation(161011, [16, 10, 13]), [
        Operation.sum,
        Operation.mul,
      ]),
    ).toEqual(false);

    expect(
      day07.isValidEquation(new CalibrationEquation(21037, [9, 7, 18, 13]), [
        Operation.sum,
        Operation.mul,
      ]),
    ).toEqual(false);
  });
});
