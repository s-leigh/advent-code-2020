import { splitInputIntoLines } from "./common"

const getRowOrColumn = (rowOrColumn: string[], upperBound: number): number => {
  let lowerBound = 0
  rowOrColumn.forEach(part => {
    const halfDifference = Math.ceil((upperBound - lowerBound) / 2)
    if (part === "L" || part === "F") upperBound -= halfDifference; else lowerBound += halfDifference
  })
  if (lowerBound !== upperBound) throw new Error("Bounds not equal after iteration!")
  return lowerBound
}

const getRow = (seat: string): number => {
  const rowPart = seat.slice(0, 7).split("")
  return getRowOrColumn(rowPart, 127)
}

const getColumn = (seat: string): number => {
  const columnPart = seat.slice(7).split("")
  return getRowOrColumn(columnPart, 7)
}

const seatId = (row: number, column: number) => (row * 8) + column

export const day05Part01 = (input: string): number => {
  const seats = splitInputIntoLines(input)
  return seats.map(s => seatId(getRow(s), getColumn(s))).max()
}

export const day05Part02 = (input: string): number => {
  const seats = splitInputIntoLines(input)
  const incompleteRows: { [row: number]: number[] } = {}
  seats.forEach(s => {
    const row = getRow(s)
    if (incompleteRows[row] && incompleteRows[row].length === 7) { 
      delete incompleteRows[row] 
    } else {
      const column = getColumn(s)
      incompleteRows[row] === undefined ? incompleteRows[row] = [column] : incompleteRows[row].push(column)
    }
  })
  const incompleteRowEntries = Object.entries(incompleteRows)
  incompleteRowEntries.sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
  const [myRow, columns] = incompleteRowEntries[Math.floor(incompleteRowEntries.length / 2)]
  const seatNumber = (1 + 2 + 3 + 4 + 5 + 6 + 7) - columns.sum()
  return seatId(parseInt(myRow), seatNumber)
}
