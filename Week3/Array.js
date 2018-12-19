
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push('turtle');

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, 'meerkat');

console.log("My favorite Animals are:")

console.log(favoriteAnimals);

console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1)

console.log(favoriteAnimals);

let index = favoriteAnimals.findIndex(favoriteAnimals => favoriteAnimals === "meerkat");

console.log("The item you are looking for is at index: " + index); 

console.log(favoriteAnimals[index]); 

 3
let age = 20;
let accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed);

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2 = { foo: "ba" };

console.log(o2);
