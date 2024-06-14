interface User2 {
    id : number, 
    name : string,
    age : number,
    email : string
    password : string
}

type UpdateProperties = Pick<User2, 'name' | 'age' | 'email'>

function updateDetails (update : UpdateProperties) {
    // some logic here
}