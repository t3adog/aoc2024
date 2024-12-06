import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';
import { Direction } from './direction.enum';
import { Position } from './position';

export class Day06 extends AbstractDay {
  map: string[][];
  constructor(readonly input: string) {
    super(input);
    this.map = inputStringToArray(this.input).map((line) => {
      return line.split('');
    });
  }

  partOne(): number {
    const currentPoint = this.findStartPoint(this.map);
    const startDirection = this.determineDirection(
      this.map[currentPoint.y][currentPoint.x],
    );

    return this.buildGuardPath(currentPoint, startDirection, this.map).size;
  }

  partTwo(): number {
    console.log('start');
    const currentPoint = this.findStartPoint(this.map);
    const startDirection = this.determineDirection(
      this.map[currentPoint.y][currentPoint.x],
    );

    const guardPath = this.buildGuardPath(
      currentPoint,
      startDirection,
      this.map,
    );
    console.log('Guard path', guardPath.size);

    const pathPositions: Position[] = [];
    for (const key of guardPath.keys()) {
      if (guardPath.get(key)! > 0) {
        pathPositions.push(Position.from(key));
      }
    }

    console.log('Positions', pathPositions.length);

    let count = 0;
    // for (const position of pathPositions) {
    //   const copyMap = Array.from(this.map);

    //   copyMap[position.y][position.x] = '#';
    //   //this.printMap(copyMap);
    //   if (this.isLoop(currentPoint, startDirection, copyMap)) {
    //     count++;
    //   }
    // }

    // 5516 too high
    return count;
  }

  isLoop(
    startPosition: Position,
    startDirection: Direction,
    map: string[][],
  ): boolean {
    let currentPoint = startPosition;
    let direction = startDirection;
    const guardPath = new Map<string, number>();
    guardPath.set(currentPoint.getKey(), 0);
    while (true) {
      const nextPoint = this.findNextPoint(this.map, currentPoint, direction);
      if (this.isEndOfMap(nextPoint.y, nextPoint.x, map)) {
        break;
      }
      if (this.isObstruction(map[nextPoint.y][nextPoint.x])) {
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
        if (guardPath.get(currentPoint.getKey())! > 5) {
          return true;
        }
      }
    }
    return false;
  }

  buildGuardPath(
    startPosition: Position,
    startDirection: Direction,
    map: string[][],
  ): Map<string, number> {
    let currentPoint = startPosition;
    let direction = startDirection;
    const guardPath = new Map<string, number>();
    guardPath.set(currentPoint.getKey(), 0);
    while (true) {
      const nextPoint = this.findNextPoint(this.map, currentPoint, direction);
      if (this.isEndOfMap(nextPoint.y, nextPoint.x, map)) {
        break;
      }
      if (this.isObstruction(map[nextPoint.y][nextPoint.x])) {
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
    return guardPath;
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

  isLoopForObstruction(y: number, x: number): boolean {
    return false;
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
