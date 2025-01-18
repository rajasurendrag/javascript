# JS Mul

## Problem statement

### Part 1

You are given a corrupted memory (input). The memory contains instructions in the form `mul(X,Y)`, where X and Y are integers (1-3 digits). A valid mul instruction performs multiplication, e.g., `mul(44,46)` produces `44 * 46 = 2024`.

The memory also includes invalid characters and malformed instructions that should be ignored. A valid mul instruction satisfies the following conditions:

1. It follows the format `mul(X,Y)` with no extra spaces or characters.
2. Both `X` and `Y` are integers without invalid symbols or delimiters.

For example, from the input:
`xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`,
the valid mul instructions are:

- `mul(2,4)` → Result: `2 * 4 = 8`
- `mul(5,5)` → Result: `5 * 5 = 25`
- `mul(11,8)`→ Result: `11 * 8 = 88`
- `mul(8,5)` → Result: `8 * 5 = 40`

The task is to identify all valid mul instructions in the input, compute their results, and find the sum of these results. For the above input, the sum would be `8 + 25 + 88 + 40 = 161`.

What is the total sum of the results of all valid mul instructions in the memory?

### Part 2

In addition to identifying valid `mul(X,Y)` instructions in the corrupted memory, you now need to handle two additional instructions that control whether `mul` instructions are `enabled` or `disabled`:

1. `do()`: Enables all future mul instructions.
2. `don't()`: Disables all future mul instructions.
   At the start of the memory, mul instructions are enabled by default. Only the most recent `do()` or `don't()` instruction determines whether subsequent mul instructions are active.

For example, consider the input:
`xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

In this input:

- `mul(2,4)` is enabled → Result: `2 * 4 = 8`.
- `mul(5,5)` and `mul(11,8)` are disabled due to the preceding `don't()` instruction.
- `mul(8,5)` is enabled again because of the `do()` instruction before it → Result: `8 * 5 = 40`.
  Thus, the valid mul results are `8 + 40 = 48`.

Task
Identify and sum the results of all valid and enabled `mul(X,Y)` instructions in the memory. Take into account the most recent `do()` or `don't()` instruction to determine which mul instructions are active.

What is the total sum of the results of the enabled mul instructions?

## Sample Large Inputs

Below are some large input to check with your program. Copy the input from the below file and cross check your answer.

| File              | Part 1 Answer | Part 2 Answer |
| ----------------- | ------------- | ------------- |
| ./data/input1.txt | 169021493     | 111762583     |
