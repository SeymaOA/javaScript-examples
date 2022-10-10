let name = "  Andrew Mead "


// Lenght property
console.log(name.length) 

// Convert to upper case
console.log(name.toUpperCase())

//Convert to lower case

console.log(name.toLowerCase())

//inculudes method
let password = "abc123098"


console.log(password.includes("abc"))


// Trim 
console.log(name.trim())

//Challange 
// isValidPassword
//length is more then 8 - and it doesn't contain the word password

let isValidPassword = function(password){
return password.length >= 8 && !password.includes("password")
}
    

console.log(isValidPassword("asdfp"))
console.log(isValidPassword("abc123!@"))
console.log(isValidPassword("asdfppassword"))


