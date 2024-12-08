import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';
import { Antenna } from './inputs/antenna';

export class Day08 extends AbstractDay {
  map: string[][];
  antennas: Antenna[] = [];
  constructor(readonly input: string) {
    super(input);
    this.map = inputStringToArray(this.input).map((line) => {
      return line.split('');
    });

    for (let y = 0; y < this.map.length; y++) {
      for (let x = 0; x < this.map[y].length; x++) {
        if (this.isAntenna(this.map[y][x])) {
          this.antennas.push(new Antenna(y, x, this.map[y][x]));
        }
      }
    }
  }

  partOne(): number {
    return this.antennas.length * 2;
  }

  partTwo(): number {
    return 1;
  }

  private isAntenna(char: string): boolean {
    return char !== '.';
  }
}
