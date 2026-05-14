# JSONC

驚くほど小さなJSONCパーサーです。

## 特徴
- 正規表現を使用してコメントを除去
- 末尾のカンマを処理
- クリーンアップされたJSON文字列を `JSON.parse` に渡す

## 使い方

```ts
import { JSONC } from "https://code4fukui.github.io/JSONC/JSONC.js";

const source = `
  { // This is an example
    "foo": 123,
    /* TRAILING COMMAS */
    "bar": [1, 2, 3,],
  }
`;

const result = {
  foo: 123,
  bar: [1, 2, 3]
};

JSONC.parse(source); // => returns an object that's deeply equal to `result`
```

## テスト

```sh
deno test
```

## ライセンス

MIT License — [LICENSE](LICENSE) を参照してください。
