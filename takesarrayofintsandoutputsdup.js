var testArr = [1,2,6,4,8,9,6];
function betterFindDup(arr) {
    for (var i=0; i<arr.length; i++){
        var currentIndex = i;
        var firstIndex = arr.indexOf(arr[i]);
        if(currentIndex !== firstIndex) {
            return arr[i];
        }
    }
}

var testResult = betterFindDup(testArr);
console.log(testResult);