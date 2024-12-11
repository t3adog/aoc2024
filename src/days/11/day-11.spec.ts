import * as fs from 'fs';
import { Day11 } from './day-11';

const day11 = new Day11(
  fs.readFileSync('./src/days/11/inputs/test.txt', 'utf8'),
);

describe('day 01', () => {
  it('should solve part01', () => {
    expect(day11.partOne()).toEqual(55312);
  });

  it('should solve part02', () => {
    expect(day11.partTwo()).toEqual(1);
  });
});

describe('binkNtimes', () => {
  it('blink test 01', () => {
    const stones = ['125', '17'];
    expect(day11.blinkNTimes(stones, 6).length).toEqual(22);
  });

  it('blink test 01', () => {
    const stones = ['125', '17'];
    expect(day11.blinkNTimes(stones, 25).length).toEqual(55312);
  });
});

describe('blink', () => {
  it('blink test 01', () => {
    expect(day11.blink(['0', '1', '10', '99', '999']).join(' ')).toEqual(
      '1 2024 1 0 9 9 2021976',
    );
  });

  it('blink test 02', () => {
    expect(day11.blink(['125', '17']).join(' ')).toEqual('253000 1 7');
  });

  it('blink test 03', () => {
    expect(day11.blink(['253000', '1', '7']).join(' ')).toEqual(
      '253 0 2024 14168',
    );
  });

  it('blink test 04', () => {
    expect(day11.blink(['253', '0', '2024', '14168']).join(' ')).toEqual(
      '512072 1 20 24 28676032',
    );
  });

  it('blink test 05', () => {
    expect(
      day11.blink(['512072', '1', '20', '24', '28676032']).join(' '),
    ).toEqual('512 72 2024 2 0 2 4 2867 6032');
  });

  it('blink test 06', () => {
    expect(
      day11
        .blink(['512', '72', '2024', '2', '0', '2', '4', '2867', '6032'])
        .join(' '),
    ).toEqual('1036288 7 2 20 24 4048 1 4048 8096 28 67 60 32');
  });

  it('blink test 07', () => {
    expect(
      day11
        .blink([
          '1036288',
          '7',
          '2',
          '20',
          '24',
          '4048',
          '1',
          '4048',
          '8096',
          '28',
          '67',
          '60',
          '32',
        ])
        .join(' '),
    ).toEqual(
      '2097446912 14168 4048 2 0 2 4 40 48 2024 40 48 80 96 2 8 6 7 6 0 3 2',
    );
  });
});
