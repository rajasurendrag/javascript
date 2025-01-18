import { assertEquals } from "jsr:@std/assert";
import { extractDigits } from "../src/03_extract_digits.js";

Deno.test("should be [singleDigit] for every singleDigit", () => {
  assertEquals(extractDigits(0), [0]);
});

Deno.test(
  "should be [singleDigit] for every single digit negative number",
  () => {
    assertEquals(extractDigits(-1), [1]);
  }
);

Deno.test("should be [tensDigit, onesDigit] for twoDigit number", () => {
  assertEquals(extractDigits(10), [1, 0]);
});

Deno.test(
  "should be [tensDigit, onesDigit] for twoDigit negative number",
  () => {
    assertEquals(extractDigits(-10), [1, 0]);
  }
);

Deno.test("should be [hundreds, tens, ones] for threeDigit number", () => {
  assertEquals(extractDigits(402), [4, 0, 2]);
});

Deno.test(
  "should be [hundreds, tens, ones] for threeDigit negative number",
  () => {
    assertEquals(extractDigits(402), [4, 0, 2]);
  }
);
