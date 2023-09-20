/*let stringVariable = "text"
let numberVariable = 15
let booleanVariable = true

function myFunction(param1, param2) {
    return param1 + param2
}

console.log(stringVariable, numberVariable, booleanVariable) */

/*let array = ["alma", 12, false, undefined, null]

console.log(array) */

/*let stringArray = ["Imola Ács", "Pali Herrer", "Nagy Zsombor"] 

console.log(stringArray[0]) */

/*let myObj = {
    key1: "value1",
    key2: "value2",
    key4: 15,
    key5: 600,
    key6: true,
    key7: ["Imola Ács", "Pali Herrer", "Nagy Zsombor"]
}

console.log(myObj.key7[2]) */


/*let myFacebook ={
    name: "Márta Richárd",
    age: 28,
    location: "Budapest",
    friends: ["Gipsz Jakab", "John Doe", "Példa Péter"]
    favoriteMovies:[
        {
            title: "Harry Potter"
            year: 2001,
            characters: [ "Harry Potter", "Ronald Weasley", "Hedvig"]
        },
        {
            title: "Ananász Expressz"
            year: 2012,
            characters: ["Ez", "az", "amaz"]
        },
        {
            title: "Üvegtigris"
            year: 2000,
            characters: ["Csoki", "Lali", "Gaben"]
        },
    ],
};

console.log(myFacebook.favoriteMovies[0].characters[1]) */  //HáziFeladat: Tömb gyártása, objektum, kulcsok, értékek kikeresése a végén. Objektum amiben tömb van, Tömb amiben objektum van, Tömb a tömbben //


function negativeOrPositive(number) {
    if (number < 0) {
        return "negative"
    } else if  (number > 0) {
        return "positive"
    } else {
        return "zero"
    }

}

function logger(text) {
    console.log(text)
}

/*logger(negativeOrPositive(3)) */

function decideIfBeerIsGood(beer) {
    if(beer.price < 340 && beer.abv > 4.7) {
        return beer.name + ": jó sör mert olcsó és üt"
    } else if (beer.price < 340) {
        return beer.name + ": jó sör mert olcsó"
    } else if ( beer.abv > 4.7 ) {
        return beer.name + ":jó sör mert üt"
    } else {
        return beer.name + ": nem jó"
    }
        
    }

let dreher = {name: "Dreher", price: 349, abv: 5}
let soproni= {name: "soproni", price: 329, abv: 4.5}
let borsodi= {name: "borsodi", price: 339, abv: 4.8}
let pecsi= {name: "pécsi", price: 379, abv: 4.2}

logger(decideIfBeerIsGood(dreher))
logger(decideIfBeerIsGood(soproni))
logger(decideIfBeerIsGood(borsodi))
logger(decideIfBeerIsGood(pecsi))

