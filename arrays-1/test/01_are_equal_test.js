import { areEqual } from "../src/01_are_equal.js";
import { describe, it } from "jsr:@std/testing/bdd";
import { assertFalse, assert } from "jsr:@std/assert";

describe("areEqual :", () => {
  it("should be true  if both are empty ", () => {
    assert(areEqual([], []));
  });

  it("should be false if any of the array is empty ", () => {
    assertFalse(areEqual([1], []));
  });

  it("should be true if arrays are same", () => {
    assert(areEqual([1], [1]));
  });

  it("should be false if arrays lengths notEqual", () => {
    assertFalse(areEqual([1, 2, 3], [1, 2]));
  });
});
