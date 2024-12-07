import permu from 'permu';
import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';
import { CalibrationEquation } from './equation';
import { Operation } from './operation';

export class Day07 extends AbstractDay {
  calibrationEquations: CalibrationEquation[] = [];
  constructor(readonly input: string) {
    super(input);
    this.calibrationEquations = inputStringToArray(this.input).map((line) => {
      const [value, operators] = line.split(':');
      return new CalibrationEquation(
        parseInt(value),
        operators
          .trim()
          .split(' ')
          .map((operator) => parseInt(operator)),
      );
    });
  }

  partOne(): number {
    return this.calibrationEquations
      .filter((equation) =>
        this.isValidEquation(equation, [Operation.sum, Operation.mul]),
      )
      .map((equation) => equation.value)
      .reduce((a, b) => a + b);
  }

  partTwo(): number {
    return this.calibrationEquations
      .filter((equation) =>
        this.isValidEquation(equation, [
          Operation.sum,
          Operation.mul,
          Operation.js_sum,
        ]),
      )
      .map((equation) => equation.value)
      .reduce((a, b) => a + b);
  }

  isValidEquation(
    equation: CalibrationEquation,
    validOperations: Operation[],
  ): boolean {
    const permutations = permu(equation.operators.length - 1, validOperations);
    for (const permutation of permutations) {
      let result = equation.operators[0];
      for (let i = 1; i < equation.operators.length; i++) {
        const operator = permutation[i - 1];
        if (operator === Operation.sum) {
          result = result + equation.operators[i];
        } else if (operator === Operation.mul) {
          result = result * equation.operators[i];
        } else if (operator === Operation.js_sum) {
          result = Number.parseInt(
            result.toString() + equation.operators[i].toString(),
          );
        }
      }
      if (result == equation.value) {
        return true;
      }
    }
    return false;
  }
}
