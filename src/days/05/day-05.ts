import { AbstractDay } from '../base/abstract-day';

export class Day05 extends AbstractDay {
  readonly rulesBefore: Map<number, number[]> = new Map();
  readonly rulesAfter: Map<number, number[]> = new Map();
  readonly updates: number[][];
  constructor(readonly input: string) {
    super(input);

    input
      .split('\n\n')[0]
      .split('\n')
      .map((line) => {
        const left = line.split('|')[0];
        const right = line.split('|')[1];

        if (this.rulesBefore.has(parseInt(left))) {
          this.rulesBefore.get(parseInt(left))?.push(parseInt(right));
        } else {
          this.rulesBefore.set(parseInt(left), [parseInt(right)]);
        }

        if (this.rulesAfter.has(parseInt(right))) {
          this.rulesAfter.get(parseInt(right))?.push(parseInt(left));
        } else {
          this.rulesAfter.set(parseInt(right), [parseInt(left)]);
        }
      });
    this.updates = input
      .split('\n\n')[1]
      .split('\n')
      .map((line) => {
        return line.split(',').map((item) => {
          return parseInt(item);
        });
      });
  }

  partOne(): number {
    let result = 0;
    for (const update of this.updates) {
      if (this.isCorrectUpdate(update)) {
        const middle = update[(update.length - 1) / 2];
        result += middle;
      }
    }
    return result;
  }

  partTwo(): number {
    let result = 0;
    for (const update of this.updates) {
      if (!this.isCorrectUpdate(update)) {
        const rightUpdate = this.sortUpdate(update);
        const middle = rightUpdate[(update.length - 1) / 2];
        result += middle;
      }
    }
    return result;
  }

  sortUpdate(update: number[]): number[] {
    return update.sort((a, b) => {
      if (this.rulesAfter.has(a)) {
        if (this.rulesAfter.get(a)?.includes(b)) {
          return b;
        }
      } else if (this.rulesAfter.has(b)) {
        if (this.rulesAfter.get(b)?.includes(a)) {
          return a;
        }
      }
      return -1;
    });
  }

  isCorrectUpdate(update: number[]): boolean {
    for (let i = 0; i < update.length; i++) {
      if (this.rulesAfter.has(update[i])) {
        const rule = this.rulesAfter.get(update[i]);
        for (let z = i; z < update.length; z++) {
          if (rule?.includes(update[z])) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
