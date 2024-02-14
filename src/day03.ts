import { splitInputIntoLines } from "./common"

const treesHit = (lines: string[], right: number, down: number = 1): number => {
  let treesHit = 0
  for (let i = 1; i < lines.length / down; i++) {
    const x = (i * right) % lines[i].length
    const y = i * down
    const square = lines[y][x]
    if (square === "#") treesHit++
  }
  return treesHit
}

export const day03Part01 = (input: string): number => {
  const lines = splitInputIntoLines(input)
  return treesHit(lines, 3)
}

export const day03Part02 = (input: string): number => {
  const lines = splitInputIntoLines(input)
  const cases = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
  return cases.map(([right, down]) => treesHit(lines, right, down)).product()
}
