import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  allData,
} from "../data/input1.js";
import { part1, part2 } from "../src/mul.js";
import { assertEquals } from "jsr:@std/assert";

// Below are sample test cases. Do not limit yourself to these test cases.
// Write more test cases to make sure your implementation works as expected.

Deno.test("part1: should be 0 for empty memory", () => {
  const input = "";
  assertEquals(part1(input), 0);
});

Deno.test("part1: should be 0 for not matching memory", () => {
  const input = "mul";
  assertEquals(part1(input), 0);
});

Deno.test("part1: should be 0 if any of the nums are 0 of mul", () => {
  const input = "mul(0,3)";
  assertEquals(part1(input), 0);
});

Deno.test(
  "part1: should be product of num1, num2 for concted mul(num1, num2) with any other string",
  () => {
    const input = "gymmul(1,2)";
    assertEquals(part1(input), 2);
  }
);

Deno.test(
  "part1: should be 0 if num2 is not provided in a mul expression",
  () => {
    const input = "mul(23)";
    assertEquals(part1(input), 0);
  }
);

Deno.test(
  "part1: should be 0 if num2 is not provided in a mul expression",
  () => {
    const input = "mul(23,)";
    assertEquals(part1(input), 0);
  }
);

Deno.test(
  "part1: should be sop of nums if the given memory contains valid mul expression",
  () => {
    const input = "mul(2,3)";
    assertEquals(part1(input), 6);
  }
);

Deno.test(
  "part1: should be sop of nums if the given memory contains valid mul expression",
  () => {
    const input = "xmul(2,4)";
    assertEquals(part1(input), 8);
  }
);

Deno.test(
  "part1: should be sop of nums if the given memory contains valid mul expression",
  () => {
    const input =
      "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";
    assertEquals(part1(input), 161);
  }
);

Deno.test("part1: should be sop of nums in the given data1", () => {
  assertEquals(part1(data1), 27499548);
});

Deno.test("part1: should be sop of nums in the given data2", () => {
  assertEquals(part1(data2), 25863131);
});

Deno.test("part1: should be sop of nums in the given data3", () => {
  assertEquals(part1(data3), 33209716);
});

Deno.test("part1: should be sop of nums in the given data4", () => {
  assertEquals(part1(data4), 31673908);
});

Deno.test("part1: should be sop of nums in the given data5", () => {
  assertEquals(part1(data5), 26286532);
});

Deno.test("part1: should be sop of nums in the given data6", () => {
  assertEquals(part1(data6), 24488658);
});

Deno.test(
  "part1: should be sop of nums in the given all the input1 file",
  () => {
    assertEquals(part1(allData), 169021493);
  }
);

Deno.test("Part2: should be 0 for empty memory", () => {
  const input = "";
  assertEquals(part2(input), 0);
});

Deno.test("Part2: should be 0 for memory without mul", () => {
  const input = "deno";
  assertEquals(part2(input), 0);
});

Deno.test(
  "part2: should be sop of all valid mul expression if there is no don't",
  () => {
    const input =
      "xmul(2,4)&mul[3,7]!_mul(5,5)+mul(32,64](mul(11,8)un?mul(8,5))";
    assertEquals(part2(input), 161);
  }
);

Deno.test(
  "part2: should be sop of all mul expression if there is no don't",
  () => {
    const input =
      "xmul(2,4)&mul[3,7]!_mul(5,5)+mul(32,64](mul(11,8)un?mul(8,5))";
    assertEquals(part2(input), 161);
  }
);

Deno.test(
  "Part2: should be 0 for memory with don't at start and followed by no do()",
  () => {
    const input =
      "don't xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)un?mul(8,5))";
    assertEquals(part2(input), 0);
  }
);

Deno.test("Part2: should be 0 for memory with don't at start", () => {
  const input =
    "don't xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)un?mul(8,5))";
  assertEquals(part2(input), 0);
});

Deno.test("Part2: test", () => {
  const input =
    "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
  assertEquals(part2(input), 48);
});

Deno.test("Part2: should ignore all muls between don't() and do()", () => {
  const input =
    "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
  assertEquals(part2(input), 48);
});

Deno.test("Part2: should be all muls between don't() and do() in data1", () => {
  assertEquals(part2(data1), 10875477);
});

Deno.test("Part2: should be all muls between don't() and do() in data2", () => {
  assertEquals(part2(data2), 16918581);
});

Deno.test("Part2: should be all muls between don't() and do() in data3", () => {
  assertEquals(part2(data3), 22831457);
});

Deno.test("Part2: should be all muls between don't() and do() in data4", () => {
  assertEquals(part2(data4), 25341336);
});

Deno.test(
  "Part2: should be all muls between don't() and do() in all data",
  () => {
    assertEquals(part2(allData), 111762583);
  }
);
