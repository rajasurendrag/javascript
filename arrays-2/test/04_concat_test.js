import { assertEquals } from "jsr:@std/assert";
import { concat } from "../src/04_concat.js";

Deno.test("should be [] for two empty arrays", () => {
  assertEquals(concat([], []), []);
});

Deno.test("should be return other array if any of the array is empty", () => {
  assertEquals(concat([], [1]), [1]);
});

Deno.test(
  "should be [array1 elements and array2 elemnts] for arrays that are not empty",
  () => {
    assertEquals(concat([4], [5]), [4, 5]);
  }
);
