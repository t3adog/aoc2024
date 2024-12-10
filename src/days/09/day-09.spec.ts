import * as fs from 'fs';
import { Day09 } from './day-09';

const day09 = new Day09(
  fs.readFileSync('./src/days/09/inputs/test.txt', 'utf8'),
);
describe('day 09', () => {
  it('should solve part01', () => {
    expect(day09.partOne()).toEqual(1928);
  });

  it('should solve part02', () => {
    expect(day09.partTwo()).toEqual(1);
  });
});

describe('decryptDiskMap', () => {
  it('should be decrypted diskMap', () => {
    expect(
      day09
        .decryptDiskMap('2333133121414131402')
        .map((item) => item.toString())
        .join(''),
    ).toEqual('00...111...2...333.44.5555.6666.777.888899');
  });
});
