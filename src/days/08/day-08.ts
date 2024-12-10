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

  // It was stolen 🥴
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

  // It was stolen 🥴
  partTwo(): number {
    const inputArr: string[] = inputStringToArray(this.input);

    // Парсим антены
    const antennas: Map<string, Coordinate[]> = new Map<string, Coordinate[]>();
    for (let i = 0; i < inputArr.length; i++) {
      for (let j = 0; j < inputArr[0].length; j++) {
        if (inputArr[i][j] !== '.') {
          antennas[inputArr[i][j]] = [
            ...(antennas[inputArr[i][j]] ?? []),
            [i, j],
          ];
        }
      }
    }

    const antinodes: Set<string> = new Set();

    for (const antenna of Object.keys(antennas)) {
      const frequency: Coordinate[] = antennas[antenna];
      for (let i = 0; i < frequency.length; i++) {
        for (let j = i + 1; j < frequency.length; j++) {
          const [i1, j1] = frequency[i];
          const [i2, j2] = frequency[j];
          const [di, dj] = [i1 - i2, j1 - j2];
          let i1aux = i1;
          let j1aux = j1;
          while (
            i1aux >= 0 &&
            i1aux < inputArr.length &&
            j1aux >= 0 &&
            j1aux < inputArr[0].length
          ) {
            const firstAntinodeKey = this.toKey(i1aux, j1aux);
            if (!antinodes.has(firstAntinodeKey)) {
              antinodes.add(firstAntinodeKey);
            }
            i1aux += di;
            j1aux += dj;
          }
          let i2aux = i2;
          let j2aux = j2;
          while (
            i2aux > 0 &&
            i2aux < inputArr.length &&
            j2aux >= 0 &&
            j2aux < inputArr[0].length
          ) {
            const secondAntinodeKey = this.toKey(i2aux, j2aux);
            if (!antinodes.has(secondAntinodeKey)) {
              antinodes.add(secondAntinodeKey);
            }
            i2aux -= di;
            j2aux -= dj;
          }
        }
      }
    }
    return antinodes.size;
  }

  toKey(x: number, y: number): string {
    return `${x},${y}`;
  }
}
