import fs from 'fs';
import { Day01 } from './days/01/day-01';
import { Day02 } from './days/02/day-02';
import { Day03 } from './days/03/day03';
import { Day04 } from './days/04/day-04';
import { AbstractDay } from './days/base/abstract-day';

const start = new Date().getTime();
console.log('Hello AoC 2024!');

const days: Map<string, AbstractDay> = new Map();
days.set(
  'day01',
  new Day01(fs.readFileSync('./src/days/01/inputs/prod.txt', 'utf8')),
);
days.set(
  'day02',
  new Day02(fs.readFileSync('./src/days/02/inputs/prod.txt', 'utf8')),
);
days.set(
  'day03',
  new Day03(fs.readFileSync('./src/days/03/inputs/prod.txt', 'utf8')),
);
days.set(
  'day04',
  new Day04(fs.readFileSync('./src/days/04/inputs/prod.txt', 'utf8')),
);

const dayParam = process.argv[2];

if (dayParam) {
  if (days.has(dayParam)) {
    runDay(dayParam);
  } else {
    throw new Error(`Day ${dayParam} implementation does not exist`);
  }
} else {
  for (const day of days.keys()) {
    runDay(day);
  }
}

console.log(`Total time: ${new Date().getTime() - start} ms`);

function runDay(day: string) {
  let start = new Date().getTime();
  console.log(
    `${day}, part 01: ${days.get(day)!.partOne()} | Time: ${new Date().getTime() - start} ms`,
  );
  start = new Date().getTime();
  console.log(
    `${day}, part 02: ${days.get(day)!.partTwo()} | Time: ${new Date().getTime() - start} ms`,
  );
}
