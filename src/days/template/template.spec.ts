import * as fs from 'fs';
import { TemplateDay } from './template';

describe('day 01', () => {
  const template = new TemplateDay(
    fs.readFileSync('./src/days/template/inputs/test.txt', 'utf8'),
  );

  it('should solve part01', () => {
    expect(template.partOne()).toEqual(0);
  });

  it('should solve part02', () => {
    expect(template.partTwo()).toEqual(1);
  });
});
