// Multiple arguments
let add = function(a, b, c){
return a + b + c
}

let result = add(10, 1,5 )
console.log(result)


// Default arguments 

let getScoreText = function(name = "Anonymus ", score = 0 ){
   return `Name: ${name} - Score: ${score}`

    // return "Name: " + name + "-Score: " + score
}

let scoreText= getScoreText (undefined, 99)
    console.log(scoreText)


    // Challange area
    // total for bill, tipPercent *20/100

    let getTip = function(total, tipPercent = .2) {
        let percent = tipPercent * 100
        let tip =  total * tipPercent
        return  `A ${tipPercent * 100}% tip on $${total} would be $${total*tipPercent}`

    }
    let tip = getTip(60)

console.log(tip)

