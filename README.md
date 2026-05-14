# JSONC

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An absurdly small JSONC parser.

## Features
- Strips out comments using regular expressions
- Handles trailing commas
- Passes the cleaned JSON string to `JSON.parse`

## Usage

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

## Test

```sh
deno test
```

## License

MIT License — see [LICENSE](LICENSE).