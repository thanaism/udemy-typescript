export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let strings: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

console.log({ strings });

let nijigenArray: Array<Array<number>> = [
  [1, 2, 3],
  [1, 2, 3],
];

let nijigenArray2: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
];

console.log({ nijigenArray });

let mixArray: (string | number | boolean)[] = [1, false, 'hoge'];
