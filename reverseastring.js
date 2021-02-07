function reverseString(str) {

    //create empty string that will host new created string
    var newString = '';

    //for loop that starts at (str.length - 1). As long as i is greater or equals 0, the loop will go on.

    for(var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    return newString;
}

reverseString('hello');