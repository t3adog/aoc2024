import { AbstractDay } from '../../base/abstract-day';

export class Day01 extends AbstractDay {
  constructor(readonly input: string) {
    super(input);
  }
  partOne(): number {
    return this.input.length;
  }

  partTwo(): number {
    return this.input.length;
  }
}
