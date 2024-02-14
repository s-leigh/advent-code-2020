import { describe, test } from "node:test"
import assert from "node:assert"
import { day03Part01, day03Part02 } from "../src/day03"
import fs from "fs"

const SAMPLE_INPUT = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`

const input = fs.readFileSync("./input/day03Input").toString()

describe("Day 03", () => {
  test("Day 03 part 01 sample input", () => {
    const result = day03Part01(SAMPLE_INPUT)
    assert.strictEqual(result, 7)
  })

  test("Day 03 part 01", () => {
    const result = day03Part01(input)
    assert.strictEqual(result, 284)
  })

  test("Day 03 part 02 sample input", () => {
    const result = day03Part02(SAMPLE_INPUT)
    assert.strictEqual(result, 336)
  })

  test("Day 03 part 02", () => {
    const result = day03Part02(input)
    assert.strictEqual(result, 3510149120)
  })
})

