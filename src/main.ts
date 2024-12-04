import { daysConfig } from './config/days-config';

const start = new Date().getTime();
console.log('Hello AoC 2024!');

const dayParam = process.argv[2];

if (dayParam) {
  if (daysConfig.has(dayParam)) {
    runDay(dayParam);
  } else {
    throw new Error(`Day ${dayParam} implementation does not exist`);
  }
} else {
  for (const day of daysConfig.keys()) {
    runDay(day);
  }
}

console.log(`Total time: ${new Date().getTime() - start} ms`);

function runDay(day: string) {
  let start = new Date().getTime();
  console.log(
    `${day}, part 01: ${daysConfig.get(day)!.partOne()} | Time: ${new Date().getTime() - start} ms`,
  );
  start = new Date().getTime();
  console.log(
    `${day}, part 02: ${daysConfig.get(day)!.partTwo()} | Time: ${new Date().getTime() - start} ms`,
  );
}
