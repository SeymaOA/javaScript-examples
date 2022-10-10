let temp = 55

// logical and operator - True if both sides true. False otherwise
// logical or operator - true if at least one side true. False otherwise
if (temp >=60 && temp <=90) {
console.log("It is pretty nice outside")
}else if (temp <= 0 || temp >= 120) {
    console.log("Do not go outside")
}else {
    console.log("Eh. Do what you want")
}


// challage area

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both vegan? Only offer up vegan dishes.


// at Least one guest is vegan? make sure to pffer up some vegan options
//else, offer up anything on the menu.


if (isGuestOneVegan && isGuestTwoVegan) {
console.log("Only offer up vegan dishes")
}else if (isGuestOneVegan || isGuestTwoVegan) {
console.log("Make sure to offer up some vegan dishes")
}else {
    console.log("Offer up anthing on the menu.")
}


