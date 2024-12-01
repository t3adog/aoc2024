import { AbstractDay } from '../base/abstract-day';

export class TemplateDay extends AbstractDay {
  constructor(readonly input: string) {
    super(input);
  }

  partOne(): number {
    return 0;
  }

  partTwo(): number {
    return 1;
  }
}
