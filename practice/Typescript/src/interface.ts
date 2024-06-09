
interface User {
    firstName : string,
    lastName : string,
    age: number,
    email?: string 
}
function isLegal2(user : User): boolean {
    if (user.age > 18){
        return true;
    }
    else {
        return false
    }
}

console.log(isLegal2({
    firstName: "Soumya",
    lastName: "Banerjee",
    age: 21 
}))