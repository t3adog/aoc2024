import { AbstractDay } from '../base/abstract-day';

export class Day11 extends AbstractDay {
  stones: string[];
  constructor(readonly input: string) {
    super(input);
  }

  partOne(): number {
    const stones = this.input.split(' ').map(Number);
    return this.calcBlinks(stones, 25);
  }

  partTwo(): number {
    const stones = this.input.split(' ').map(Number);
    return this.calcBlinks(stones, 75);
  }

  calcBlinks(stones: number[], amount: number): number {
    const cache = new Map<string, number>();
    return stones.reduce((sum, stone) => {
      return sum + this.blink(stone, amount, cache);
    }, 0);
  }

  blink(stone: number, amount: number, cache: Map<string, number>) {
    const stoneKey = `${stone}-${amount}`;
    if (cache.has(stoneKey)) {
      return cache.get(stoneKey)!;
    }

    let result: number;

    if (amount === 0) {
      return 1;
    } else if (stone === 0) {
      result = this.blink(1, amount - 1, cache);
    } else {
      const stoneStr = stone.toString();
      if (stoneStr.length % 2 === 0) {
        const mid = stoneStr.length >> 1;
        const left = +stoneStr.substring(0, mid);
        const right = +stoneStr.substring(mid);
        result =
          this.blink(left, amount - 1, cache) +
          this.blink(right, amount - 1, cache);
      } else {
        result = this.blink(stone * 2024, amount - 1, cache);
      }
    }

    cache.set(stoneKey, result);
    return result;
  }
}
