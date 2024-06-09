const input = [1, 2, 3, 4, 5]
// const ans = [];
// for (let i = 0; i < input.length; i ++) {
//     if (input[i] % 2 == 0) {
//         ans.push(input[i])
//     }
// }
// console.log(ans);
// function filterLogic(n) {
//     if (n % 2 == 0) {
//         return true;
//     }
//     else {
//         return false
//     }
// }
// const ans = input.filter(filterLogic)
// console.log(ans);

// more cleaner way to do this
const ans = input.filter (function (n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(ans);