import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const lines = input.trim().split('\n');
  return lines.reduce((sum, value) => {
    const first = value.match(/^\D*(\d)/)[1];
    const last = value.match(/(\d)\D*$/)[1];
    return sum + Number(first + last);
  }, 0)
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g

  const nums = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9
  }

  const parseDigit = (digit) => {
      return nums[digit] ?? parseInt(digit);
  }
  const lines = input.trim().split('\n');

  return lines.reduce((sum, value) => {

    const matches = [...value.matchAll(regex)];
    let first = parseDigit(matches[0][1]);
    let last = parseDigit(matches[matches.length - 1][1]);

    return sum + parseInt(`${first}${last}`);
  }, 0)
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
