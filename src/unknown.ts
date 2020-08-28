export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// console.log(typeof numberUnknown);
if (typeof numberUnknown === 'number') {
  let sumUnkown = numberUnknown + 10;
  console.log(sumUnkown);
}

// 型ガード: type guardを理解しよう
