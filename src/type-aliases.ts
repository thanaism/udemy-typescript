export {};

type Mojiretsu = string;

const fooString: string = 'foo';
const fooMojiretsu: Mojiretsu = 'foo';

const example1: Profile = {
  name: 'foo',
  age: 25,
};

type Profile = {
  name: string;
  age: number;
};

type Profile2 = typeof example1;
