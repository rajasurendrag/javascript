// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 121;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let  originalNumber = a;
let reversedNumber = 0;
let currentDigit = 0;

for (let palindromeCandidate =a; palindromeCandidate > 0 ; palindromeCandidate = palindromeCandidate / 10) {
    currentDigit = palindromeCandidate % 10;
    reversedNumber = reversedNumber * 10 + currentDigit;
    palindromeCandidate = palindromeCandidate - currentDigit;
}

let isPalindrome = (originalNumber === reversedNumber);
console.log(isPalindrome);