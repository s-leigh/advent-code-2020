import { parseInputAsNumbers } from "./common"


export const day01Part01 = (input: string): number => {
  const numbers = parseInputAsNumbers(input)
  const nums: [number, number] = [-1, -1]
  let i = 0
  loop: for (const x of numbers) {
    for (const y of numbers.slice(i+1)) {
      if (x + y === 2020) {
        nums[0] = x
        nums[1] = y
        break loop
      }
    }
    i++
  }
  return nums.product()
}

export const day01Part02 = (input: string): number => {
  const numbers = parseInputAsNumbers(input)
  const nums: [number, number, number] = [-1, -1, -1]
  let i = 0

  loop: for (const x of numbers) {
    for (const y of numbers.slice(i+1)) {
      for (const z of numbers.slice(i+2)) {
        if (x + y + z === 2020) {
          nums[0] = x
          nums[1] = y
          nums[2] = z
          break loop
        }
      }
    }
    i++
  }
  return nums.product()
}
