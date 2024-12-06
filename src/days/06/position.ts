export class Position {
  y: number;
  x: number;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
  }

  getKey() {
    return this.toString();
  }

  toString(): string {
    return `(${this.y}-${this.x})`;
  }
}
