export class Position {
  y: number;
  x: number;
  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
  }

  toString() {
    return `${this.y}-${this.x}`;
  }
}
