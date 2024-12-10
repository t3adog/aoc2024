import { AbstractDay } from '../base/abstract-day';
import { Chunk } from './chunk';
import { DiskFile } from './disk-file';

export class Day09 extends AbstractDay {
  constructor(readonly input: string) {
    super(input);
  }

  partOne(): number {
    const diskMap = this.decryptDiskMap(this.input);
    this.fragmentationDiskMap(diskMap);
    return this.calculateChecksum(diskMap);
  }

  partTwo(): number {
    const chunks = this.decryptDiskMapToChunks(this.input);
    this.defragmentationDiskMap(chunks);
    return this.calculateChecksum(this.convertChunksToDiskMap(chunks));
  }

  fragmentationDiskMap(diskMap: DiskFile[]): void {
    for (let i = 0; i < diskMap.length; i++) {
      if (!diskMap[i].isFile) {
        for (let z = diskMap.length - 1; z > i; z--) {
          if (diskMap[z].isFile) {
            const tmp = diskMap[i];
            diskMap[i] = diskMap[z];
            diskMap[z] = tmp;
            break;
          }
        }
      }
    }
  }

  defragmentationDiskMap(chunks: Chunk[]): void {
    while (
      chunks.filter((chunk) => chunk.file.isFile && !chunk.wasMoved).length > 0
    ) {
      for (
        let rightChunkIdx = chunks.length - 1;
        rightChunkIdx >= 0;
        rightChunkIdx--
      ) {
        const rightChunk = chunks[rightChunkIdx];
        let leftChunkIdx = -1;
        if (!rightChunk.wasMoved && rightChunk.file.isFile) {
          for (let i = 0; i < rightChunkIdx; i++) {
            const leftChunk = chunks[i];
            if (
              !leftChunk.file.isFile &&
              leftChunk.capacity >= rightChunk.capacity
            ) {
              leftChunkIdx = i;
              break;
            }
          }
          if (leftChunkIdx > -1) {
            this.switchChunks(chunks, leftChunkIdx, rightChunkIdx);
            break;
          } else {
            chunks[rightChunkIdx].wasMoved = true;
            //break;
          }
        }
      }
    }
  }

  switchChunks(
    chunks: Chunk[],
    leftChunkIdx: number,
    rightChunkIdx: number,
  ): void {
    const leftChunk = chunks[leftChunkIdx];
    const rightChunk = chunks[rightChunkIdx];
    const capacityDiff = leftChunk.capacity - rightChunk.capacity;
    if (leftChunk.capacity >= rightChunk.capacity) {
      rightChunk.wasMoved = true;
      chunks[leftChunkIdx] = rightChunk;
      chunks[rightChunkIdx] = leftChunk;
      if (capacityDiff > 0) {
        chunks[rightChunkIdx].capacity = chunks[leftChunkIdx].capacity;
        chunks.splice(
          leftChunkIdx + 1,
          0,
          new Chunk(capacityDiff, new DiskFile(null, false)),
        );
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

  decryptDiskMapToChunks(encryptedDiskMap: string): Chunk[] {
    const chunks: Chunk[] = [];
    let diskId = 0;
    for (let i = 0; i < encryptedDiskMap.length; i++) {
      if (i % 2 === 0) {
        chunks.push(
          new Chunk(
            Number.parseInt(encryptedDiskMap[i]),
            new DiskFile(diskId, true),
          ),
        );
        diskId++;
      } else {
        chunks.push(
          new Chunk(
            Number.parseInt(encryptedDiskMap[i]),
            new DiskFile(null, false),
          ),
        );
      }
    }
    return chunks;
  }

  calculateChecksum(diskMap: DiskFile[]): number {
    let checksum = 0;

    for (let i = 0; i < diskMap.length; i++) {
      if (diskMap[i].isFile) {
        const id = diskMap[i].id! * i;
        checksum = checksum + id;
      } else {
        continue;
      }
    }
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

  convertChunksToDiskMap(chunks: Chunk[]): DiskFile[] {
    const diskMap: DiskFile[] = [];
    for (let i = 0; i < chunks.length; i++) {
      diskMap.push(...chunks[i].toDiskFile());
    }
    return diskMap;
  }
}
