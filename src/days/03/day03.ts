import { AbstractDay } from '../base/abstract-day';
export class Day03 extends AbstractDay {
  readonly mulCommandRegexp: RegExp = /mul\((\d+),(\d+)\)/g;
  readonly additionalMulRegexpCommand: RegExp =
    /(?:mul\((\d+),(\d+)\)|do\(\)|don't\(\))/g;

  constructor(readonly input: string) {
    super(input);
  }

  partOne(): number {
    let sum = 0;
    this.parseCommands(this.input, this.mulCommandRegexp).forEach((command) => {
      sum += this.execMulCommand(command);
    });
    return sum;
  }

  partTwo(): number {
    let sum = 0;
    let mulMod = true;

    this.parseCommands(this.input, this.additionalMulRegexpCommand).forEach(
      (command) => {
        if (command.startsWith(Command.dont)) {
          mulMod = false;
        } else if (command.startsWith(Command.do)) {
          mulMod = true;
        } else if (command.startsWith(Command.mul)) {
          if (mulMod) {
            sum += this.execMulCommand(command);
          }
        }
      },
    );
    return sum;
  }

  parseCommands(input: string, regexp: RegExp) {
    const commands = Array.from(input.matchAll(regexp), (match) => match[0]);
    return commands;
  }

  execMulCommand(command: string): number {
    const numbers = Array.from(command.matchAll(/\d+/g), (match) =>
      parseInt(match[0]),
    );
    return numbers[0] * numbers[1];
  }
}

export enum Command {
  mul = 'mul',
  dont = "don't",
  do = 'do',
}
