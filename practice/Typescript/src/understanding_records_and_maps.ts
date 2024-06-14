interface User4 {
    name : string,
    age : number
} 

type Users = Record<string, User4>

const users: Users = {
    "reas@12": {
        name : "Rick",
        age : 21
    }, 
    "ersdsc@s232" : {
        name : "Soumya",
        age : 23
    }
}

console.log(users);