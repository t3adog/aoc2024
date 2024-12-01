import { AbstractDay } from '../../base/abstract-day';
import { inputStringToArray } from '../../utils/input-handler.util';

export class Day01 extends AbstractDay {
  private inputArray: string[];
  constructor(readonly input: string) {
    super(input);
    this.inputArray = inputStringToArray(this.input);
  }

  partOne(): number {
    // Парсим
    let { leftList, rightList } = this.parseLocationIdsLists();

    if (leftList.length !== rightList.length) {
      throw new Error('Lists are not the same length');
    }

    // Сортируем
    leftList = leftList.sort((a, b) => a - b);
    rightList = rightList.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < leftList.length; i++) {
      sum = sum + Math.abs(leftList[i] - rightList[i]);
    }

    return sum;
  }

  partTwo(): number {
    return this.input.length;
  }

  private parseLocationIdsLists(): { leftList: number[]; rightList: number[] } {
    const leftList: number[] = [];
    const rightList: number[] = [];

    this.inputArray.forEach((line) => {
      const [first, second] = line.split('  ').map((item) => {
        return parseInt(item);
      });
      leftList.push(first);
      rightList.push(second);
    });

    return { leftList, rightList };
  }
}
