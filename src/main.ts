import fs from 'fs';
import { Day01 } from './days/01/day-01';
import { Day02 } from './days/02/day02';

console.log('Hello AOC 2024!');

// Day 01
const day01 = new Day01(
  fs.readFileSync('./src/days/01/inputs/prod.txt', 'utf8'),
);

console.log(`Day 01, Part 01: ${day01.partOne()}`);
console.log(`Day 01, Part 02: ${day01.partTwo()}`);

// Day 02
const day02 = new Day02(
  fs.readFileSync('./src/days/02/inputs/prod.txt', 'utf8'),
);

console.log(`Day 02, Part 01: ${day02.partOne()}`);
console.log(`Day 02, Part 02: ${day02.partTwo()}`);
