import fs from 'fs';
import { Day01 } from './days/01/day-01';

console.log('Hello AOC 2024!');

// Day 01
const day01 = new Day01(
  fs.readFileSync('./src/days/01/inputs/prod.txt', 'utf8'),
);

console.log(`Day 01, Part 01: ${day01.partOne()}`);
console.log(`Day 02, Part 02: ${day01.partTwo()}`);
