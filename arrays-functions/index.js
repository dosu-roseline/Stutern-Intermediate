// Question One
Array methods can be classified as either mutating or non-mutating based on whether they modify the original array or create a new one. Mutating array methods modify the original array while non-mutating methods do not modify the original array, but instead return a new array.

Here are 5 array methods that fall under each of these categories:

Mutating array methods:

* push() - adds one or more elements to the end of an array
* pop() - removes the last element from an array
* shift() - removes the first element from an array
* unshift() - adds one or more elements to the beginning of an array
* splice() - adds or removes elements from an array


Non-mutating array methods:

* concat() - combines two or more arrays and returns a new array
* slice() - returns a portion of an array as a new array
* filter() - creates a new array with all elements that pass a test
* map() - creates a new array with the results of calling a function on every element in the array
* reduce() - applies a function against an accumulator and each element in the array to reduce it to a single value.

// Question Two
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

languages.push('Kotlin');
languages.splice(3, 0, 'Java');
languages.shift();
languages.unshift('Scala', 'Swift');
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

// Question Three
output = ['apple', 'mango', 'orange'];

// Question Four
function max(numbers) {
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

console.log(max([2, 30, -50, 40, 95]));

// Question Five
function valTimesIndex(numbers) {
  return numbers.map((num, index) => num * index);
}
console.log(valTimesIndex([5, 4, 25, 4, 87]));
