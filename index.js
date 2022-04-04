const displayExercise = (exerciseNumber) => {
    console.log("                                                                                                                                             ");
    console.log(`****************************************************** Exercise - ${exerciseNumber} **************************************************************`);
    console.log("                                                                                                                                             ");
}
/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
displayExercise(1);

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    // create character map
    for (let char of str) {
      if (charMap[char]) {
        // increment the character's value if the character existed in the map
        charMap[char]++;
      } else {
        // Otherwise, the value of the character will be increamented by 1
        charMap[char] = 1;
      }
    }
  
    // find the most commonly used character
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    console.log("Max repeated character in the given string, "+str+" is: "+maxChar);
  }

 maxChar("Anusha");
 maxChar("StiveSchool");

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

displayExercise(2);

function anagrams(str1, str2) {
    const charMap1 = charMap(str1.replace(/[^\w]/g, '').toLowerCase());
    const charMap2 = charMap(str2.replace(/[^\w]/g, '').toLowerCase());
    
    // return false immediately when the length of two char Map is not the same
    if (Object.keys(charMap2).length !== Object.keys(charMap2).length) {
      return false;
    }
  
     // comparison
    for (let char in charMap1) {
      if (charMap1[char] !== charMap2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  // helper function
  function charMap(str) {
    let charMap = {};
    for (let char of str) {
      charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
  }

  console.log(anagrams('rail safety', 'fairy tales'));
  console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
  console.log(anagrams('Hi there', 'Bye there')); 

  /* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

displayExercise(3);

function sorted(word) {
    var chars = word.toLowerCase().split('');
  
    return chars.sort(function(char1, char2) {
      return char1 > char2;
    }).join('')
  }
  
  function anagram(sampleWord, candidates) {
    return candidates.filter(function(currWord) {
      if (sampleWord.toLowerCase() !== currWord.toLowerCase()) {
        return sorted(sampleWord) === sorted(currWord);
      }
    }).sort()
  }


/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

displayExercise(4);

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    
    console.log("The given word is a palindrome: "+ (str === reversed));
  }

isPalindrome("level");
isPalindrome("refer");
isPalindrome("stats");
isPalindrome("tiger");

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

    displayExercise(5);

    function reverseInt(n) {
        const reversed = n
           .toString()
           .split('')
           .reverse()
           .join('');
     console.log("The reversed interger of given number, "+n+" is: "+(parseInt(reversed) * Math.sign(n)));
     }
     reverseInt(21);


/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */


displayExercise(6);

function steps(n, i = 1) {    
    if (i > n) return;
    console.log('#'.repeat(i) + ' '.repeat(n - i));
    steps(n, i + 1);
  }

  steps(4);
steps(6,2);

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

displayExercise(7);

function reverse(str) {
    let reversedArray = str.split('');
    console.log(reversedArray.reverse().join(''))
}
reverse("Anusha");


/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

displayExercise(8);

function chunk(array, size) {
    const chunked_arr = [];
    for (let i = 0; i < array.length; i++) {
      const last = chunked_arr[chunked_arr.length - 1];
      if (!last || last.length === size) {
        chunked_arr.push([array[i]]);
      } else {
        last.push(array[i]);
      }
    }
    console.log(`chunk([${array}],${size}) ---->`,chunked_arr);
}

chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4, 5], 2);

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */


displayExercise(9);

function pyramid(n, row = 0, level = '') {
    if (row === n) return;
    if (level.length === 2 * n - 1) {
      console.log(level);
      return pyramid(n, row + 1);
    }
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
      add = '#';
    } else {
      add = ' ';
    }
    pyramid(n, row, level + add);
  }
  pyramid(5);

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
displayExercise(10);

function matrix(n) {
    const results = [];
  
    for (let i = 0; i < n; i++) {
      results.push([]);
    }
  
    let counter = 1;
  
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
  
    while (startColumn <= endColumn && startRow <= endRow) {
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
    return results;
  }