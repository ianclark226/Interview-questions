function find_FirstNotRepeatedChar(str) {
    var ctr = 0;
    var result = '';
    var array1 = str.split('');

    for(var x = 0; x < array1.length; x++) {

        ctr = 0;
        for(var y = 0; y < array1.length; y++) {

            if(array1[x] === array1[y]) {
                ctr += 1;
            }
        }
        if(ctr < 2) {
            result = array1[x];
            break;
        }

    }

    return result;

}

console.log(find_FirstNotRepeatedChar('aabbccdde'));





