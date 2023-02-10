let greeting = 'Banana Boat. '; // input value
letters = greeting.toLowerCase().replace(/[^a-zA-Z]+/g, '').replace(/ /g, ""); // remove all characters and all whitespace

let result = {};
let subString = '';

for (let i = 0; i < letters.length; i++){
  for (let j = i + 1 ; j < letters.length; j++){
    subString = letters.slice(i, j); // combination
    if (result[subString] === undefined) result[subString] = 0;
    result[subString] += 1; // increase combination value
  }
}

const resultArr = Object.entries(result); // convert to object to array
resultArr.sort((a, b) => b[1] - a[1]) // sort according to second value
resultArr.map((ele) => console.log(`${ele[1]}:${ele[0]}`)) // output
