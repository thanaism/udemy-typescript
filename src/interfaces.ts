export {};

type ObjectType = {
  name: string;
  age: number;
};

// let object: ObjectType;
// object = {
//   name: 'foo',
//   age: 123,
// };

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface;
object = {
  name: 'foo',
  age: 123,
};

console.log({ object });
