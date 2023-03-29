// Implementation of Non-Comparison Sort (Counting Sort).
const prompt = require("prompt-sync")();

function countingSort(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    let count = new Array(max + 1).fill(0);
  
    for (let i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }
  
    for (let i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }
  
    let output = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      output[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
    }
  
    return output;
  }
  
  let arr = prompt("Enter the array (comma-separated)").split(",").map(Number);
  let sortedArr = countingSort(arr);
  console.log(sortedArr);