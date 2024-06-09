console.log("1st Line");
function rickAsyncfunction2() {
    console.log("Inside async function");
    let p = new Promise(function(resolve) {
        console.log("Promise is defined");
        setTimeout(resolve, 2000);
        console.log("Doesn't wait for the promise to get resolved rather goes on to the this line and logs this")
    });
    console.log("Coming out of the promise");
    return p;
}
console.log("2nd line");
const value = rickAsyncfunction2();
console.log(value);
// value.then(onDone);
// function onDone() {
//     console.log("Hi, there");
//     console.log("Promise resolved");
// }
value.then(function() {
    console.log("Hi,there");
    console.log("Promise reolved");
})
