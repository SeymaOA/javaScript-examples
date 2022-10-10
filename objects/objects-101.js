let myBook = {
    title: "1984", 
    author: "George Orwel", 
    pageCount: "326"

}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm"

console.log(`${myBook.title} by ${myBook.author}`)


//Challange area
// name, age, location

//Andrew is 27 and lives in Philadelphia


let myFamily = {
    name: "Josh Aguilar",
    age: 33,
    location: "Michigan"
}
console.log(`${myFamily.name} is ${myFamily.age} and lives in ${myFamily.location}.`)


myFamily.name = "Sila Ozcan",

myFamily.age = 17,
myFamily.location = "Turkiye"
console.log(`${myFamily.name} is ${myFamily.age} and lives in ${myFamily.location}.`)

myFamily.age = myFamily.age + 1

console.log(`${myFamily.name} is ${myFamily.age} and lives in ${myFamily.location}.`)

