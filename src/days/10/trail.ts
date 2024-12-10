import { Point } from './point';

export class Trail {
  path: Point[] = [];
  constructor(path: Point[]) {
    this.path = path;
  }
}
