//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var personName:string = "Asif";
var message:string = "hi how are you? I have been waiting for you";
console.log(message)

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personsName:string = "Muhammad Faiq";
//lower case
var lowercaseName: string = personsName.toLowerCase();
//upper case
var uppercaseName: string = personsName.toUpperCase();
//title case
function titleCase(name:string):string{
    return name.replace(/\w\S*/g,(txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
}
const titleCaseNmae: string = titleCase(personsName);
console.log("titlecase:",titleCaseNmae)
console.log("lowercase:",lowercaseName)
console.log("uppercase:",uppercaseName)

//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
var famousquote:string = "Albert Einstein once said, “A person who never made a mistake never tried anything neww.";
console.log(famousquote)


//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famousPerson:string = "Shakespear once said";
var quoteFamous:any = "All the world's a stage, and all the men and women merely players.";
var message:string = famousPerson + quoteFamous;
console.log(message)
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var personName:string = "\t    Muhammad Faiq \n";
console.log("Name with white space",personName)
var strippedName:string = personName.trim()
console.log("stripped Name",strippedName)
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//addition
var additionNumber:number = 6 + 2;
console.log("addition resulr is",additionNumber )
//subtraction
var subtractionNumber:number = 16 - 8;
console.log("subtraction result is",subtractionNumber)
//multiplication
let multiplicationNumber:number = 4*2;
console.log("multiplication result is",multiplicationNumber)
//division
let divisionNumber:number = 16/2;
console.log("division result is",divisionNumber)
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favouriteNumber:number = 8;
let massage:string = `My favourite number is ${favouriteNumber}`;
console.log(massage)
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// // Stripping Names Program
// Author: Shazia
// Date: September 7, 2023

// Store the person's name with whitespace characters
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let friendsNames:string[]=[`Faiza`, `Nida`,`Bushra`,`Kashifa`,`shamaila`,`Tayyaba`];
console.log(friendsNames[3])

console.log(friendsNames[0])
console.log(friendsNames[4])
console.log(friendsNames[1])
console.log(friendsNames[2])
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name
let friendNames:string[]=[`Faiza`, `Nida`,`Bushra`,`Kashifa`,`shamaila`,`Tayyaba`];
for(let index = 0;index < friendNames.length;index++){
    let name = friendNames[index];
    console.log(`Hello, ${name}! Have a great day!`);
}
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favouriteTransport:string[]=["Kia Sportage","Tesla Car","Honda City","Ymaha Scooter"];
 favouriteTransport.forEach((vehicle)=> {
console.log(`i would like to own a ${vehicle}.`)
 })

 /*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
 let dinnerList:string[]= ["Shahbaz","Adila","Eshal","Elayza"];
 dinnerList.forEach((guests)=>{
console.log(`hello ${guests} I cordially invite you for dinner tonight`)
 }
 )
 //Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 let invites:string[]= ["Shahbaz","Adila","Eshal","Elayza"];
 let guestCantMake:string = "Adila";
 console.log(`${guestCantMake} can't come to the dinner`)
 //replace guest
 let newGuest:string = "Rabia";
 let indexofguestCantMake = invites.indexOf(guestCantMake)
 //console.log(indexofguestCantMake)
if(indexofguestCantMake !==-1){
  invites[indexofguestCantMake]= newGuest
}
console.log(invites[1])
//print second invitation
invites.forEach((guest:string)=>{
  console.log(`Respected ${guest},you are cordially invited tonight.`)
}
)

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
for(let guest of invites){
  console.log(`hello ${guest} we found a bigger dinner table.`)
}

//add new guest at the start
let aguest:string = "Amna"
invites.unshift(aguest)
console.log(invites)
//add new guest to the middle
let newGuest1:string= "Fatima";
invites.splice(2,0,newGuest1)
console.log(invites)
//add new guest at the end
let newGuestEnd:string = "Meerab";
invites.push(newGuestEnd)
console.log(invites)
//final invitation message
for(let i of invites){
  console.log(`Hello ${i} I cordially invite you for dinner tonight.`)
}
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let invites1:string[]= ["Amna","Shahbaz","Fatima","Rabia","Eshal","Elayza","Meerab"];
console.log("I can invite two people")
//remove guest from list
while(invites1.length> 2){
  let removeGuest=invites1.pop()
  console.log(`sorry ${removeGuest},I can't invite you to dinner.`)
}
for(let i of invites1){
  console.log(`Dear ${i} You are still invited to dinner.`)
}
//remove remaining guest list
//invites1.pop()
//invites1.pop()
//console.log(` empty list ${invites1}`)
//18.Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

///• Print your array in its original order.


//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//1.places to visit
var placesToVisit:string[]=["Switzerland","Austria","Neither Land","Norway","Pakistan"]
//2.print it in original order
console.log(placesToVisit)
//3.print in alphabetical orde
console.log("\nAlphabetical Order:")
console.log([...placesToVisit].sort());
//4.show array in original order
console.log("\n original order")
console.log(placesToVisit)
//5.print in reverse alphabetical order
console.log("\n reverse alphabet")
console.log([...placesToVisit].sort().reverse());
//6.show in orignal array
console.log(placesToVisit)
//7.reverse the order of list
console.log([...placesToVisit].reverse())
//8. again reverse
console.log("\n again reverse means original")
console.log(placesToVisit)
//9 change to alphabetical order
console.log("\n change to alphabetical order")
placesToVisit.sort()
console.log(placesToVisit)
//10. reverse alphabetical
console.log("\n change to reverse alphabetical order")
placesToVisit.sort().reverse()
console.log(placesToVisit)
//19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`There were finally invited ${invites1.length}`)
//20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains:string[]=["Nanga Perbat","Raka Poshi","Mount Evereast","Tiger Peak"]
for(let i of mountains)
{
  console.log(i)
}
//21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var person:any={
  firstName:"Muhammad",
  lastName:"Asif",
  age:40,
  profession:"Business Man"

}
//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before  
var myArray: number[] = [1, 2, 3, 4, 5];
var invalidIndex:number = 6;
console.log(`elements of index ${invalidIndex}`,myArray[invalidIndex]);
//valid index
var validIndex:number= 2;
if(validIndex>=0 && validIndex < myArray.length){
let element = myArray[validIndex];
console.log(`Element at index ${validIndex}: ${element}`)
}
else{
  console.log("Invalid index",invalidIndex)
}
/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let num1 = 5;
let num2 = 10;
let str1 = 'hello';
let str2 = 'world';
let bool1 = true;
let bool2 = false;
// Test 1
console.log("Is num1 equal to num2? I predict False.");
console.log(num1 == num2); // False
// Test 2
console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 != num2); // True
// Test 3
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2); // True
// Test 4
console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2); // False
// Test 5
console.log("Is str1 equal to str2? I predict False.");
console.log(str1 == str2); // False
// Test 6
console.log("Is str1 not equal to str2? I predict True.");
console.log(str1 != str2); // True
// Test 7
console.log("Is str1 type equal to st2?I predict False.");
console.log(str1===str2) // true
// Test 8
console.log("Is bool1 OR bool2 true? I predict True.");
console.log(bool1 || bool2); // True
// Test 9
console.log("Is bool1 AND bool2 true? I predict False.");
console.log(bool1 && bool2); // False
// Test 10
console.log("Is num1 less than or equal to 5 AND str1 is 'hello'? I predict True.");
console.log(num1 <= 5 && str1 === 'hello'); // True
/*24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
// Tests for equality and inequality with strings
let string1 = "apple";
let string2 = "orange";

// Test 11
console.log("Is string1 equal to string2? I predict False.");
console.log(string1 == string2); // False

// Test 12
console.log("Is string1 not equal to string2? I predict True.");
console.log(string1 != string2); // True

// Tests using the lowercase function
let mixedCaseString = "HelloWorld";

// Test 13
console.log("Is mixedCaseString all lowercase? I predict False.");
console.log(mixedCaseString.toLowerCase() === mixedCaseString); // False

// Numerical tests involving equality and inequality
let number1 = 10;
let number2 = 5;

// Test 14
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2); // True

// Test 15
console.log("Is number1 less than number2? I predict False.");
console.log(number1 < number2); // False

// Test 16
console.log("Is number1 greater than or equal to number2? I predict True.");
console.log(number1 >= number2); // True

// Test 17
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2); // False

// Tests using "and" and "or" operators
let bool3 = true;
let bool4 = false;

// Test 18
console.log("Is bool3 AND bool4 true? I predict False.");
console.log(bool3 && bool4); // False
// Test 19
console.log("Is bool3 OR bool4 true? I predict True.");
console.log(bool3 || bool4); // True
// Test whether an item is in an array
let fruitsName = ["apple", "banana", "cherry", "date"];
// Test 20
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruitsName.includes("banana")); // True
// Test whether an item is not in an array
// Test 21
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruitsName.includes("grape")); // true
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
25• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)*/
// Passing Version
let alien_color_pass = 'green';
if (alien_color_pass === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}
// Failing Version
let alien_color_fail = 'red';
if (alien_color_fail === 'green') {
console.log("Congratulations! You just earned 5 points.");
}
/*26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
let alien_color:string="green";
if(alien_color==="green"){
  console.log("Congratulations! You just earned 5 points for shooting the green alien.")
}
else{
  console.log("Congratulations! You just earned 10 points.")
}
//2nd condition
let alien_color2:string="red";
if (alien_color2 === 'green') {
  console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
  console.log("Congratulations! You just earned 10 points for shooting a non-green alien.");
}
/*27Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.• If the alien is green, print a message that the player earned 5 points.• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
let alienColor:string="green"
if(alienColor==="green"){
  console.log("congradulations! you have earned 5 points");
  }
else if(alienColor==="yellow"){
  console.log("congradulations! you have earned 10 points")
}
else if(alienColor==="red"){
  console.log("congradulations! you have earned 15 points")
}
else{
  console.log("color is unknown")
}
//version 1st
console.log("in first version alien color is green")
if(alienColor==="green"){
  console.log("congradulations! you have earned 5 points");
  }
  else if(alienColor==="yellow"){
    console.log("congradulations! you have earned 10 points")
  }
  else if(alienColor==="red"){
    console.log("congradulations! you have earned 15 points")
  }
  else{
    console.log("color is unknown")
  }
    //2nd version
    var alienColor3:string="yellow";
    console.log("in second version alien color is yellow")
if(alienColor3==="green"){
  console.log("congradulations! you have earned 5 points");
  }
  else if(alienColor3==="yellow"){
    console.log("congradulations! you have earned 10 points")
  }
  else if(alienColor3==="red"){
    console.log("congradulations! you have earned 15 points")
  }
  else{
    console.log("color is unknown")
  }
  //3rd version
  var alienColor4:string="red";
  console.log("in 3rd version alien color is red")
  if(alienColor==="green"){
    console.log("congradulations! you have earned 5 points");
    }
    else if(alienColor==="yellow"){
      console.log("congradulations! you have earned 10 points")
    }
    else if(alienColor==="red"){
      console.log("congradulations! you have earned 15 points")
    }
    else{
      console.log("color is unknown")
    }
    //28 question
    let personAge:number=70;
    if(personAge<2){
console.log("the person is child")
    }
else if(personAge<4){
  console.log("the person is a toddler.")
}
else if(personAge<13){
  console.log(" the person is a kid.")
}
else if(personAge<20){
  console.log("the person is a teenager.")
}
else if(personAge<65){
  console.log("that the person is an adult.")
}
else{
  console.log("the person is an elder.")
}
//question no 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.•Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
var favorite_fruits = ["banana", "strawberry", "apple"];
if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("peach")) {
  console.log("You really like peachs!");
}
if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}
  /*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
var usernames: string[] = ["admin", "meerab", "areeka", "rahima", "sundas"];
for (var username of usernames) {
  if (username === "admin"){
    console.log("Hello admin, would you like to see a status report?");
  }else{
    console.log("Hello" ,username, "thank you for logging in again.");
  }
}
/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let emptyUserNames:string[]=[];
var usernames: string[] = ["admin", "meerab", "areeka", "rahima", "sundas"];
let sayGreetings=(usernames:string[]): any=>{
  if (usernames.length === 0) {
    console.log('We need to find some users!');
}
else {
  console.log(`Hello ${username}, thank you for logging in again.`);
}}
for(let username of usernames){
    if (username.toLowerCase() === 'admin') {
    console.log('Hello admin, would you like to see a status report?');
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);

}}
sayGreetings(usernames)
// Remove all usernames from the array
usernames.length = 0;
// Call the function again after removing usernames
sayGreetings(usernames);
//32.question
var current_users:string[]=["Asif","Faiq","Fazeel","Meerab","Shazia"];
var new_users:string[]=["rohaan","shahan","asif","shazia","faiq","meerab"];
function checkUserNames(current_users:string[],new_users:string[]):void{
  let lowerCaseUsers=current_users.map(user=>user.toLowerCase());
  for(let newUser of new_users){
    let lowerCaseUsers=newUser.toLowerCase();
    if(lowerCaseUsers.includes(lowerCaseUsers)){
      console.log(`username ${newUser} is already taken please enter a new username`);
     } else {`username ${newUser} is available`}
    }

  }
  checkUserNames(current_users,new_users);
//33 question
var numberS:number[]=[1,2,3,4,5,6,7,8,9];
for(var number of numberS){
let ordinal:string;
if(number ===1){
  ordinal="st";
  }
else if(number ===2){
  ordinal="nd"
}
else if(number ===3){
ordinal="rd";
}
else{
  ordinal="th";
}
  console.log(`${number}${ordinal}`);
}
//34 question
let favoritePizzas: string[] = ['Pepperoni', 'fajita', 'tikka'];

console.log("My favorite pizzas:");
for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");
//35 question
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];
console.log("list of animals")
for(let animal of animals){
  console.log(animal);
}
//part 2
console.log("statement of each animal");
for (let animal of animals) {
  if (animal === 'Dog') {
    console.log("A dog would make a great pet.");
  }
   else if (animal === 'Cat') {
    console.log("A cat is an independent and low-maintenance pet.");
  }
   else if (animal === 'Rabbit') {
    console.log("A rabbit can be a cute and gentle pet.");
  } else {
    console.log("These are great animals to have as pets.");
  }
}

console.log("Any of these animals would make a great pet!");
//36 question
function makeShirt(size: string, message: string): void {
  console.log(`Size: ${size}`);
  console.log(`Message: ${message}`);
}
makeShirt("small", "I lile my shirt!");
//37 question
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size:string="large",massage:string="I love typescript"){
console.log("Size",size,"Massage",massage)
}
make_shirt()
make_shirt("medium")
make_shirt("small","I love my shirt")
//38
function describe_city(city: string, country: string = "Unknown") {
  console.log(`${city} is in ${country}.`);
}
describe_city("Karachi", "Pakistan")
describe_city("Lahore", "Pakistan")
describe_city("Faisalabad");
//39
function city_country(city:string,country:string):void{
  console.log(city,country)
}
city_country("Lahore","Pakistan")
city_country("Islamabad","Pakistan")
city_country("Mumbai","India")
//40
function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
  const album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}
var album1 = make_album("Atif Aslam", "Adat");
var album2 = make_album("Asim Azhar", "Habibi", 1); 
var album3 = make_album("Ali Zafar", "Ghoom");
console.log(album1);
console.log(album2);
console.log(album3);
//41

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}
const magicianNames: string[] = ["zayan", "subhan", "arzan", "rohan"];
show_magicians(magicianNames)
//42

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = [];
  for (const magician of magicians) {
    const greatMagician = " the Great "  +  magician;
    greatMagicians.push (greatMagician);
  }
  return greatMagicians;
}
function show_magicians1(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}
const magicianNames1: string[] = ["zayan", "subhan", "arzan", "rohan"];
const greatMagicians = make_great(magicianNames);
show_magicians(greatMagicians);
//43
const originalMagicians: string[] = ["zayan", "subhan", "arzan", "rohan"];
// Modify the copy to make them "the Great" magicians
const greatMagicians1 = make_great(originalMagicians);

// Call the function to show the original magician names
console.log("Original Magicians:");
show_magicians(magicianNames);

// Call the function to show the updated magician names
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
//44
function makeSandwich(...items: string[]){
  console.log("You ordered a sandwich with the following items:");
  for (const item of items) {
    console.log(`- ${item}`);
  }
  console.log("Enjoy your sandwich!");
}
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese", "Pickles");
makeSandwich("Peanut Butter", "Jelly");
//45
function Cars(company: string = "corola", model: number = 2023, ...properties: any[]) {
  let car_object: any = {
      Company: company,
      Model: model,
  };

  
  for (let i = 0; i < properties.length; i += 2) {
      let name: string = properties[i];
      let value: any = properties[i + 1];
      car_object[name] = value;
  }

  console.log(car_object);
}


Cars("vitz", 2020, "Color", "black", "Price", 2500000, "Engine", "1800cc");
Cars("colola", 2023, "Color", "white");
Cars("tesla", 2024, "Color", "Silver");

