function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNum(1, 100));