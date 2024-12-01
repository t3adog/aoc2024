export abstract class AbstractDay {
  protected constructor(readonly input: string) {}
  abstract partOne(): number;
  abstract partTwo(): number;
}
