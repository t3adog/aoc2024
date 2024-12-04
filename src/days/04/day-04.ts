import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';

export class Day04 extends AbstractDay {
  private chars: string[][];
  constructor(readonly input: string) {
    super(input);
    this.chars = inputStringToArray(this.input).map((line) => {
      return line.split('');
    });
  }

  partOne(): number {
    let xmasCount = 0;
    for (let y = 0; y < this.chars.length; y++) {
      for (let x = 0; x < this.chars[y].length; x++) {
        const char = this.chars[y][x];
        if (char === 'X') {
          xmasCount += this.countXmas(y, x, this.chars);
        }
      }
    }
    return xmasCount;
  }

  partTwo(): number {
    let puzzleCount = 0;
    for (let y = 0; y < this.chars.length; y++) {
      for (let x = 0; x < this.chars[y].length; x++) {
        if (
          (this.chars[y][x] == 'M' || this.chars[y][x] == 'S') &&
          (this.chars[y][x + 2] == 'M' || this.chars[y][x + 2] == 'S')
        ) {
          if (this.isPuzzleComplete(y, x, this.chars)) {
            puzzleCount++;
          }
        }
      }
    }
    return puzzleCount;
  }

  countXmas(y: number, x: number, chars: string[][]): number {
    let xmasCount = 0;

    if (this.isXmasFromLeftToRight(y, x, chars)) {
      xmasCount++;
    }

    if (this.isXmaxFromRightToLeft(y, x, chars)) {
      xmasCount++;
    }

    if (this.isXmaxFromUpToDown(y, x, chars)) {
      xmasCount++;
    }

    if (this.isXmaxFromDownToUp(y, x, chars)) {
      xmasCount++;
    }

    if (this.isDiagonalXmasFromDownToUpFromRightToLeft(y, x, chars)) {
      xmasCount++;
    }

    if (this.isDiagonalXmasFromDownToUpFromLeftToRight(y, x, chars)) {
      xmasCount++;
    }

    if (this.isDiagonalXmasFromUpToDownFromRightToLeft(y, x, chars)) {
      xmasCount++;
    }

    if (this.isDiagonalXmasFromUpToDownFromLeftToRight(y, x, chars)) {
      xmasCount++;
    }
    return xmasCount;
  }

  isPuzzleComplete(y: number, x: number, chars: string[][]): boolean {
    type mas = 'MAS' | 'SAM';
    try {
      if (
        chars[y][x] + chars[y + 1][x + 1] + chars[y + 2][x + 2] === 'MAS' ||
        chars[y][x] + chars[y + 1][x + 1] + chars[y + 2][x + 2] === 'SAM'
      ) {
        if (
          chars[y][x + 2] + chars[y + 1][x + 1] + chars[y + 2][x] === 'MAS' ||
          chars[y][x + 2] + chars[y + 1][x + 1] + chars[y + 2][x] === 'SAM'
        )
          return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }

  isXmasFromLeftToRight(y: number, x: number, chars: string[][]): boolean {
    try {
      return (
        chars[y][x] + chars[y][x + 1] + chars[y][x + 2] + chars[y][x + 3] ===
        'XMAS'
      );
    } catch (error) {
      return false;
    }
  }

  isXmaxFromRightToLeft(y: number, x: number, chars: string[][]): boolean {
    try {
      return (
        chars[y][x] + chars[y][x - 1] + chars[y][x - 2] + chars[y][x - 3] ===
        'XMAS'
      );
    } catch (error) {
      return false;
    }
  }

  isXmaxFromUpToDown(y: number, x: number, chars: string[][]): boolean {
    try {
      return (
        chars[y][x] + chars[y + 1][x] + chars[y + 2][x] + chars[y + 3][x] ===
        'XMAS'
      );
    } catch (error) {
      return false;
    }
  }

  isXmaxFromDownToUp(y: number, x: number, chars: string[][]): boolean {
    try {
      return (
        chars[y][x] + chars[y - 1][x] + chars[y - 2][x] + chars[y - 3][x] ===
        'XMAS'
      );
    } catch (error) {
      return false;
    }
  }

  isDiagonalXmasFromDownToUpFromRightToLeft(
    y: number,
    x: number,
    chars: string[][],
  ): boolean {
    try {
      return (
        chars[y][x] +
          chars[y - 1][x - 1] +
          chars[y - 2][x - 2] +
          chars[y - 3][x - 3] ===
        'XMAS'
      );
    } catch (error) {
      return false;
    }
  }

  isDiagonalXmasFromDownToUpFromLeftToRight(
    y: number,
    x: number,
    chars: string[][],
  ): boolean {
    try {
      return (
        chars[y][x] +
          chars[y - 1][x + 1] +
          chars[y - 2][x + 2] +
          chars[y - 3][x + 3] ===
        'XMAS'
      );
    } catch (error) {
      return false;
    }
  }

  isDiagonalXmasFromUpToDownFromRightToLeft(
    y: number,
    x: number,
    chars: string[][],
  ): boolean {
    try {
      return (
        chars[y][x] +
          chars[y + 1][x - 1] +
          chars[y + 2][x - 2] +
          chars[y + 3][x - 3] ===
        'XMAS'
      );
    } catch (error) {
      return false;
    }
  }

  isDiagonalXmasFromUpToDownFromLeftToRight(
    y: number,
    x: number,
    chars: string[][],
  ): boolean {
    try {
      return (
        chars[y][x] +
          chars[y + 1][x + 1] +
          chars[y + 2][x + 2] +
          chars[y + 3][x + 3] ===
        'XMAS'
      );
    } catch (error) {
      return false;
    }
  }
}
