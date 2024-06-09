function delayCall(fn: () => void) {
    setTimeout(fn, 1000);
}

console.log(delayCall(function() {
    console.log("hi there")
}))