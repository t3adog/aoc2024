import { AbstractDay } from '../base/abstract-day';

export class Day09 extends AbstractDay {
  constructor(readonly input: string) {
    super(input);
  }

  partOne(): number {
    const diskMap = this.decryptDiskMap(this.input);
    console.log('Decrypted disk map: ', diskMap);

    const defragmentedDiskMap = this.defragmentationDiskMap(diskMap);
    console.log('Defragmented disk map: ', defragmentedDiskMap);
    return 0;
  }

  partTwo(): number {
    return 1;
  }

  defragmentationDiskMap(diskMapStr: string): string {
    const diskMap = diskMapStr.split('');
    for (let i = 0; i < diskMap.length; i++) {
      if (diskMap[i] === '.') {
        for (let z = diskMap.length - 1; z > i; z--) {
          if (diskMap[z] !== '.') {
            diskMap[i] = diskMap[z];
            diskMap[z] = '.';
            break;
          }
        }
      }
    }
    return diskMap.join('');
  }

  decryptDiskMap(encyptedDiskMap: string): string {
    let diskMap = '';
    let diskId = 0;
    for (let i = 0; i < encyptedDiskMap.length; i++) {
      if (i % 2 === 0) {
        diskMap = this.concatNSymbols(
          diskMap,
          diskId.toString(),
          Number.parseInt(encyptedDiskMap[i]),
        );
        diskId++;
      } else {
        diskMap = this.concatNSymbols(
          diskMap,
          '.',
          Number.parseInt(encyptedDiskMap[i]),
        );
      }
    }
    return diskMap;
  }

  concatNSymbols(input: string, symbol: string, count: number): string {
    let result = input;
    for (let i = 0; i < count; i++) {
      result += symbol;
    }
    return result;
  }
}
