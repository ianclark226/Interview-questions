function find(arr) {
    var s = new Set;

    return arr.find(i => s.has(i) || !s.add(i));
}

console.log(find ([2,3,5,3,6,8,3]));