import { assert, assertFalse } from "jsr:@std/assert";
import { containsAll } from "../src/08_contains_all.js";

Deno.test("should be true if the arrays are empty", () => {
  assert(containsAll([], []));
});

Deno.test("should be true if the array2 is empty", () => {
  assert(containsAll([1], []));
});

Deno.test("should be false if the array1 is empty", () => {
  assertFalse(containsAll([], [1]));
});

Deno.test(
  "should be true if all the elements in array2 is exists in array1",
  () => {
    assert(containsAll([1, 2, 3], [2, 3]));
  }
);
