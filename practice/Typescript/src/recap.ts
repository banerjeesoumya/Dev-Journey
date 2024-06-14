interface NewUser {
    name : string,
    age : number
}

function sumOfAge(user1 : NewUser, user2 : NewUser) : number{
    return user1.age + user2.age;
}

const age = sumOfAge({name : 'Rick', age : 20}, {name : 'Soumya', age : 21})
console.log(age);