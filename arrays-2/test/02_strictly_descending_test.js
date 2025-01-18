import { isStrictlyDescending } from "../src/02_strictly_descending.js";
import { assert, assertFalse } from "jsr:@std/assert";

Deno.test("should be true for empty array", () => {
  assert(isStrictlyDescending([]), true);
});

Deno.test("should be true for array of one element", () => {
  assert(isStrictlyDescending([1]), true);
});

Deno.test("should be false for array of two elements", () => {
  assertFalse(isStrictlyDescending([1, 1]), false);
});

Deno.test("should be false for array of two elements", () => {
  assertFalse(isStrictlyDescending([1, 2]), false);
});

Deno.test("should be true for array of two elements", () => {
  assert(isStrictlyDescending([2, 1]), true);
});

Deno.test("should be true for array of multiple elements", () => {
  assert(isStrictlyDescending([2, 1, 0]), true);
});

Deno.test("should be false for array of multiple elements", () => {
  assertFalse(isStrictlyDescending([2, 1, 2]), false);
});
