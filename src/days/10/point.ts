export class Point {
  constructor(
    public x: number,
    public y: number,
    public value: number,
  ) {}

  toString(): string {
    return `{${this.x}-${this.y}-${this.value}}}`;
  }
}
