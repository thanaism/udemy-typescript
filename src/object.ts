export {};

let profile1: object = { name: 'hoge' };

// 別のプロパティを代入できてしまうので制約が緩すぎる
profile1 = { birthYear: 1976 };

let profile2: { name: string } = { name: 'hoge' };
// これはエラーになってしまう
// profile2 = { birthYear: 1976 };
