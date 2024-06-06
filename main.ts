// Q17
let guest: string[]=["Ali","Humza","Fahad","Talha","Samad"];
console.log(`Due to limited space ,only tow people can invited for diner.`);


let guest: string[]=["Ali","Hamza","Fahad","Talha","Samad"];
while(guest.length > 2) {
    const removedGuest = guest.pop();
    console.log(`sorry,${removedGuest},you are no longer invited to dinner.`);
}

let guest: string[]=["Ali","Hamza"];
guest.forEach((guest) => {
    console.log(`Dear ${guest},you are still invited to dinner`);
});
guest.pop();
guest.pop();
console.log("Final guest list:",guest);

// Q18
let placeToVisit:string[] = ["America","Japan","Pakistan","China","Canada"];
console.log("Orignal order:", placeToVisit);

console.log("Alphabetical order:", [...placeToVisit].sort());

console.log("Orignal order after sorting:", placeToVisit);

console.log("Reverse alphabetical order", [...placeToVisit].sort().reverse());

console.log("Orignal order after reverse sorting:", placeToVisit);

placeToVisit.reverse();

console.log("Reverse order :", placeToVisit);

placeToVisit.reverse();
console.log('Sorted in alphabetical order:', placeToVisit);

 placeToVisit.reverse();
 console.log("Back to orignal  order:", placeToVisit);


 placeToVisit.sort((a, b) => b.localeCompare(a));
 console.log("Sorted in reverse alphabetical order:", placeToVisit);

// Q19
let invitations : string [] = ["Ali","hamza"]
let count_invitations : number = invitations.length
console.log(`${count_invitations} people will come to the dinner.`)

Q20

let languages: string [] = ["English","Urdu","Sindhi","Panjabi","Hindi"]
console.log("List of languages:")
console.log(languages)

//Q21
let  person: {name: string, fname: string , age: number} = {name:"Iqra",fname:"female", age: 22}
console.log(person)

// Q22
const days : string [] = ["sunday","monday", "tuesday","wednesday","thursday","friday","saturday"]
// console.log(days{7})
console.log(days[6])

// Q23
let car ="subaru";

console.log("is car == 'subaru'? predict true")
console.log(car == 'subaru')

console.log("is car != 'honda city'? predict true")
console.log(car !='honda city')

console.log("is car == 'subaru'? predict false")
console.log(car == 'subaru')


console.log("is car == 'Subaru'? predict false")
console.log(car == 'Subaru')

console.log("is car.length == 6? predict true")
console.log(car.length == 6)


console.log("is car.length!== 11? predict true")
console.log(car.length !== 11)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)


console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)


console.log("is 72 >= 83? predict false")
 console.log(72 >= 83)

console.log("is car == 'subaru' && car .length == 6? predict true")
console.log(car == 'subaru' && car.length == 6)

// Q24
let name_1 : string = "Iqra"
let name_2 : string = "Iqra waqas"
let name_3 : string =  " Mrs iqra waqas"

if (name_1 == name_3){
    console.log("names are equal")
}else {
    console.log("names are not equal")
}

if(name_1 != name_2){
    console.log("names are equal")
}

if(name_1 != name_3){
    console.log("names are equal")
}
let age_1 : number =19
let age_2: number =22

if (age_1 == 19) {
    console.log("eligible for vote")
}

 if (age_1 != 22) {
     console.log("eligible for vote in older list")
 }

if (age_1 <= age_2){
    console.log("younger")
}

if (age_2 >= age_1){
    console.log("older")
}

if (age_1 == 19 && age_2 ==22) {
    console.log("person  is eligible for vote")
}

if (age_1 == 19 || age_2 !=22) {
    console.log("person  is eligible note for vote")
}

let country : string [] =["Pakistan","India","China","Japan"]
if (country.includes("Pakistan")) {
    console.log("Pakistan is in country list")
}

 let country : string [] =["Pakistan","India","China","Japan"]
 if (!country.includes("America")) {
     console.log("America is not include in an array")
 }


// // Q25
let alien_colour = "green"
if (alien_colour == "green")
    console.log("you are eran 5 points")

let alien_colour : string ="red"
if (alien_colour == "green")
console.log("no output")

// Q26


let alien_colour = "green"
if (alien_colour == "green"){
  console.log("player just eraned 5 points for shooting the alien")
}else{
    console.log("player just eraned 10 points")
}


let alien_colour = "red"
if (alien_colour == "green"){
  console.log("player just eraned 5 points for shooting the alien")
}else{
    console.log("player just eraned 10 points")
}

// Q27

let alien_colour: string = "red"

if (alien_colour == "green") {
  console.log("player just eraned 5 points")
} else if (ali en_colour == "yellow") {
  console.log("player just eraned 10 points")
} else {
  console.log("player just eraned 15 points")
}

// Q28

let age : number = 88

if (age < 2) {
    console.log("you are a baby") 
  } else if (age < 4){
    console.log("you are a toldder")
  }
 else if (age < 13){
    console.log("you are a kid")
  }
 else if (age < 20 ){
    console.log("you are a teenager")
  }
 else if (age <  65){
    console.log("you are a adult")
  }
 else {
    console.log("you are a older")
  }

// Q29

let favoruite_fruits : string [] = ["Apple","Mango","Grapes","Orange","Peach"]

 if (favoruite_fruits.includes("Apple")) {
    console.log("Apple")
 }

 if (favoruite_fruits.includes("Peach")) {
    console.log("you really like bananas")
 }

 if (favoruite_fruits.includes("Mango")) {
    console.log("Manog")
 }

 if (favoruite_fruits.includes("Orange")) {
    console.log("you really like bananas")
 }

 if (favoruite_fruits.includes("Grapes")) {
    console.log("Grapes")
 }

// Q30
let users : string [] = ["Admin","Eric","Hamza","Ali","Sana"]

for(let user of users) {
    if (user === "Admin") {
        console.log("hello admin, would you like to see a status report")
    } else {
        console.log(`Hello ${user}, thank you for loging in again`)
    }
}

// Q31


 let users : string [] = ["Admin","Eric","Hamza","Ali","Sana"]

 users = []
 
 if (users.length === 0) {
    console.log("We need to find some users!")
 } 

// // Q32

let current_users : string [] = ["admin","Eric","ali","Hamza","Sana"]
let new_users : string [] = ["admin","ali","Dua","Iqra","Saba"]

let current_users_lower : string [] = current_users.map(user => user.toLowerCase())

for  (let new_user of new_users) {
 if (current_users_lower.includes (new_user.toLowerCase())) {
    console.log(`sorry ${new_user}, that name is taken`)
 } else {
    console.log(`yes ${new_user}, is still in avalible in the list`)
 }
}

// // Q33

let numbers : number [] = [1,2,3,4,5,6,7,8,9]

for (let number of numbers) {

    if (number === 1){
        console.log (`${number}st`)

} else if  (number === 2){
    console.log (`${number}nd`)

} else if  (number === 3){
    console.log (`${number}rd`)
} else {
    console.log (`${number}th`)
}
}


// // Q34
let favoruite_pizza : string [] = ["chiken","peperoni","vegitable"]

// for (let pizza of favoruite_pizza) {
//     console.log (pizza)
// }
// console.log ("\n")

for (let pizza of favoruite_pizza) {
    console.log (`I really like ${pizza}pizza!`)
}

console.log ("\n I really love pizaa!")

// // Q35

let animals : string [] = ["cat","cow","dog"]

for (let animal of animals) {
    console.log (animal)
}
console.log ("\n")

for (let animal of animals) {
    console.log(`A ${animal} has a sharp teeth`)
}

console.log ("\n all of these are great pet! but i love cat")

// Q36

function makeShirt(size: string, text: string) :void{
    console.log(`\n you order a ${size} shirt that says ${text}`)
}

makeShirt('large','"i love typescript"')
makeShirt('medium','"i need a big  shirt"')

// // Q37

function makeShirt(size: string = 'large', text: string = 'I love typesscript') :void {
    console.log (`you have order a ${size}, shirt that says ${text}`)
}

makeShirt();
makeShirt('meduim')

makeShirt('small','I need a big shirt to wear')

// Q38
function describe_city (city : string, country : string = 'Pakistan'): void {
    console.log (`${city} is in ${country}`)
}

    describe_city('Karachi')
    describe_city('France','Eruope')
    describe_city('Lahore',' punjab')

// Q39

function cityCountry (city : string, country: string):string {
    return `${city}, ${country}`
}

let c1 = cityCountry('Lahore','Pakistan')
let c2 = cityCountry('Tokyo','Japan')
let c3 =cityCountry('Paris','France')

console.log (c1)
console.log (c2)
console.log (c3)

// // Q40

function makeAlbum (artist: string, title: string): { artist: string; title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
return dictionaries;

    }

let album = makeAlbum("atif", "life")
console.log(album)


 album = makeAlbum("sana", "blue")
console.log(album)


 album = makeAlbum("ashraf", "dark")
console.log(album)

// // // Q41
function show_magicians(magicians: string[]): void {

    for (const magician of magicians){
     console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
    }



const magician: string[] = ["Raza","Salman","Daniyal"] 
show_magicians(magician)
}
// Q42
function make_great (magicians: string[]): void{
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i]     +   '  the great'
  }
}
const magicians2: string[] = ["Raza","Salman","Daniyal"];
make_great(magicians2)
show_magicians(magicians2)

// Q43
function make_great2(magicians: string[]): string [] {
const greatMagicians: string[] = [];
for (let i = 0; i < magicians.length; i++) {
greatMagicians.push(magicians[i] + ' the Great')
}
return greatMagicians;

}

const magicians3: string[] = ["Raza","Salman","Daniyal"];
const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2)


// Q44

function sandwich(...items:string[]): void {
    console.log("sandwich order:")

for (let i =0; i < items.length; i++) {
    console.log (`- ${items[i]}`)
}
}
console.log ("enjoy your sandwich Iqra")


sandwich('chiken','tomato sauce','vegitable')
sandwich('beef','cheese')
sandwich('garlic chiken','mayo sauce')

// // Q45

type car ={
    manfacture: string
    model: string
    [key: string]: any;
}

function creatCar(manfacture: string, model: string, optional: Record<string,any>): car {
return {
    manfacture,
    model,
    ...optional
}

}

const mycar:car =creatCar("toyota", "Corolla",  {color: "siver", year: "2023"})
console.log(mycar)




































































