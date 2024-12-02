import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';

export class Day02 extends AbstractDay {
  private readonly reports: number[][];
  constructor(readonly input: string) {
    super(input);
    this.reports = inputStringToArray(this.input).map((line) => {
      return line.split(' ').map((item) => {
        return parseInt(item);
      });
    });
  }

  partOne(): number {
    let safeReportsCount = 0;
    for (const report of this.reports) {
      if (this.isSafe(report)) {
        safeReportsCount++;
      }
    }
    return safeReportsCount;
  }

  partTwo(): number {
    let safeReportsCount = 0;
    for (const report of this.reports) {
      if (this.isSafe(report)) {
        safeReportsCount++;
      } else {
        for (
          let indexWithout = 0;
          indexWithout < report.length;
          indexWithout++
        ) {
          const tmpReport = report.filter((_, index) => index !== indexWithout);
          if (this.isSafe(tmpReport)) {
            safeReportsCount++;
            break;
          }
        }
      }
    }
    return safeReportsCount;
  }

  isSafe(report: number[]): boolean {
    if (!this.isSorted(report)) {
      report = report.reverse();
      if (!this.isSorted(report)) {
        return false;
      }
    }

    for (let i = 0; i < report.length; i++) {
      if (!this.isValidLevelDiff(report, i)) {
        return false;
      }
    }
    return true;
  }

  isSorted(report: number[]): boolean {
    return report.every((v, i, a) => !i || a[i - 1] <= v);
  }

  isValidLevelDiff(report: number[], index: number): boolean {
    const value = report[index];
    const nextStepValue = report[index + 1];
    if (nextStepValue) {
      const diff = nextStepValue - value;
      if (diff < 1 || diff > 3) {
        return false;
      }
    }
    return true;
  }
}
