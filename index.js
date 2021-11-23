// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    console.log("Name:", name)
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    console.log("Name:", name)
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
//NOTE: need RETURN when creating new array
function appendCat(name) {
   return  [...cats, name]
}

function prependCat(name) {
    return  [name, ...cats]
 }

 function removeLastCat(name) {
  return cats.slice(0, cats.length-1);
 }

 function removeFirstCat(name) {
    return cats.slice(1);
   }