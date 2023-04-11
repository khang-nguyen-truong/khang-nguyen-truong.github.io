'use strict';

// 1. Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascrip

function max(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log('Max of Two 1, 2: ' + max(1, 2));

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them

function maxOfThree(num1, num2, num3) {
    let max = num1;
    if (num2 >= max) {
        max = num2;
    }
    if (num3 >= max) {
        max = num3;
    }
    return max;
}
console.log('Max of Three 1, 2, 3: ' + maxOfThree(1, 2, 3));

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1)
// and returns true if it is a vowel, false otherwise

function isVowel(c) {
    let vowelList = ['a', 'i', 'u', 'e', 'o'];
    return vowelList.includes(c);
}
console.log('k is vowel: ' + isVowel('k'));
console.log('a is vowel: ' + isVowel('a'));

// 4. Define a function sum() and a function multiply() 
// that sums and multiplies (respectively) all the numbers in an input array of numbers. 
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24
function sum(arr) {
    let sum = 0;
    for (let s of arr) {
        sum += s;
    }
    return sum;
}
console.log('Sum of [1,2,3,4]: ' + sum([1, 2, 3, 4]));

function multiply(arr) {
    let multi = 1;
    for (let s of arr) {
        multi *= s;
    }
    return multi;
}
console.log('Multiply of [1,2,3,4]: ' + multiply([1, 2, 3, 4]));

// 5. Define a function reverse() that computes the reversal of a string.
function reverse(str) {
    let resultStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultStr += str.charAt(i);
    }
    return resultStr;
}
console.log(reverse('Nguyen Khang Truong'));

// 6. Write a function findLongestWord() 
// that takes an array of words and returns the length of the longest one
function findLongestWord(arr) {
    let longest = arr[0].length;
    for (let a of arr) {
        if (a.length >= longest) {
        longest = a.length;
        }
    }
    return longest;
}
console.log("Longest lenght of ['I', 'like', 'Javascript']: " + findLongestWord(['I', 'like', 'Javascript']));

// 7. Write a function filterLongWords() 
// that takes an array of words and an integer i 
// and returns a newarray containing only those words that were longer than i characters
function filterLongWords(arr, i) {
    return arr.filter(function (a) {
        return a.length > i;
    });
}
console.log("Filter long words greater than 5 characters of ['I', 'am', 'a', 'student']: " +
    filterLongWords(['I', 'am', 'a', 'student'], 5)
);

// 8. Write a function named, computeSumOfSquares, 
// that takes as input, an array of numbers 
// and calculates and returns the sum of the squares of each number in the input array.
//Note: Write your Javascript code without using Imperative programming. 
// i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach
function computeSumOfSquares(arr) {
    return arr.reduce((x, y) => x + y * y, 0);
}
console.log("Sum of squares of [1, 2, 3]: " + computeSumOfSquares([1, 2, 3]));

// 9. Write a function named, printOddNumbersOnly, 
// that takes as input, an array of integral numbers 
// and it finds and prints only the numbers which are odd
function printOddNumbersOnly(arr) {
    return arr.filter((a) => a % 2 == 1);
}
console.log('Print only odd number [1, 2, 3, 4, 5]: ' + printOddNumbersOnly([1, 2, 3, 4, 5]));

// 10. Write a function named, computeSumOfSquaresOfEvensOnly,
// that takes as input, an array of integral numbers 
// and calculates and returns the sum of the squares of only the even numbers in the input array.
function computeSumOfSquaresOfEvensOnly(arr) {
    return arr.filter((a) => a % 2 == 0).reduce((x, y) => x + y * y, 0);
}
console.log('Sum of square of evens only [1, 2, 3, 4, 5]: ' +
    computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5])
);

// 11. Using the Array.reduce(...) function, 
// re-implement your functions, sum(...) and multiply(...) (defined in Problem 4 above) 
// without using Imperative programming. 
// i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach
function sumFunctional(arr) {
    return arr.reduce((x, y) => x + y, 0);
}
console.log('Sum of [1, 2, 3] with functional interface: ' + sumFunctional([1, 2, 3]));

function multiplyFunctional(arr) {
    return arr.reduce((x, y) => x * y, 1);
}

console.log('Multiply of [1, 2, 3, 4] with functional interface: ' + multiplyFunctional([1, 2, 3, 4]));

// 12. Implement Javascript code for a functionnamed, findSecondBiggest,
// which takes as input, an arrayof numbers
// and finds and returns the second biggest of the numbers. 
// (Note: Do not use sorting!)
function findSecondBiggest(arr) {
    let biggest = arr[0];
    let secondBiggest = arr[1];
    for (let i of arr) {
        if (biggest < i) {
            secondBiggest = biggest;
            biggest = i;
        } else if (secondBiggest < i && i < biggest) {
            secondBiggest = i;
        }
    }
    return secondBiggest;
}

console.log('Find second biggest of array [1, 3, 2, 4]: ' + findSecondBiggest([1, 3, 2, 4]));

// 13. Write a function named printFibo, 
// that takes as input, a given length, n, and any two starting numbers a and b, 
// and it prints-out the Fibonacci sequence, e.g.(0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...) 
// of the given length, beginning with a and b
function printFibo(length, a, b) {
    if (length == 1) return a;
    let fibo = [];
        fibo.push(a);
        fibo.push(b);
    while (fibo.length < length) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
    }
    return fibo;
}
console.log('printFibo(n=1, a=0, b=1): ' + printFibo(1, 0, 1));
console.log('printFibo(n=2, a=0, b=1): ' + printFibo(2, 0, 1));
console.log('printFibo(n=3, a=0, b=1): ' + printFibo(3, 0, 1));
console.log('printFibo(n=6, a=0, b=1): ' + printFibo(6, 0, 1));
console.log('printFibo(n=10, a=0, b=1): ' + printFibo(10, 0, 1));

// 14. Use Array Methods: filter, map, reduce, etc to implement functions below:
// // 1. Create a function using function declaration named sum with one parameter of Array type,
// // the returned result is the sum of all elements which are greater than 20.
// // 2. Create a function using function expression named getNewArray with one parameter of String Array, 
// // return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’
function sumOfGreater20(arr) {
    return arr.filter((a) => a > 20).reduce((x, y) => x + y, 0);
}
console.log('Sum of Array which element greater than 20 [10, 20, 30, 40]: ' + sumOfGreater20([10, 20, 30, 40]));

function getNewArray(arr) {
    return arr.filter((a) => a.length >= 5 && a.indexOf('a') >= 0);
}
console.log("Get new Array ['nguyen', 'khang', 'truong']: " + getNewArray(['nguyen', 'khang', 'truong']));