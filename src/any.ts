export {};
import axios from 'axios';

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then((response) => {
  // let data: any;
  // let data: Array<object>;
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  // data = [
  //   {
  //     id: 12412412,
  //     title: 'hoge',
  //     description: 'fuga',
  //   },
  // ];
  console.log(data);
});
