import { assertEquals } from "jsr:@std/assert";
import { difference } from "../src/05_difference.js";

Deno.test("should be [] if two arrays are empty", () => {
  assertEquals(difference([], []), []);
});

Deno.test("should return [array1] if the [array2] is empty", () => {
  assertEquals(difference([1], []), [1]);
});

Deno.test("should return [] if both the arrays are same", () => {
  assertEquals(difference([1], [1]), []);
});

Deno.test(
  "should return unique elements of [array1] that are not in [array2]",
  () => {
    assertEquals(difference([1, 2], [1]), [2]);
  }
);
