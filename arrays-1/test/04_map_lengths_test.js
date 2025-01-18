import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { mapLengths } from "../src/04_map_lengths.js";

describe("mapLengths ", () => {
  it("should return empty of array is empty", () => {
    assertEquals(mapLengths([]), []);
  });

  it("should return lengths of elements in array", () => {
    assertEquals(mapLengths([""]), [0]);
    assertEquals(mapLengths(["length"]), [6]);
    assertEquals(mapLengths(["length", "of", "elements"]), [6, 2, 8]);
  });
});
