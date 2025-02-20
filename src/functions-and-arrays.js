// Iteration #1: Find the maximum 
//done

function maxOfTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber>secondNumber){
    return firstNumber;
  } else{
return secondNumber;
  }
}
maxOfTwoNumbers();

// Iteration #2: Find longest word
//done but didn#t pass the test
let wordsToTest = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(wordsToTest) {
  if (!wordsToTest.length) {
    return null;
  }

  if (wordsToTest.length === 1) {
    return wordsToTest[0];
  }

  let largest_Str = [];
  wordsToTest.forEach(function (item) {
    if (item.length === largest_Str.length) {
      largest_Str.push(item);
    } else if (item.length > largest_Str.length) {
      largest_Str = [item];
    }
  });
  return largest_Str;
}

findLongestWord(wordsToTest);


// Iteration #3: Calculate the sum
//done, pass the test only if the function is straight declaired with"numbers"
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === 'number') {
          sum += numbers[i];
      } else if (typeof numbers[i] === 'string') {
          sum += numbers[i].length;
      }
  }
  return sum;
}

sumNumbers(numbers)


// Iteration #3.1 Bonus:
//done, passes almost all tests

  function sum(mixedArr) {
    let total = 0;
    for (let i = 0; i < mixedArr.length; i++) {
        if (typeof mixedArr[i] === 'number') {
            total += mixedArr[i];
          }  else if (typeof mixedArr[i] === 'string') {
            total += mixedArr[i].length;
        } else if (typeof mixedArr[i] === 'boolean') {
            total += mixedArr[i] ? 1 : 0;        
        } else if (Array.isArray(mixedArr[i])) {
            let subArraySum = sum(mixedArr[i]);
            if (typeof subArraySum === 'number') {
                total += subArraySum;
            }
        }  else {
          throw new Error('Unsupported data type ');
      }
    }
    return total;
}
const mixedArr  = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];
let sumOfArray = sum(mixedArr);
console.log(sumOfArray);

  


// Iteration #4: Calculate the average
// Level 1: Array of numbers
//done
const numbersAvg = [1, 2, 4];

function averageNumbers(numbersAvg) {
    if (numbersAvg.length === 0) {
        return null;
    }

    let sum = 0;
    for (let i = 0; i < numbersAvg.length; i++) {
        if (typeof numbersAvg[i] !== 'number') {
            return null;
        }
        sum += numbersAvg[i];
    }

    return sum / numbersAvg.length;
}

let averageOfNumbers = averageNumbers(numbersAvg);
console.log(averageOfNumbers);



// Level 2: Array of strings
//done, but didn't pass the tests

const testWords = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(testWords) {
  if (testWords.length === 0) {
      return null;
  }

  let sum = 0;
  for (let i = 0; i < testWords.length; i++) {
      if (typeof testWords[i] !== 'string') {
          return null;
      }
      sum += testWords[i].length;
  }

  return sum / testWords.length;
}

let wordsLengthInAverage = averageWordLength(testWords);
console.log(wordsLengthInAverage);

// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
//done two ways, the first way passed the tests
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
//first Option
function uniquifyArray(wordsUnique) {
  if (wordsUnique.length === 0) {
    return null;
  }
  
  let uniqueWords = [];
  wordsUnique.forEach((element) => {
    if (!uniqueWords.includes(element)) {
        uniqueWords.push(element);
    }
  });
  return uniqueWords;
}
let uniqueWordsOnly = uniquifyArray(wordsUnique);
console.log(uniqueWordsOnly);
//second Option: using "Set" Object of storing unique velues
/*function uniquifyArray() {
  return [...new Set(testWordsofArray)];
}
let testWordsofArray = ['crab', 'poison', 'contagious', 'simple', 'bring', 'sharp', 'playground', 'poison', 'communion', 'simple', 'bring'];
let isArrayUnique = uniquifyArray(testWordsofArray);
console.log(isArrayUnique);
uniquifyArray(testWordsofArray)*/




// Iteration #6: Find elements
//done

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

let word="sunset";
function doesWordExist(wordsFind, word) {
  if (wordsFind.length === 0) {
    return null;
}
    return wordsFind.indexOf(word) !== -1;
}
let ifTheWordExists = doesWordExist(wordsFind, word);
console.log(ifTheWordExists);



// Iteration #7: Count repetition
//done
const testWord = 'starting';
const wordsCount = ['machine',  'matter',  'subset',  'trouble',  'starting',  'matter',
  'eating',  'matter',  'truth',  'disobedience',  'matter'];

function howManyTimes (wordsCount, testWord) {
  
  let count = 0;
  for (let i = 0; i < wordsCount.length; i++) {
    if (wordsCount[i] === testWord) {
      count++;
    } else if(wordsCount.lenght===0)
      return wordsCount;
  }
  return count;
}

console.log(howManyTimes(wordsCount, testWord));



// Iteration #8: Bonus
/*
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}*/




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
