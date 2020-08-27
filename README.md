# TypeScript

## Playground

Google で`typescript playground`と検索すると開発元である Microsoft の公式の Playground が出てくる。

## example

```ts
// TypeScript
const message: string = 'hello world';

// transpiled to JavaScript
const message = 'hello world';
```

型宣言と違反時のエラーが TypeScript のもたらす恩恵

## Node.js のインストール

TypeScript のトランスパイラは npm で配布されている。  
`$ brew install node`すればよい。  
`LTS`を入れたい場合は`$ brew install node@12`などとすればよい。

## GitHub にリポジトリ作成

今さら書くまでもないが、`.gitignore`に`Node`を選択すれば OK

### リポジトリの clone

`SSH`を使用する場合は、SSH 公開鍵を作成しておくこと。  
`git clone {URI}`する。  
`less .gitignore`で中身を覗いてみてみる。

## package.json の作成

Node のパッケージ管理をやってくれるもの。  
`npm init -y`で作成してくれる。`-y`オプションにしておくと全部デフォルトが選択される。

## TypeScript のインストール

`$ npm info typescript`で最新版を確認しておく。  
`$ npm install --save-dev typescript@3.7.5`のようにインストールするとスコープを開発環境に限定してバージョン指定でインストールすることができる。
実行には typescript 不要なのでグローバルスコープは不要。

## TypeScript コードの実行

以下のコマンドでトランスパイル可能。  
`$ tsc src/install-typescript.ts`  
これはグローバルにインストールしてないので`not found`になってしまう。  
`./node_modules/.bin/tsc src/install-typescript.ts`のように書けばよい。  
すると同じディレクトリに js ファイルが吐かれている。

### npx コマンド

上記のコマンドをいちいち打つのはダルすぎるので`$ npx tsc`コマンドで実行できることを知っておこう。

## ts-node のインストール

いちいちトランスパイルするのはダルいので、ダイレクトに挙動確認したい。

```bash
$ npm info ts-node
$ npm install --save-dev ts-node
$ npx ts-node src/install-typescript.ts
```

## ts-node-dev のインストール

ts-node コマンドをいちいち打つことすらダルいので、ファイルを修正したら自動でトランスパイルをかけて実行してほしい。

```bash
$ npm info ts-node-dev
$ npm install --save-dev ts-node-dev
```

### Usage

`$ ts-node-dev --respawn --transplieOnly hoge.ts`というように使う。  
`--respawn`はファイル変更のたびに実行するオプション。  
`--transpileOnly`は文字通り。
`$ tsnd`というエイリアスもある。

### package.json scripts への登録

`package.json`の`scripts`に書きを追記。  
`"dev": "ts-node-dev --respawn",`  
以降は`$ npm run dev *.ts`で実行できる。

## vscode の設定

`code`にパスを通す：コマンドパレットから。  
`prettier`拡張機能のインストール。  
文末セミコロン、保存時の自動整形、JSX 中のシングルクオート。

## tsconfig.json

`$ npx tsc --init`
