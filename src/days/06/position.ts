export class Position {
  y: number;
  x: number;

  constructor(y: number, x: number) {
    this.y = y;
    this.x = x;
  }

  static from(key: string) {
    const [y, x] = key.split('-');
    return new Position(Number(y), Number(x));
  }

  getKey() {
    return this.toString();
  }

  toString(): string {
    return `${this.y}-${this.x}`;
  }
}
