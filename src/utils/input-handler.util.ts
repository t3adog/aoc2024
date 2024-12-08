export const inputStringToArray = (input: string): string[] => {
  return input.split('\n');
};

export function printMap(map: string[][]) {
  console.log(map.map((line) => line.join('')).join('\n'));
}
