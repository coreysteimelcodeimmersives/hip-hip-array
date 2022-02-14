/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

// let arrayLength = students.length;
// for (let count = 0; count < arrayLength; count++){
//   console.log(students[count]);
// }


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];

// let arrayLength = grades.length;
// let revGrades = grades.reverse();
// for(let count = 0; count < arrayLength; count++){
//   console.log(revGrades[count]);
// }


// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];

// let arrayLength = positiveNumbers.length;
// for (let count = 0; count < arrayLength; count++){
//   if (positiveNumbers[count] % 2 === 0){
//     console.log(positiveNumbers[count]);
//   }
// }




// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

// let arrayLength = mixedSignNumbers.length;
// for (let count = 0; count < arrayLength; count++){
//   if (mixedSignNumbers[count] % 2 === 0){
//     console.log(mixedSignNumbers[count]);
//   }
// }


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

// let newSymCap = symmetricalCapitals.slice(2,symmetricalCapitals.length-1);
// let newSymCapLength = newSymCap.length;
// for (let count = 0; count < newSymCapLength; count++){
//   console.log(newSymCap[count]);
// }


// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];

// fibonacciNumbers.unshift(0), fibonacciNumbers.push(21, 34);
// let fibNumLength = fibonacciNumbers.length;
// for (let count = 0; count < fibNumLength; count++){
//   console.log(fibonacciNumbers[count]);
// }


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.

// const newArray = [0, 1, 2, 3, 4];
// let newArrayLength = newArray.length;
// for (let count = 0; count < newArrayLength; count++){
//   console.log(newArray[count]);
// }

// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.

// const emptyArray = [];
// emptyArray.unshift(0), emptyArray.push(1,2,3,4);
// let emptyArrayLength = emptyArray.length;
// for (let count = 0; count < emptyArrayLength; count++){
//   console.log(emptyArray[count]);
// }

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.

// for (let count = 3; count < 11; count++){
//   console.log(students[count]);
// }


// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.

// let copyStudents = [];
// for (let count = 3; count < 11; count++){
//   copyStudents.push(students[count]);
// }
// let copyStudentsLength = copyStudents.length;
// for (let count = 0; count < copyStudentsLength; count++){
//   console.log(copyStudents[count]);
// }


// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.

// let sliceStudents = students.slice(3,11);
// let sliceStudentsLength = sliceStudents.length;
// for (count = 0; count < sliceStudentsLength; count++){
//   console.log(sliceStudents[count]);
// }
// //for readability.
// console.log('\n');
// let studentLength = students.length;
// for(count = 0; count < studentLength; count++){
//   console.log(students[count]);
// }

// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

// let spliceDino = dinosaurs.splice(4,3);
// let dinoLength = dinosaurs.length;
// for (let count = 0; count < dinoLength; count++){
//   console.log(dinosaurs[count]);
// }

// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.

// console.log(dinosaurs.join('*'));

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

// dinosaurs.reverse;
// console.log(dinosaurs);

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

let newArray = primaries.concat(secondaries);
let newArrayLength = newArray.length;
for (let count = 0; count < newArrayLength; count++){
  console.log(newArray[count]);
}

let primariesLength = primaries.length;
// for readability
console.log('\n');
for (let count = 0; count < primariesLength; count++){
  console.log(primaries[count]);
}

let secondariesLength = secondaries.length;
console.log('\n');
for (let count = 0; count < secondariesLength; count++){
  console.log(secondaries[count]);
}

