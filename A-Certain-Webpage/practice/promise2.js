let p = new Promise(function(reslove) {
    reslove("hi there");
})

p.then(function() {
    console.log(p);
})