import { inputStringToArray } from '../../utils/input-handler.util';
import { AbstractDay } from '../base/abstract-day';
import { Coordinate } from './coordinate';

export class Day08 extends AbstractDay {
  map: string[][];

  constructor(readonly input: string) {
    super(input);

    this.map = inputStringToArray(this.input).map((line) => {
      return line.split('');
    });
  }

  partOne(): number {
    const antennas: Map<string, Coordinate[]> = new Map();
    const rows = this.map.length;
    const cols = this.map[0].length;

    // Сбор позиций антенн
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const char = this.map[y][x];
        if (char !== '.') {
          if (!antennas.has(char)) {
            antennas.set(char, []);
          }
          antennas.get(char)?.push([x, y]);
        }
      }
    }

    const antinodes = new Set<string>();

    // Поиск антинодов
    for (const [freq, positions] of antennas.entries()) {
      const len = positions.length;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const [firstAntennaX, firstAntennaY] = positions[i];
          const [secondAntennaX, secondAntennaY] = positions[j];

          // Проверяем, создают ли антенны антиноды
          const dx = secondAntennaX - firstAntennaX;
          const dy = secondAntennaY - firstAntennaY;

          // Первый антинод (ближе к первой антенне)
          const firstAntinodeX = firstAntennaX - dx;
          const firstAntinodeY = firstAntennaY - dy;

          // Второй антинод (ближе ко второй антенне)
          const secondAntinodeX = secondAntennaX + dx;
          const secondAntinodeY = secondAntennaY + dy;

          // Добавляем антиноды, если они в пределах карты
          if (
            firstAntinodeX >= 0 &&
            firstAntinodeX < cols &&
            firstAntinodeY >= 0 &&
            firstAntinodeY < rows
          ) {
            antinodes.add(`${firstAntinodeX},${firstAntinodeY}`);
          }
          if (
            secondAntinodeX >= 0 &&
            secondAntinodeX < cols &&
            secondAntinodeY >= 0 &&
            secondAntinodeY < rows
          ) {
            antinodes.add(`${secondAntinodeX},${secondAntinodeY}`);
          }
        }
      }
    }

    // Возвращаем количество уникальных антинодов
    return antinodes.size;
  }

  partTwo(): number {
    return 1;
  }
}
