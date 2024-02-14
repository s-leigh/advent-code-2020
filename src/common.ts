declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    max(): number
    product(): number
    sum(): number
  }
}

Array.prototype.max = function () { return this.reduce((a, b) => b < a ? a : b) }
Array.prototype.product = function () { return this.reduce((a, b) => a * b, 1) }
Array.prototype.sum = function () { return this.reduce((a, b) => a + b) }

export const splitInputIntoLines = (input: string) => input.split("\n")

export const parseInputAsNumbers = (input: string): number[] => splitInputIntoLines(input).map(x => parseInt(x))

