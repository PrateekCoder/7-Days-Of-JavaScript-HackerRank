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
