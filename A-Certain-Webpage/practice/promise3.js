function rickAsyncfunction() {
    console.log("Got into the function");
    let p = new Promise(function(reslove) {
        console.log("Enters the promise");
        reslove("Hi there");
        console.log("Doesn't wait for the promise to get resolved rather goes on to the this line and logs this");
    });
    console.log("Got out of the promise");
    return p;
}
console.log("1st line of execution");
const value = rickAsyncfunction();
console.log(value);
value.then(function(data) {
    console.log(data);
    console.log("Promise gets resolved");
})