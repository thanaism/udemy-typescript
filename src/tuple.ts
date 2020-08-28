export {};

// Union型は型の順序が制限されない
let profile = ['hoge', 43];
profile = [24, 'fuga'];

let sampleTuple: [string, number] = ['hoge', 8289];
// sampleTuple = [23424, 'fuga'];
console.log({ sampleTuple });
