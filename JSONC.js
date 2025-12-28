import _JSONC from "./src/index.js";

export class JSONC {
  static stringify(obj) {
    return JSON.stringify(obj, null, 2);
  }
  static parse(text) {
    return _JSONC.parse(text);
  }
}