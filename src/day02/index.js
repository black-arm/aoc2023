import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const checkCubesIntoSet = (set, regex, limit) => {
  let cubesString = set.match(regex);

  if(cubesString){
    let numberCubes = new Number(cubesString[0].split(" ")[0]);
    if(numberCubes > limit){
      return false;
    }
  }

  return true
}

const areCubesValid = (setsCubes) => {
  for(let set of setsCubes){
    
    if(!checkCubesIntoSet(set, /\d+ blue/, 14)){
      return false;
    }

    if(!checkCubesIntoSet(set, /\d+ red/, 12)){
      return false;
    }
    if(!checkCubesIntoSet(set, /\d+ green/, 13)){
      return false;
    }
  }

  return true;
}

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');

  let result = 0;
  for(let line of lines){
    let gameId = new Number(line.match(/Game (\d+)/)[1]);
    let setsCubes = line.match(/(?!Game) (?!\d+:).*/)[0].split(';');
    let isValid = areCubesValid(setsCubes);

    if(isValid){
      result += gameId;
    }

  }

  return result;
};


const findMaxValue = (cubes) => {

  let result = 0;

  for(let cube of cubes){
    const value =  new Number(cube.split(' ')[0]);
    result = Math.max(result, value)
  }

  return result;
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const lines = input.split('\n');

  let result = 0;

  for(let line of lines){
    let redCubes = line.match(/(\d+ red)/g);
    let maxRedCube = findMaxValue(redCubes);
    let blueCubes = line.match(/(\d+ blue)/g);
    let maxBlueCube = findMaxValue(blueCubes);
    let greenCubes = line.match(/(\d+ green)/g);
    let maxGreenCube = findMaxValue(greenCubes);

    let power = maxRedCube * maxGreenCube * maxBlueCube;

    result += power;
  }

  return result; 
};

const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

run({
  part1: {
    tests: [
       {
         input: input,
         expected: "8",
       },
    ],
    solution: part1,
  },
  part2: {
    tests: [
       {
         input: input,
         expected: 2286,
       },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
