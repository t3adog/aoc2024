import { DiskFile } from './disk-file';

export class Chunk {
  capacity: number;
  file: DiskFile;
  wasMoved: boolean;
  constructor(capacity: number, file: DiskFile) {
    this.capacity = capacity;
    this.file = file;
    this.wasMoved = false;
  }

  toString() {
    let result = '';

    for (let i = 0; i < this.capacity; i++) {
      result = result + this.file.toString();
    }
    return result;
  }

  toDiskFile(): DiskFile[] {
    const result: DiskFile[] = [];
    for (let i = 0; i < this.capacity; i++) {
      result.push(this.file);
    }
    return result;
  }
}
