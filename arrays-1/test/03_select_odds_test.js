import { describe, it } from "jsr:@std/testing/bdd";
import { assertEquals } from "jsr:@std/assert";
import { selectOdds } from "../src/03_select_odds.js";

describe("selectOdds ", () => {
  it("should be empty array if array has no odds or array is empty", () => {
    assertEquals(selectOdds([]), []);
    assertEquals(selectOdds([2, 4]), []);
  });

  it("should be  array of odds if array has odds ", () => {
    assertEquals(selectOdds([1]), [1]);
    assertEquals(selectOdds([1, 3]), [1, 3]);
  });
});
