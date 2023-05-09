//Merge two sorted arrays where one has enough space at the end for the other (A6)
const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
const smallArray = [0, 2, 4, 6, 8];
const largeArraySize = largeArray.length;

function mergeArrays(arr1, arr2) {
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
  //console.log(arr1);
  //check if the 2 arrays are sorted
  //check for the array to have space
  //merge them
  //sort the new array
  return sortedArray;
}

//mergeArrays(largeArray, smallArray);
//console.log(largeArray); // Expecting: [0,1,2,3,4,5,6,7,8,9]
//console.log(largeArraySize === largeArray.length);
module.exports = mergeArrays;
