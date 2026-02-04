console.clear()

// 1. Datentypen
// number
let a = 24
const PI = 3.14159

// string literal
let txt = "Marius"
let text = `Marius ist bald ${a} Jahre alt.`
// text = "Marius ist bald " + a + " Jahre alt!"

// boolean
let bool = true // false (1 / 0)
let b = "5"

// comparison operator
// console.log(b == 5) // value only
// console.log(b === 5) // value + type

// 2. Datenstrukturen
// multi value types
let arr = [1, 2, "3", "Sinn des Lebens", 5]
console.log(arr[2]) // 3

// JavaScript Object Notation (JSON)
let obj = {
    name: "Marius",
    age: 23,
    isStudent: true,
}
console.log(obj.name) // Marius

let o = {
    "key-a": "value",
    "number": 123,
    "boolean": false,
    "array": [1, 2, 3],
    "object": {
        subkey: "subvalue",
    },
}

// 3. Funktionen
// Function Declaration
function greet(name) {
    console.log(`Hallo, ${name}!`)
}

greet("Marius")
greet("Anna")

// Function Expression
let fn = function (name) {
    console.log(`Hi, ${name}!`)
}

fn("Michael")

// Arrow Functions
let arrowFn = (name) => {
    console.log(`Hey, ${name}!`)
}

arrowFn("Susi")
console.log(typeof arrowFn)
// Kurzform bei nur einem Parameter und nur einem Ausdruck
let shortArrowFn = (name) => console.log(`Servus, ${name}!`)

shortArrowFn("Lena")

// 4. Kontrollstrukturen
let age = 20

// if-else
if (age < 18) {
    console.log("Du bist minderjährig.")
} else if (age >= 18 && age < 65) {
    console.log("Du bist erwachsen.")
} else {
    console.log("Du bist senior.")
}

// switch-case
let day = 3
switch (day) {
    case 1:
        console.log("Montag")
        break
    case 2:
        console.log("Dienstag")
        break
    case 3:
        console.log("Mittwoch")
        break
    default:
        console.log("Anderer Tag")
}

// loops
// for
for (let i = 0; i < 5; i++) {
    console.log(`Zahl: ${i}`)
}

// while
let count = 0
while (count < 5) {
    console.log(`Count: ${count}`)
    count++
}

// for...of
let fruits = ["Apfel", "Banane", "Kirsche"]
for (let fruit of fruits) {
    console.log(fruit)
}

// for...in
let person = {
    name: "Marius",
    age: 23,
    city: "Köln",
}
for (let key in person) {
    console.log(`${key}: ${person[key]}`)
}
// 5. Fehlerbehandlung
try {
    console.log("Vor dem Fehler")
    // Fehler provozieren
    throw new Error("Dies ist ein Fehler!")
    console.log("Nach dem Fehler") // wird nicht ausgeführt
} catch (error) {
    console.error("Fehler abgefangen:", error.message)
} finally {
    console.log("Dieser Block wird immer ausgeführt.")
}

// Ende der Basics.js

// ES-Modul-Syntax
// Klassen, Objektorientierung
// Eigenschaften und Methoden
// Ein Fahrkarten-Klasse
console.clear()

class Ticket {
    constructor() {
        this._price = 0
        this._destination = ""
        this._date = new Date()
        this._ageGroup = ""
        this._reductionReason = ""
    }

    set price(amount = 2.8) {
        if (typeof amount !== "number") return

        this._price = amount
    }

    get price() {
        return this._price
    }

    print() {}
    buy() {}
    storno() {}
}

// Instanz aus der Klasse erzeugen
const myTicket = new Ticket()

myTicket.price = 5.2

console.log(myTicket.price)

// ES Module

// import - eine andere JS Datei einbinden
// import {setTicketPrice } from ticket.js

// export (in ticket.js)
// export function setTicketPrice () { ... }

// 1. DOM Manipulation
// Eine Variable bauen und ein Objekt aus dem DOM zuweisen
let h1 = document.querySelector("h1")
h1.textContent = "Hallo myÖNV Welt!"

// h1.forEach((element, index) => {
//     element.textContent = `Link Nummer ${index + 1}`;
// });

console.log(h1)
console.log(typeof h1)

// 2. Event Listener
let button = document.querySelector("button")

console.log(button)
console.log(typeof button)

button.addEventListener("click", function () {
    console.log("Button wurde geklickt!")
})

// - - - - - - - - - -
// FUNCTIONS
// - - - - - - - - - -
// Neue Elemente erzeugen, mit Attributen ausrüsten und im DOM verankern

// let priceContainer = document.createElement("div")

let priceContainer = document.querySelector("#ticket-price")

priceContainer.setAttribute("id", "ticket-price")
priceContainer.setAttribute("class", "my-first my-second")

priceContainer.classList.add("active")

priceContainer.dataset.id = 32
priceContainer.dataset.name = "price"
priceContainer.dataset.currency = "EUR"

let price = 42

priceContainer.textContent = `Preis ${price} EUR`

// Parameter in Funktionen


// Funktionsdefinition
function log(param1 ="", param2 = "") {
    console.log(param1)
    console.log(param2)
}
// Funktionsaufruf
log("erste Nachricht", "123")
log("hallo Anna")
log("123")
log(42)
log("ok")



// Zusammenzählen und Ergebnis zurück
function add(param1, param2) { 
    let result = param2 + param2
    return result
}

let arg1 = 3
let arg2 = 4
let sum = add(arg1, arg2)
console.log(sum)