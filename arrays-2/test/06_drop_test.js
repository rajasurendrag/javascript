import { assertEquals } from "jsr:@std/assert";
import { drop } from "../src/06_drop.js";

Deno.test("should be [empty] if array is empty", () => {
  assertEquals(drop([], 0), []);
});

Deno.test("should be same array if elements to drop is 0", () => {
  assertEquals(drop([1], 0), [1]);
});

Deno.test(
  "should be [empty] if elements to drop is greater than the array length",
  () => {
    assertEquals(drop([1, 2, 3], 4), []);
  }
);

Deno.test(
  "should be the Array without the first element, if elements to drop is 1",
  () => {
    assertEquals(drop([1], 1), []);
  }
);

Deno.test("should be the Array without n elements at front", () => {
  assertEquals(drop([1, 3, 4], 2), [4]);
});
