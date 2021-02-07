//what is the output?

var num = 4;
function outer() {
    var num = 2
    function inner () {
        num++;
        var nub = 3;
        console.log(num)
    }
    inner();
}
outer();