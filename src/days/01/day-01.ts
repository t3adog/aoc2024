import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';

export class Day01 extends AbstractDay {
  private readonly leftList: number[] = [];
  private readonly rightList: number[] = [];
  constructor(readonly input: string) {
    super(input);

    inputStringToArray(this.input).forEach((line) => {
      const [first, second] = line.split('  ').map((item) => {
        return parseInt(item);
      });
      this.leftList.push(first);
      this.rightList.push(second);
    });

    if (this.leftList.length !== this.rightList.length) {
      throw new Error('Lists are not the same length');
    }
  }

  partOne(): number {
    // Сортируем
    const sortedLeftList = [...this.leftList].sort((a, b) => a - b);
    const sortedRightList = [...this.rightList].sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < sortedLeftList.length; i++) {
      sum = sum + Math.abs(sortedLeftList[i] - sortedRightList[i]);
    }

    return sum;
  }

  partTwo(): number {
    const rightListCountMap = new Map<number, number>();

    this.rightList.forEach((item) => {
      if (rightListCountMap.has(item)) {
        rightListCountMap.set(item, rightListCountMap.get(item)! + 1);
      } else {
        rightListCountMap.set(item, 1);
      }
    });

    let sum = 0;

    for (const id of this.leftList) {
      if (rightListCountMap.has(id)) {
        sum = sum + id * rightListCountMap.get(id)!;
      }
    }

    return sum;
  }
}
