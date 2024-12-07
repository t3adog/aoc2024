export class CalibrationEquation {
  value: number;
  operators: number[] = [];

  constructor(value: number, operators: number[]) {
    this.value = value;
    this.operators = operators;
  }
}
