const array = [1, 5];
const findAvarage = array.reduce((acc,item) => acc += item, 0)/array.length
console.log(findAvarage);
