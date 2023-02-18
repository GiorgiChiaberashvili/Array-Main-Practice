# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer.Assume`arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: _Fill this in_

// It adds an element to the end of the array in constant time regardless of the size of the array.
// The function simply adds an element to the end of the array without creating any additional data structures that depend on the size of the array.



[push on MDN][push]


## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: _Fill this in_

// It removes the last element of the array in constant time regardless of the size of the array.
// Because it simply removes an element from the end of the array without creating any additional data structures that depend on the size of the array.
// The memory used by the function is constant, regardless of the size of the array.

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

// Where n is the length of the array.This is because the function removes the first element of the array and shifts all remaining elements one index to the left.
// This requires iterating over the entire array and updating the index of each element, which takes linear time.

// because the function modifies the original array by shifting all remaining elements one index to the left.
// This means that the memory used by the function is proportional to the length of the array.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

// Because it inserts a new element at the beginning of the array and shifts all existing elements one index to the right.
// This requires creating a new array with one additional element and copying all existing elements to their new positions, which takes up additional memory proportional to the length of the array.
// Therefore, the space complexity of arr.unshift() is linear in the length of the array.
// Because it involves shifting all existing elements one index to the right, which requires iterating over the entire array and updating the index of each element.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

// Will be O(n), where n is the length of the array. This is because shifting all elements after the splice position to the left or right requires iterating over the entire array and updating the index of each element.

// In general, if the number of elements being added or removed is proportional to the length of the array, then the time and space complexity of arr.splice() will be O(n).

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

// Where n is the length of the array. This is because the function iterates over each element of the array, checking if it matches the target value, until either a match is found or the end of the array is reached.

// The space complexity of arr.indexOf() is O(1), because the function does not create any new data structures or use additional memory beyond the input array and a few constant-size variables.

[indexOf on MDN][indexOf]

## `arr.map()`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

// Where n is the length of the array. This is because the function applies a callback function to each element of the array, generating a new array with the same length as the input array.

// The space complexity of arr.map() is also O(n), because it creates a new array with the same length as the input array to store the output of the callback function.

// Therefore, the space required is proportional to the length of the input array.

[map on MDN][map]

## `arr.filter()`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_

// O(n), where n is the length of the array. This is because the function applies a callback function to each element of the array, checking if it satisfies a certain condition, and generating a new array with a subset of the original elements.

// The space complexity of arr.filter() is also O(n), because it creates a new array with a subset of the original elements.

// In the worst case, all elements in the input array may pass the filtering condition and the output array will be the same length as the input array. Therefore, the space required is proportional to the length of the input array.

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

// is O(n), where n is the length of the array. This is because the function applies a callback function to each element of the array, using the result of the previous calculation to generate a new result in each iteration.

// The space complexity of arr.reduce() is O(1), because it does not create any new data structures and only uses a few constant-size variables to store the intermediate results of the calculations.

// Therefore, the space required is constant and does not depend on the length of the input array.

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(n)
Space complexity: O(1)
Justification: _Fill this in_

// is O(n), where n is the length of the array. This is because the function iterates over the first half of the array and swaps each element with its corresponding element in the second half of the array.

// The space complexity of arr.reverse() is O(1), because it modifies the input array in place and does not create any new data structures.

// Therefore, the space required is constant and does not depend on the length of the input array.

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(n)
Space complexity: O(n)
Justification: _Fill this in_


// Is O(n), where n is the length of the array. This is because the spread operator creates a new array with the same elements as the input array, which requires iterating over each element of the input array.

// The space complexity of [...arr] is also O(n), because it creates a new array with the same length as the input array, and copies all of the elements from the input array to the new array. 

// Therefore, the space required is proportional to the length of the input array.