import * as fs from 'fs';
import { Day03 } from './day03';

const day03 = new Day03(
  fs.readFileSync('./src/days/03/inputs/test.txt', 'utf8'),
);

describe('day 03', () => {
  it('should solve part01', () => {
    expect(day03.partOne()).toEqual(161);
  });

  it('should solve part02', () => {
    expect(day03.partTwo()).toEqual(1);
  });
});

describe('parseCommand', () => {
  it('should parseCommands', () => {
    expect(
      day03.parseCommands(
        'xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))',
      ).length,
    ).toEqual(4);
  });
});
