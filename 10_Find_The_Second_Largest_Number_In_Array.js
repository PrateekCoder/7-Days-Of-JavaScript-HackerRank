/*
You are given NN numbers. Store them in an array and find the second largest number.

Input Format

The first line contains NN, the size of array AA.
The second line contains NN space separated elements of array AA.

Output Format

Output the value of the second largest number in array AA.

Sample Input:

5
2 3 6 6 5
Sample Output:

5
*/

function processData(myArray) {
    var array = myArray;
    var max = Math.max(array[0], array[1]);
    var secondMax = Math.min(array[0], array[1]);
    for (var i = 2; i < array.length; i++){
    if (array[i] > max){
        secondMax = max;
        max = array[i];
    } else if (array[i] < max && array[i] > secondMax){
        secondMax = array[i];
    }
}
console.log(secondMax);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
