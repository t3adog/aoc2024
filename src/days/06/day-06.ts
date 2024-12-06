import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';
import { Direction } from './direction.enum';
import { Position } from './position';

export class Day06 extends AbstractDay {
  private map: string[][];
  constructor(readonly input: string) {
    super(input);
    this.map = inputStringToArray(this.input).map((line) => {
      return line.split('');
    });
  }

  partOne(): number {
    const guardPath = new Map<string, number>();
    let currentPoint = this.findStartPoint(this.map);
    guardPath.set(currentPoint.getKey(), 0);
    let direction = this.determineDirection(
      this.map[currentPoint.y][currentPoint.x],
    );
    while (true) {
      const nextPoint = this.findNextPoint(this.map, currentPoint, direction);
      if (this.isEndOfMap(nextPoint.y, nextPoint.x, this.map)) {
        break;
      }
      if (this.isObstruction(this.map[nextPoint.y][nextPoint.x])) {
        direction = this.changeDirection(direction);
      } else {
        currentPoint = nextPoint;
        if (guardPath.has(currentPoint.getKey())) {
          guardPath.set(
            currentPoint.getKey(),
            guardPath.get(currentPoint.getKey())! + 1,
          );
        } else {
          guardPath.set(currentPoint.getKey(), 1);
        }
      }
    }

    return guardPath.size;
  }

  partTwo(): number {
    return 1;
  }

  findStartPoint(map: string[][]): Position {
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        if (this.isGuarder(map[y][x])) {
          return new Position(y, x);
        }
      }
    }
    throw new Error('Could not find start direction');
  }

  changeDirection(direction: Direction): Direction {
    switch (direction) {
      case Direction.up:
        return Direction.right;
      case Direction.down:
        return Direction.left;
      case Direction.left:
        return Direction.up;
      case Direction.right:
        return Direction.down;
    }
    throw new Error('Could not change direction');
  }

  findNextPoint(
    map: string[][],
    currentPoint: Position,
    direction: Direction,
  ): Position {
    switch (direction) {
      case Direction.up:
        return new Position(currentPoint.y - 1, currentPoint.x);
      case Direction.down:
        return new Position(currentPoint.y + 1, currentPoint.x);
      case Direction.left:
        return new Position(currentPoint.y, currentPoint.x - 1);
      case Direction.right:
        return new Position(currentPoint.y, currentPoint.x + 1);
    }
  }

  determineDirection(symbol: string): Direction {
    switch (symbol) {
      case '^':
        return Direction.up;
      case 'v':
        return Direction.down;
      case '<':
        return Direction.left;
      case '>':
        return Direction.right;
    }
    throw new Error('Could not determine direction');
  }

  isGuarder(symbol: string): boolean {
    return symbol === '^' || symbol === 'v' || symbol === '<' || symbol === '>';
  }

  isObstruction(symbol: string): boolean {
    return symbol === '#';
  }

  isEndOfMap(y: number, x: number, map: string[][]): boolean {
    return y < 0 || y >= map.length || x < 0 || x >= map[y].length;
  }

  printMap(map: string[][]) {
    console.log(map.map((line) => line.join('')).join('\n'));
  }
}
