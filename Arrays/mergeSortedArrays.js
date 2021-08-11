//[3,4,7,31] [1,3,4,4,30,400] --> [1,3,4,4,4,7,30,31,400]

const mergeSortedArrays = (arr1, arr2) => {
  if (!arr1 && !arr2) return 'Wrong input';
  if (!arr1) return arr2;
  if (!arr2) return arr1;

  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Item || arr2Item) {
    if (arr2Item === undefined || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
};
