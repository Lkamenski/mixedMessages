//fortune teller app


function randomNum(maxNum){
    return Math.floor(Math.random()*(maxNum))
}

function returnProphecy(){
    return `${subjects[randomNum(subjects.length)]} will ${verbs[randomNum(verbs.length)]} ${objects[randomNum(objects.length)]}`
}


let subjects=["You", "He", "Your friend","Your father", "Your mother", "Your mentor", "The president", "The best friend of your sister", "Your former teacher", "Your neighbor", "Your sister's cat", "The first lady",
    "Your favorite movie star", "Arnold Schwarzenegger"]
let verbs=["kill", "eat", "hide", "drink", "see", "hear", "betray", "hate", "love",  "drive" ]
let objects=[]
objects=["You", "Him", "Your friend","Your father", "Your mother", "Your mentor", "The president", "The best friend of your sister", "Your former teacher", "Your neighbor", "a beer", "a sausage", "your bear", "your pet",
    "the neighbor's cat", ""].map((word)=>word.toLowerCase())

console.log(returnProphecy())

