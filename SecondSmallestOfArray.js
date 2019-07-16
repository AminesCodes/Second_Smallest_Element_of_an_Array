// Find the second smallest number in an Array of Ints

const secondSmallestOfArray = (arr) => {
  let smallest = arr[0];
  let secondSmall = Infinity;

  for (let i = 1; i < arr.length; i++){
    if (arr[i] < smallest) {
      secondSmall = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmall) {
          secondSmall = arr[i];
      }
  }
  return secondSmall;
}

let numArray = [40, -5, 2, -30, 1, -4,];

let secondSmallest = secondSmallestOfArray(numArray);
console.log('The seonde smallest of the array ', numArray, ' is ', secondSmallest);
