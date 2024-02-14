#!/bin/bash

day=$1
if [ -z ${day} ]; then echo "Must provide day" && exit 1; fi

touch input/day${day}Input

fileInit=$'

export const day'${day}'Part01 = (input: string): number => {

}

export const day'${day}'Part02 = (input: string): number => {
  return -1
}
'

testInit=$'import { describe, test } from "node:test"
import assert from "node:assert"
import { day'${day}'Part01, day'${day}'Part02 } from "../src/day'${day}'"
import fs from "fs"

const SAMPLE_INPUT = ``

const input = fs.readFileSync("./input/day'${day}'Input").toString()

describe("Day '"${day}"\"', () => {
  test("Day '${day}' part 01 sample input", () => {
    
  })

  test("Day '${day}' part 01", () => {

  })

//  test("Day '${day}' part 02 sample input", () => {
//    
//  })
//
//  test("Day '${day}' part 02", () => {
//    
//  })
})
'

echo "$fileInit" > src/day${day}.ts
echo "$testInit" > test/day${day}.test.ts
