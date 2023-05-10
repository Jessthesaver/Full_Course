//Merge two sorted arrays where one has enough space at the end for the other (A6)

function mergeArrays(arr1, arr2) {
  arr1.forEach((element) => {
    if (typeof element !== "number") {
      throw new Error("The arrays must be composed of numerical characters");
    }
  });

  arr2.forEach((element) => {
    if (typeof element !== "number") {
      throw new Error("The arrays must be composed of numerical characters");
    }
  });

  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === undefined) {
      if (typeof arr2[index] === undefined) {
        index++;
      }
      arr1[i] = arr2[index];
      index++;
    }

    //sort the array again
    let j = i;
    while (j > 0 && arr1[j - 1] > arr1[j]) {
      [arr1[j], arr1[j - 1]] = [arr1[j - 1], arr1[j]];
      j--;
    }
  }
  const sortedArray = arr1.filter((element) => element !== undefined);

  return sortedArray;
}

//mergeArrays(largeArray, smallArray);
//console.log(largeArray); // Expecting: [0,1,2,3,4,5,6,7,8,9]
//console.log(largeArraySize === largeArray.length);
module.exports = mergeArrays;
