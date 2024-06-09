
type GreetArg = number | string

function greet (id : GreetArg) {
    console.log(`ID : ${id}`)
}

greet(1)
greet("Rick")