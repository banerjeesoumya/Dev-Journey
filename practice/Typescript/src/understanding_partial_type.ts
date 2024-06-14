interface User2 {
    id : number, 
    name : string,
    age : number,
    email : string
    password : string
}

type UpdateProperties2 = Pick<User2, 'name' | 'age' | 'email'>

type PartialUpdateProperties =Partial<UpdateProperties2>

function updateDetails2 (update : UpdateProperties2) {
    // some logic here
}