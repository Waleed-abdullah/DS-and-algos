const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers2 = [5, 4, 3, 2, 1];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
}

bubbleSort(numbers);
console.log(numbers);

//not bubble sort but works
function notBubbleSort(array) {
  for (let i = 0; i < array.length; i++)
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let holder = array[i];
        array[i] = array[j];
        array[j] = holder;
      }
    }
}
