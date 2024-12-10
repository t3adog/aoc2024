import { AbstractDay } from '../base/abstract-day';
import { DiskFile } from './file';

export class Day09 extends AbstractDay {
  constructor(readonly input: string) {
    super(input);
  }

  partOne(): number {
    const diskMap = this.decryptDiskMap(this.input);
    this.defragmentationDiskMap(diskMap);

    return this.calculateChecksum(diskMap);
  }

  partTwo(): number {
    return 1;
  }

  defragmentationDiskMap(diskMap: DiskFile[]): void {
    for (let i = 0; i < diskMap.length; i++) {
      if (!diskMap[i].isFile) {
        for (let z = diskMap.length - 1; z > i; z--) {
          if (diskMap[z].isFile) {
            diskMap[i] = diskMap[z];
            diskMap[z] = new DiskFile(null, false);
            break;
          }
        }
      }
    }
  }

  decryptDiskMap(encryptedDiskMap: string): DiskFile[] {
    const diskMap: DiskFile[] = [];
    let diskId = 0;
    for (let i = 0; i < encryptedDiskMap.length; i++) {
      if (i % 2 === 0) {
        // Длина файла
        this.addDiskIds(diskMap, diskId, Number.parseInt(encryptedDiskMap[i]));
        diskId++;
      } else {
        // Длина свободного места
        this.addDiskIds(diskMap, null, Number.parseInt(encryptedDiskMap[i]));
      }
    }
    return diskMap;
  }

  calculateChecksum(diskMap: DiskFile[]): number {
    let checksum = 0;

    for (let i = 0; i < diskMap.length; i++) {
      if (diskMap[i].isFile) {
        const id = diskMap[i].id! * i;
        checksum = checksum + id;
      } else {
        break;
      }
    }
    console.log('CheckSum is ', checksum);
    return checksum;
  }

  addDiskIds(diskMap: DiskFile[], diskId: number | null, count: number): void {
    for (let i = 0; i < count; i++) {
      if (diskId === null) {
        diskMap.push(new DiskFile(null, false));
      } else {
        diskMap.push(new DiskFile(diskId, true));
      }
    }
  }
}
