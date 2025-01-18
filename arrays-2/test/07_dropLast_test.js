import { assertEquals } from "jsr:@std/assert";
import { dropLast } from "../src/07_drop_last.js";

Deno.test("should be [empty] array is empty", () => {
  assertEquals(dropLast([], 0), []);
});

Deno.test("should be same array if elements to drop is 0", () => {
  assertEquals(dropLast([1], 0), [1]);
});

Deno.test(
  "should be Array without the first element, if elements to drop is 1",
  () => {
    assertEquals(dropLast([1], 1), []);
  }
);

Deno.test("should be Array without n elements at end", () => {
  assertEquals(dropLast([1, 3, 4], 2), [1]);
});
