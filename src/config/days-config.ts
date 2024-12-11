import * as fs from 'fs';
import { Day01 } from '../days/01/day-01';
import { Day02 } from '../days/02/day-02';
import { Day03 } from '../days/03/day03';
import { Day04 } from '../days/04/day-04';
import { Day05 } from '../days/05/day-05';
import { Day06 } from '../days/06/day-06';
import { Day07 } from '../days/07/day-07';
import { Day08 } from '../days/08/day-08';
import { Day09 } from '../days/09/day-09';
import { Day10 } from '../days/10/day-10';
import { Day11 } from '../days/11/day-11';
import { AbstractDay } from '../days/base/abstract-day';

export const daysConfig: Map<string, AbstractDay> = new Map();
daysConfig.set(
  'day01',
  new Day01(fs.readFileSync('./src/days/01/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day02',
  new Day02(fs.readFileSync('./src/days/02/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day03',
  new Day03(fs.readFileSync('./src/days/03/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day04',
  new Day04(fs.readFileSync('./src/days/04/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day05',
  new Day05(fs.readFileSync('./src/days/05/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day06',
  new Day06(fs.readFileSync('./src/days/06/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day07',
  new Day07(fs.readFileSync('./src/days/07/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day08',
  new Day08(fs.readFileSync('./src/days/08/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day09',
  new Day09(fs.readFileSync('./src/days/09/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day10',
  new Day10(fs.readFileSync('./src/days/10/inputs/prod.txt', 'utf8')),
);
daysConfig.set(
  'day11',
  new Day11(fs.readFileSync('./src/days/11/inputs/prod.txt', 'utf8')),
);
