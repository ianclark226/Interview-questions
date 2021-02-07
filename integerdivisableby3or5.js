function fizzbuzz(param) {

    var array = [];

    for( i = 1; i <= param; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            array.pash(i);
        }

        else if(i % 3 ===0) {
            array.push(i);
        }

        else if(i % 5 ===0) {
            array.push(i);
        }
    }

    console.log(array);

    var sum = array.reduce(function(a,b){
        return a + b;
    }, 0);

    console.log(sum);
}