// 1. Write a console.log statement saying "Hello World!" for each language that you know.

let  helloWorld = "Hello, World!",  // English
     helloSpain = "Hola, Mundo!",  // Spanish
     helloItalian = "Ciao, Mondo!";  // Italian

     console.log(helloWorld, helloSpain, helloItalian);

// 2 use  \  to solve the problem
// console.log('I\'m awesome');

// 3. Declare a variable x and initialize it with an integer


let x;

console.log("The value of my variable x will be : " ); 
console.log("The value of my variable x will be: " + x); // undefined

   x = 27;

console.log("The value of my variable x will be: " + x);


// 4. Declare a variable y and assign a string to it.

let  y = "Yaseir Alkhwalda";

console.log("My Name is: " + y);

     y = "Syria";

console.log("My Lovely Country is: " + y);


// 5. How do you round the number 7.25, to the nearest integer?

let  z = 7.25;

console.log(z);

let  a = 7.25;

console.log(Math.floor(a));

var bigNumber = Math.max(a, z);

console.log(bigNumber);



// 6. Arrays

 let  myAnimals = ["cats", "dogs", "horses"]

 console.log("My favorite Animals are: " + myAnimals);

 myAnimals.push("baby pig");

 console.log("My favorite Animals are: " + myAnimals);


// 7. More strings

 let  myString = "this is a test";

 //console.log(myString);

 console.log(myString.length);


// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.

 let myName = "Yaseir Alkhwalda",
   
    myAge = 27,    

    myHobbies = ["swim", "jump", "gaming"],

    myEmails = {youtube: "YSR-KH", gmail: "yaseir"};

    console.log("My name: " + myName);

    console.log("My Age: " + myAge);

    console.log("My Hobbies: " + myHobbies);

    console.log("My E.Mails: " + myEmails.youtube + " " + myEmails.gmail);

    console.log(typeof myName, typeof myAge, typeof myHobbies, typeof myEmails);

    if (myName === myAge) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the same type"); 
    }

    if (myHobbies === myEmails) {
        console.log("SAME TYPE");
    } else {
        console.log("Not the same type"); 
    }


// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?

let  i = 7;

console.log(i = i % 3);



// 10

let  myInfo = ["Yaseir Alkhwalda", 27]

console.log(myInfo);

console.log(6/0 === 10/0);


