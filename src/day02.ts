import { splitInputIntoLines } from "./common"

type Requirements = {
  criterion1: number
  criterion2: number
  char: string
  password: string
}

const parseReqs = (line: string): Requirements => {
  const splitByDash = line.split("-")
  const splitByColon = line.split(":")
  const criterion1 = parseInt(splitByDash[0])
  const criterion2 = parseInt(splitByDash[1].split(" ")[0])
  const char = splitByColon[0][splitByColon[0].length - 1]
  const password = splitByColon[1].slice(1)
  return { criterion1, criterion2, char, password }
}

export const day02Part01 = (input: string): number => {
  const isValid = (reqs: Requirements): boolean => {
    const re = new RegExp(reqs.char, "g")
    const numInstances = reqs.password.match(re)?.length
    return !!numInstances && numInstances >= reqs.criterion1 && numInstances <= reqs.criterion2
  }

  return splitInputIntoLines(input).map(parseReqs).filter(isValid).length
}

export const day02Part02 = (input: string): number => {
  const isValid = ({ criterion1, criterion2, char, password }: Requirements) =>
    (password[criterion1 - 1] === char && password[criterion2 - 1] !== char)
    || (password[criterion1 - 1] !== char && password[criterion2 - 1] === char)

  return splitInputIntoLines(input).map(parseReqs).filter(isValid).length
}
