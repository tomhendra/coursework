// What is an algorithm? -- a process or set of steps to accomplish a task

// How to solve a problem in 5 steps:
// 1. understand the problem
// 2. explore concrete examples
// 3. break it down 
// 4. solve/simplify
// 5. look back & refactor

// ===========================
// [1] UNDERSTAND THE PROBLEM 
// ===========================
// 1. can I restate the problem in my own words?
// 2. what are the inputs that go into the problem?
// 3. what are the outputs that should come from the solution?
// 4. can the outputs be determined from the inputs? do I have enough information to solve the problem?
// 5. how should I label the important pieces of data that are a part of the problem?

// ==============================
// [2] EXPLORE CONCRETE EXAMPLES
// ==============================
// - coming up with examples can help you understand the problem better
// - examples provide sanity checks that the eventual solution works how it should
// - user stories! 
// - unit tests!
// 1. start with simple examples
// 2. progress to more complex examples
// 3. explore examples with empty inputs
// 4. explore examples with invalid inputs

// example --- write a function which takes in a string and returns counts of each character in the string

// 1. start with simple examples
charCount('aaaa') // questions: all alphabet in output object?
/* {
    a: 4
} */
charCount('Hello hi') // questions: uppercase letters same as lowercase? space handling?
/* {
    h: 2,
    e: 1,
    i: 1,
    l: 2,
    o: 1
} */

// 2. progress to more complex examples
charCount('your PIN number is 1234') // questions: numbers in output? special characters?
/*
{
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 1,
    2: 1,
    u: 1,
    y: 1
}
*/

// 3. explore examples with empty inputs
charCount('') // what's the output?

// 4. explore examples with invalid inputs
charCount('null') // what's the output?
charCount([1,2,3,'h', {a: false}]) // what's the output?

// ==================
// [3] BREAK IT DOWN
// ==================
// - explicitly write down the steps you need to take (can even bounce steps off interviewer; you might get a hint!)
// forces you to think about code before you write it, & helps to catch any lingering conceptual issues or misunderstandings before diving in & having to worry about detail

// example --- write a function which takes in a string and returns counts of each character in the string

/* 
const charCount = (str) => {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the character count.
}
*/

/*
const charCount = (str) => {
    // make object to return at end
    // loop over string for each character
        // if the char is a number/letter AND a key in object, add 1 to count
        // if the char is umber/letter AND not in object, add it and set value to 1
        // if char is something else (space, dollar sign etc.) don't do anything
    // return object at end
}
*/

// ===================
// [4] SOLVE/SIMPLIFY
// ===================
// 