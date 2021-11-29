// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

function appendCat(name){
return [...cats, name]     //NOTE: need RETURN when creating new array
}

function prependCat(name){
    return [name, ...cats]
    }

//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
    return cats.slice(0, cats.length-1);
}

//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat(name) {
    return cats.slice(1);
}