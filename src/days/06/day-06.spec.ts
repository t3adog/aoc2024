import * as fs from 'fs';
import { Day06 } from './day-06';
import { Position } from './position';

const day06 = new Day06(
  fs.readFileSync('./src/days/06/inputs/test.txt', 'utf8'),
);

describe('day 06', () => {
  it('should solve part01', () => {
    expect(day06.partOne()).toEqual(41);
  });

  it('should solve part02', async () => {
    expect(day06.partTwo()).toEqual(6);
  });
});

describe('isLoop', () => {
  it('should return true', () => {
    // y = 6, x = 3;
    const copyMap = Array.from(day06.map);
    copyMap[6][3] = '#';
    const start: Position = day06.findStartPoint(day06.map);
    const direction = day06.determineDirection(day06.map[start.y][start.x]);
    expect(day06.isLoop(start, direction, copyMap)).toEqual(true);
  });

  it('should return false', () => {
    // y = 6, x = 3;
    const copyMap = Array.from(day06.map);
    const start: Position = day06.findStartPoint(day06.map);
    const direction = day06.determineDirection(day06.map[start.y][start.x]);
    expect(day06.isLoop(start, direction, copyMap)).toEqual(true);
  });
});
