import { describe, test } from "node:test"
import assert from "node:assert"
import { day01Part01, day01Part02 } from "../src/day01"
import fs from "fs"

const SAMPLE_INPUT = `1721
979
366
299
675
1456`

const input = fs.readFileSync("./input/day01Input").toString()

describe("Day 01", () => {
  test("Day 01 part 01 sample input", () => {
    const result = day01Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 514579)
  })

  test("Day 01 part 01", () => {
    const result = day01Part01(input)
    assert.strictEqual(result, 866436)
  })

  test("Day 01 part 02 sample input", () => {
    const result = day01Part02(SAMPLE_INPUT)
    assert.strictEqual(result, 241861950)
  })

  test("Day 01 part 02", () => {
    const result = day01Part02(input)
    assert.strictEqual(result, 276650720)
  })
})
