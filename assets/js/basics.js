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
