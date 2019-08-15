/**
 * Description: Given an array of integers, find the first missing positive integer in linear time
 * and constant space. In other words, find the lowest positive integer that does not exist in the
 * array. The array can contain duplicates and negative numbers as well. 
 * 
 * Examples:
 *  1: For the input [3, 4, -1, 1], return 2. 
 *  2: For the input [1, 2, 0], return 3
 * 
 * Note: You can modify the input array in place.
 */

function CreateFalseArray(length) {
    var arr = [];
    for (var i=0; i<arr.length; i++) {
        arr.push(false);
    }

    return arr;
}

function FlagValsNotMissing(arr, notMissingFlagArray) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 0 && arr[i] < arr.length + 1) {
            notMissingFlagArray[arr[i]-1] = true;
        }
    }
}

function FindFirstMissingPositiveInt(arr) {
    var i = 0;
    while (arr[i] === true) {
        i++;
    }

    return i+1;
}

 function SolveProblem(arr) {
     var notMissingFlagArray = CreateFalseArray(arr.lenght);
     FlagValsNotMissing(arr, notMissingFlagArray);
     return FindFirstMissingPositiveInt(notMissingFlagArray);
 }
 