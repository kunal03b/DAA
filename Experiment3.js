// Implementation of Quick Sorting technique using Divide and Conquer approach

function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivotValue = arr[pivotIndex];
    const less = [];
    const greater = [];

    for(let i = 0; i < arr.length; i++){
        if(i === pivotIndex){
            continue;
        }
        else if(i < pivotIndex){
            less.push(arr[i]);
        }
        else{
            greater.push(arr[i]);
        }
    }

    return[...quickSort(less),...quickSort(greater)];
}

const arr = [5, 3, 8, 4, 2, 7, 1, 10];
const sortedArray = quickSort(arr);
console.log(sortedArray);