import * as t from "https://deno.land/std/testing/asserts.ts";
import { JSONC } from "./JSONC.js";

Deno.test("simple", () => {
  t.assertEquals(JSONC.parse("3 /* comment */"), 3);
  t.assertEquals(JSONC.parse("3 // comment"), 3);
  t.assertEquals(JSONC.parse("3"), 3);
});
Deno.test("comma", () => {
  t.assertEquals(JSONC.parse("[1, 2, 3,]"), [1, 2, 3]);
  t.assertEquals(JSONC.parse(`{ "a": 1, }`), { a: 1 });
});
Deno.test("stringify", () => {
  t.assertEquals(JSONC.stringify(3), "3");
  t.assertEquals(JSONC.stringify({ a: "ABC", b: 123 }), `{
  "a": "ABC",
  "b": 123
}`);
});
