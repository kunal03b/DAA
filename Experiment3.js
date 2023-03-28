// // Implementation of Quick Sorting technique using Divide and Conquer approach
const prompt = require("prompt-sync")();
function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivotIndex = Math.floor(arr.length / 2);
    const pivotValue = arr[pivotIndex];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
  
      else if (arr[i] < pivotValue) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivotValue, ...quickSort(right)];
  }
  
  var array = prompt("Enter array elements separated by commas: ");
  var arr = array.split(",").map(Number);
  const sortedArr = quickSort(arr);
  console.log(sortedArr);