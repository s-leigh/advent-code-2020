import { describe, test } from "node:test"
import assert from "node:assert"
import { day05Part01, day05Part02 } from "../src/day05"
import fs from "fs"

const SAMPLE_INPUT_1 = "FBFBBFFRLR"

const SAMPLE_INPUT_2 = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`

const input = fs.readFileSync("./input/day05Input").toString()

describe("Day 05", () => {
  test("Day 05 part 01 sample input 1", () => {
    const result = day05Part01(SAMPLE_INPUT_1)
    assert.strictEqual(result, 357)
  })

  test("Day 05 part 01 sample input 2", () => {
    const result = day05Part01(SAMPLE_INPUT_2)
    assert.strictEqual(result, 820)
  })

  test("Day 05 part 01", () => {
    const result = day05Part01(input)
    assert.strictEqual(result, 994)
  })

  test("Day 05 part 02", () => {
    const result = day05Part02(input)
    assert.strictEqual(result, 741)
  })
})
