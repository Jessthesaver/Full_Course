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

  let arr1Index = arr1.length - 1;
  let arr2Index = arr2.length - 1;

  let diffIndex = arr1Index - arr2Index - 1;
  let index = arr1Index;

  while (index >= 0) {
    arr1[diffIndex] > arr2[arr2Index]
      ? (([arr1[index], arr1[diffIndex]] = [arr1[diffIndex], arr1[index]]),
        diffIndex--)
      : (([arr1[index], arr2[arr2Index]] = [arr2[arr2Index], arr1[index]]),
        arr2Index--);

    if (arr2Index < 0) break;

    index--;
  }

  const sortedArray = arr1.filter((element) => element !== undefined);

  return sortedArray;
}

//mergeArrays(largeArray, smallArray);
//console.log(largeArray); // Expecting: [0,1,2,3,4,5,6,7,8,9]
//console.log(largeArraySize === largeArray.length);
module.exports = mergeArrays;
