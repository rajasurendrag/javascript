import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { reverse, appendAtEnd } from "../src/02_reverse.js";

describe("reverse ", () => {
  it("should be same array if array is empty or length 1", () => {
    assertEquals(reverse([]), []);
    assertEquals(reverse([1]), [1]);
  });

  it("should be array of elements in reverse order", () => {
    assertEquals(reverse([0, 1]), [1, 0]);
    assertEquals(reverse([1, 2, 3]), [3, 2, 1]);
  });
});

describe("appendAtEnd ", () => {
  it("should return an passed array with element included in it at end", () => {
    assertEquals(appendAtEnd([], 1), [1]);
    assertEquals(appendAtEnd([1, 2], 1), [1, 2, 1]);
  });
});
