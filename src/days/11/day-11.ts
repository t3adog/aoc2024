import { AbstractDay } from '../base/abstract-day';

export class Day11 extends AbstractDay {
  stones: string[];
  constructor(readonly input: string) {
    super(input);
  }

  partOne(): number {
    let stones = this.input.split(' ');
    stones = this.blinkNTimes(stones, 25);
    return stones.length;
  }

  partTwo(): number {
    return 1;
  }

  blinkNTimes(stones: string[], n: number): string[] {
    for (let i = 0; i < n; i++) {
      //console.log(`Stones before: ${stones.join(' ')}`);
      stones = this.blink(stones);
      //console.log(`Stones after: ${stones.join(' ')}`);
    }
    return stones;
  }

  blink(stones: string[]): string[] {
    const newStones: string[] = [];
    for (let i = 0; i < stones.length; i++) {
      const stone = stones[i];
      if (stone === '0') {
        newStones.push('1');
      } else if (stone.length % 2 === 0) {
        newStones.push(stone.substring(0, stone.length / 2));
        newStones.push(
          Number.parseInt(stone.substring(stone.length / 2)).toString(),
        );
      } else {
        newStones.push((Number.parseInt(stone) * 2024).toString());
      }
    }
    return newStones;
  }
}
