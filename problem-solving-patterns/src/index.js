// How do you improve?
// 1. Devise a plan for problem solving (previous approach section)
// 2. Master common problem solving patterns (this section!)

// some patterns....
// 1. frequency counter
// 2. multiple pointers
// 3. sliding window
// 4. divide & conquer
// 5. dynamic programming
// 6. greedy algorithms
// 7. backtracking
// + many more!

// =======================
// [1] FREQUENCY COUNTERS
// =======================
// - uses objects or sets to collect values / frequencies of values
// - this can often avoid the need for nested loops or O(n^2) operations with strings / arrays
// - usually O(n)

// ----------------------------------------------------------------------------------------------------------
// challenge 1 --- write a function called same, which accepts 2 arrays. The function should return true if 
// every value in the array has it's corresponding value squared in the second array. The frequency of 
// values must be the same.
// ----------------------------------------------------------------------------------------------------------
// test cases:
/*
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false - must be same frequency
*/

// naive solution = O(n^2)
const sameMeh = (arr1, arr2) => {
    if (arr1.length !== arr2.length){
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

// refactored solution = O(n)
const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
        // interesting syntax using || as 'default operator'....
        // https://stackoverflow.com/questions/3804304/please-explain-var-myvalue-myinput-value-0-to-me
        // https://stackoverflow.com/questions/2100758/javascript-or-variable-assignment-explanation
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}
// test cases
console.log('Frequency counters: challenge 1')
console.log(same([1,2,3,2,5], [9,1,4,4,11]))
console.log(same([1,2,3,2], [9,1,4,4]))

// ----------------------------------------------------------------------------------------------------------
// challenge 2 --- given two strings, write a function to determine if the second string is an anagram of 
// the first. An anagram is word, phrase or name formed by rearranging the letters of another.
// ----------------------------------------------------------------------------------------------------------
// my solution (3 for loops)
const validAnagramMeh = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1  
    }
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false
        }
    }
    return true
}

// tutor's solution (2 for loops)
const validAnagram = (first, second) => {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
// test cases
console.log('Frequency counters: challenge 2')
console.log(validAnagram('','')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('awesome', 'awsom')) // false

// ======================
// [2] MULTIPLE POINTERS
// ======================
// - creating pointers or values that correspond to an index or position & move towards the beginning, end or middle based on a certain condition
// - more loosely defined than frequency counters
// - VERY efficient for solving problems with minimal space complexity

// ----------------------------------------------------------------------------------------------------------
// challenge 1 --- write a function called sumZero which accepts a sorted array of integers. The function 
// should find the first pair where the sum is 0. Return an array that includes both values that sum to 0 or
// undefined if a pair does not exist.
// ----------------------------------------------------------------------------------------------------------
// naive solution = time complexity O(n^2) & space complexity O(1)
const sumZeroMeh = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// refactored solution = time complexity O(n) & space complexity O(1)
const sumZero = (arr) => {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}
// test cases
console.log('Multiple pointers: challenge 1')
console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3, 3]
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) // undefined

// ----------------------------------------------------------------------------------------------------------
// challenge 2 --- write a function called countUniqueValues which accepts a sorted array, and counts the 
// unique values in an array. There can be negative numbers in the array, but it will always be sorted.
// ----------------------------------------------------------------------------------------------------------
// solution = time complexity O(n) & space complexity O(n)
const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0
    let i = 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

// test cases
console.log('Multiple pointers: challenge 2')
console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
