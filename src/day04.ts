

const REQUIRED_FIELDS = /byr|iyr|eyr|hgt|hcl|ecl|pid/g
const NUM_REQUIRED_FIELDS = 7

type RawPassport = {
  byr: string, iyr: string, eyr: string, hgt: string, hcl: string, ecl: string, pid: string
}

const minMaxInclusive = (val: string, min: number, max: number): boolean => {
  const parsed = parseInt(val)
  if (isNaN(parsed)) return false
  return parsed >= min && parsed <= max
}

const validHgt = (hgt: string): boolean => {
  const unit = hgt.slice(hgt.length - 2)
  const val = hgt.slice(0, hgt.length - 2)
  if (!["cm", "in"].includes(unit)) return false
  return unit === "cm" ? minMaxInclusive(val, 150, 193) : minMaxInclusive(val, 59, 76)
}

const validHcl = (hcl: string) => hcl.match(/^#[0-9a-f]{6}$/g)?.length === 1

const validEcl = (ecl: string) => ecl.match(/^amb|blu|brn|gry|grn|hzl|oth$/)?.length === 1

const validPid = (pid: string) => pid.match(/^[0-9]{9}$/g)?.length === 1

const isValid = ({byr, iyr, eyr, hgt, hcl, ecl, pid}: RawPassport): boolean => 
  minMaxInclusive(byr, 1920, 2002)
  && minMaxInclusive(iyr, 2010, 2020)
  && minMaxInclusive(eyr, 2020, 2030)
  && validHgt(hgt)
  && validHcl(hcl)
  && validEcl(ecl)
  && validPid(pid)

export const day04Part01 = (input: string): number => {
  const passports = input.split("\n\n")
  return passports.filter(p => p.match(REQUIRED_FIELDS)?.length === NUM_REQUIRED_FIELDS).length
}

export const day04Part02 = (input: string): number => {
  const passports = input.split("\n\n")
  const allRequiredFieldsPresent = passports.filter(p => p.match(REQUIRED_FIELDS)?.length === NUM_REQUIRED_FIELDS)
  const parsedPassports = allRequiredFieldsPresent.map(p => {
    const split = p.split(/ |\n/g).map(field => field.split(":"))
    return split.reduce((acc, curr) => ({...acc, [curr[0]]: curr[1]}), {} as RawPassport)
  })
  return parsedPassports.filter(isValid).length
}

