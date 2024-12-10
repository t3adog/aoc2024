import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';
import { Point } from './point';
import { Trail } from './trail';

export class Day10 extends AbstractDay {
  map: string[][];
  constructor(readonly input: string) {
    super(input);
    this.map = inputStringToArray(this.input).map((line) => {
      return line.split('');
    });
  }

  partOne(): number {
    const starts = this.parseAllStarts(this.map);

    const trails: Trail[] = [];

    for (const start of starts) {
      trails.push(...this.findAllTrails(this.map, [start]));
    }
    const result = this.countCorrectTrails(trails);

    return result;
  }

  partTwo(): number {
    const starts = this.parseAllStarts(this.map);

    const trails: Trail[] = [];

    for (const start of starts) {
      trails.push(...this.findAllTrails(this.map, [start]));
    }
    const result = this.countTrailsRatings(trails);

    return result;
  }

  countCorrectTrails(trails: Trail[]): number {
    const trailMap: Map<string, Set<string>> = new Map<string, Set<string>>();
    for (const trail of trails) {
      const startKey = trail.path[0].toString();
      const lastKey = trail.path[trail.path.length - 1].toString();
      if (
        trail.path.length === 10 &&
        trail.path[0].value === 0 &&
        trail.path[trail.path.length - 1].value === 9
      ) {
        if (!trailMap.has(startKey)) {
          trailMap.set(startKey, new Set<string>());
        }
        trailMap.set(startKey, trailMap.get(startKey)!.add(lastKey));
      }
    }

    let count = 0;
    for (const key of trailMap.keys()) {
      count += trailMap.get(key)!.size;
    }
    return count;
  }

  countTrailsRatings(trails: Trail[]): number {
    const trailMap: Map<string, Set<string>> = new Map<string, Set<string>>();
    for (const trail of trails) {
      const startKey = trail.path[0].toString();
      if (
        trail.path.length === 10 &&
        trail.path[0].value === 0 &&
        trail.path[trail.path.length - 1].value === 9
      ) {
        if (!trailMap.has(startKey)) {
          trailMap.set(startKey, new Set<string>());
        }
        trailMap.set(
          startKey,
          trailMap
            .get(startKey)!
            .add(trail.path.map((p) => p.toString()).join('')),
        );
      }
    }

    let count = 0;
    for (const key of trailMap.keys()) {
      count += trailMap.get(key)!.size;
    }
    return count;
  }

  parseAllStarts(map: string[][]): Trail[] {
    const trails: Trail[] = [];
    for (let y = 0; y < map.length; y++) {
      for (let x = 0; x < map[y].length; x++) {
        const value = Number.parseInt(map[y][x]);
        if (value === 0) {
          trails.push(new Trail([new Point(x, y, value)]));
        }
      }
    }
    return trails;
  }

  findAllTrails(map: string[][], trails: Trail[]): Trail[] {
    for (let i = 0; i < trails.length; i++) {
      const currentTrail = trails[i];
      const lastPoint = currentTrail.path[currentTrail.path.length - 1];
      if (lastPoint.value === 9) {
        continue;
      }
      const nextSteps = this.findAllNextSteps(map, lastPoint);
      if (nextSteps.length > 0) {
        if (nextSteps.length > 1) {
          for (let i = 1; i < nextSteps.length; i++) {
            const newTrail = new Trail([...currentTrail.path]);
            newTrail.path.push(nextSteps[i]);
            trails.push(newTrail);
          }
        }
        currentTrail.path.push(nextSteps[0]);
        return this.findAllTrails(map, trails);
      }
    }
    return trails;
  }

  findAllNextSteps(map: string[][], currentPoint: Point): Point[] {
    const foundSteps: Point[] = [];
    const height = map.length;
    const width = map[0].length;

    if (currentPoint.y - 1 >= 0) {
      const newPoint = new Point(
        currentPoint.x,
        currentPoint.y - 1,
        Number.parseInt(map[currentPoint.y - 1][currentPoint.x]),
      );
      if (currentPoint.value - newPoint.value === -1) {
        foundSteps.push(newPoint);
      }
    }
    if (currentPoint.y + 1 < height) {
      const newPoint = new Point(
        currentPoint.x,
        currentPoint.y + 1,
        Number.parseInt(map[currentPoint.y + 1][currentPoint.x]),
      );
      if (currentPoint.value - newPoint.value === -1) {
        foundSteps.push(newPoint);
      }
    }
    if (currentPoint.x - 1 >= 0) {
      const newPoint = new Point(
        currentPoint.x - 1,
        currentPoint.y,
        Number.parseInt(map[currentPoint.y][currentPoint.x - 1]),
      );
      if (currentPoint.value - newPoint.value === -1) {
        foundSteps.push(newPoint);
      }
    }
    if (currentPoint.x + 1 < width) {
      const newPoint = new Point(
        currentPoint.x + 1,
        currentPoint.y,
        Number.parseInt(map[currentPoint.y][currentPoint.x + 1]),
      );
      if (currentPoint.value - newPoint.value === -1) {
        foundSteps.push(newPoint);
      }
    }
    return foundSteps;
  }

  printTrails(trails: Trail[]) {
    for (const trail of trails) {
      console.log(trail.path.map((point) => point.toString()).join(''));
      console.log('');
    }
  }
}
