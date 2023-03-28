// Implementation of Insertion Sorting technique using Incremental approach.
const prompt = require("prompt-sync")();
function insertionSort(arr,n){
    let i, key, j;
    for(i = 0;i < n;i++){
        key = arr[i];
        j = i - 1;

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j = j -1;
        }
        arr[j+1] = key;
    }
}

function printArray(arr,n){
    let i;
    for(i = 0;i < n;i++){
        console.log(arr[i] + " ");
    }
    console.log("<br>")
}

var array = prompt("Enter array elements separated by commas: ");
var arr = array.split(",").map(Number);
let n = arr.length;
insertionSort(arr,n);
printArray(arr,n);