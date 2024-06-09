const input = [1, 2, 3, 4, 5];
// const output = [];
// for (let i = 0; i < input.length; i ++) {
//     output.push(input[i] * 2);
// }
// console.log(output);
// function transform (i) {
//     return i * 2;
// }
// const ans = input.map(transform);
// console.log(ans);
// more clear way to represent the map function 
const ans = input.map(function (i) {
    return i * 3;
});
console.log(ans);
