import * as fs from 'fs';
import { Day10 } from './day-10';
import { Point } from './point';

describe('day 10', () => {
  it('should solve part01 simp test', () => {
    const day10 = new Day10(
      fs.readFileSync('./src/days/10/inputs/simp-test.txt', 'utf8'),
    );
    expect(day10.partOne()).toEqual(1);
  });

  it('should solve part01', () => {
    const day10 = new Day10(
      fs.readFileSync('./src/days/10/inputs/test.txt', 'utf8'),
    );
    expect(day10.partOne()).toEqual(36);
  });

  it('should solve part02', () => {
    const day10 = new Day10(
      fs.readFileSync('./src/days/10/inputs/test.txt', 'utf8'),
    );
    expect(day10.partTwo()).toEqual(1);
  });
});

describe('parseAllStarts', () => {
  it('should parseAllStarts', () => {
    const day10 = new Day10(
      fs.readFileSync('./src/days/10/inputs/test.txt', 'utf8'),
    );
    expect(day10.parseAllStarts(day10.map).length).toEqual(9);
  });
});

describe('foundSteps', () => {
  it('should findNextSteps', () => {
    const day10 = new Day10(
      fs.readFileSync('./src/days/10/inputs/test.txt', 'utf8'),
    );
    expect(
      day10.findAllNextSteps(day10.map, new Point(2, 0, 0)).length,
    ).toEqual(2);
    expect(
      day10.findAllNextSteps(day10.map, new Point(4, 0, 0)).length,
    ).toEqual(3);
    expect(
      day10.findAllNextSteps(day10.map, new Point(4, 1, 1)).length,
    ).toEqual(1);
  });
});
