import * as t from "https://deno.land/std/testing/asserts.ts";
import { JSONC } from "./JSONC.js";

Deno.test("simple", () => {
  t.assertEquals(JSONC.parse("3 /* comment */"), 3);
  t.assertEquals(JSONC.parse("3 // comment"), 3);
  t.assertEquals(JSONC.parse("3"), 3);
});
Deno.test("stringify", () => {
  t.assertEquals(JSONC.stringify(3), "3");
  t.assertEquals(JSONC.stringify({ a: "ABC", b: 123 }), `{
  "a": "ABC",
  "b": 123
}`);
});
