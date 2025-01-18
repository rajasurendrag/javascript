import { assert, assertFalse } from "jsr:@std/assert";
import { isStrictlyAscending } from "../src/01_strictly_ascending.js";

Deno.test("should be true for empty array", () => {
  assert(isStrictlyAscending([]), true);
});

Deno.test("should be true for array with one element", () => {
  assert(isStrictlyAscending([1]), true);
});

Deno.test("should be true for array with two elements", () => {
  assert(isStrictlyAscending([1, 2]), true);
});

Deno.test("should be false for array with two elements", () => {
  assertFalse(isStrictlyAscending([1, 0]), false);
});

Deno.test("should be false for array with two elements", () => {
  assertFalse(isStrictlyAscending([1, 2, 6, 4]), false);
});
