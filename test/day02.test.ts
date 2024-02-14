import { describe, test } from "node:test"
import assert from "node:assert"
import { day02Part01, day02Part02 } from "../src/day02"
import fs from "fs"

const SAMPLE_INPUT = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`

const input = fs.readFileSync("./input/day02Input").toString()

describe("Day 02", () => {
  test("Day 02 part 01 sample input", () => {
    const result = day02Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 2)
  })

  test("Day 02 part 01", () => {
    const result = day02Part01(input)
    assert.strictEqual(result, 445)
  })

  test("Day 02 part 02 sample input", () => {
    const result = day02Part02(SAMPLE_INPUT)
    assert.strictEqual(result, 1)
  })

  test("Day 02 part 02", () => {
    const result = day02Part02(input)
    assert.strictEqual(result, 491)
  })
})
