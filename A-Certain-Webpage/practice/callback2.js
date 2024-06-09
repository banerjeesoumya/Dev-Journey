//implementing a callback function in asynchronous function
function findSum(n){
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = ans + i;        
    }
    return ans;
}
function findSumTill100(){
    console.log(findSum(100));
}
setTimeout(findSumTill100, 1000); //setTimeout is an asynchronous function, it basically calls the function passed to it as the parameter
//here javascript thread instead of waiting for the setTimeout to complete it's job it goes on rather proceeds further and executes the 
// next lines and again returns back to setTimeout function.
console.log("hello world");
Promise