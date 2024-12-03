import { AbstractDay } from '../base/abstract-day';

export class Day03 extends AbstractDay {
  private readonly mulCommandRegexp: RegExp = /mul\((\d+),(\d+)\)/g;
  constructor(readonly input: string) {
    super(input);
  }

  partOne(): number {
    let sum = 0;
    this.parseCommands(this.input).forEach((command) => {
      sum += this.execMulCommand(command);
    });
    return sum;
  }

  partTwo(): number {
    return 1;
  }

  parseCommands(input: string) {
    const commands = Array.from(
      input.matchAll(this.mulCommandRegexp),
      (match) => match[0],
    );
    return commands;
  }

  execMulCommand(command: string): number {
    const numbers = Array.from(command.matchAll(/\d+/g), (match) =>
      parseInt(match[0]),
    );
    return numbers[0] * numbers[1];
  }
}
