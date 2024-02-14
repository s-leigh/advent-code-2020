declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    product(): number
  }
}

Array.prototype.product = function () { return this.reduce((a, b) => a * b, 1) }

export const splitInputIntoLines = (input: string) => input.split("\n")

export const parseInputAsNumbers = (input: string): number[] => splitInputIntoLines(input).map(x => parseInt(x))

