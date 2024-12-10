export class DiskFile {
  id?: number | null;
  isFile: boolean;

  constructor(id: number | null, isFile: boolean) {
    this.id = id;
    this.isFile = isFile;
  }

  toString() {
    return this.id?.toString() || '.';
  }
}
