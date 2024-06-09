function rickAsyncfunction3() {
    console.log("Third line of execution")
    let p = new Promise(function(resolve){
        console.log("Got inside the promise");
        setTimeout(function() {
            resolve("Hi there");
        }, 2000);
        console.log("Fourth line of execution")
    });
    console.log("Coming out of the promise");
    return p;
}

// const value = rickAsyncfunction3();;
// console.log(value);
// value.then(function() {
//     console.log("Hi, there");
// })
async function main() {
    console.log("Second line of execution")
    let value = await rickAsyncfunction3();
    console.log("Hi there1");
    console.log(value);
    // value.then(function() {
    //     console.log("Hi there");
    // })
}
console.log("First line of execution");
main();