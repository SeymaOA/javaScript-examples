// Lexical Scope (Static Scope)
// Global scope (Define outside of all code blocks)
// Local scope (Defined inside a code block)


// In a scope you can access veriables defined in that scope, or in any parent/ancesters
// Global scope (varOne)
    // Local scope (varTwo)
    // Local scope (varFour)
    // Local scope (varThree)

let varOne = "varOne"

if (true) {
    console.log(varOne)
    let varTwo = "varTwo"

    if (true) {
        let varFour = "varFour"
    }

}


if(true) {
    let varThree = "varThree"
}
console.log(varTwo)