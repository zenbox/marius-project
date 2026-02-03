/** Javascript Examples
 *
 * @desc
 *
 * @package Webapplication
 * @module basics
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2026-02-03
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2026 Michael Reichart, Cologne
 */

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

// 3. Server-Kommunikation
const form = document.querySelector("form#ticket")
form.addEventListener("submit", async function (event) {
    event.preventDefault()
    console.log("Formular wird gleich abgeschickt!")

    const formData = new FormData(form)

    const queryString = new URLSearchParams(formData).toString()
    console.log(queryString)

    // Request an den Server
    const response = await fetch(
        `http://localhost:3000/ticket-order?${queryString}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    )

    if (!response.ok) {
        console.error(
            "Fehler beim Abrufen des Tickets:",
            response.status,
            response.statusText
        )
        return // Früher Abbruch der Funktion
    }

    const ticket = await response.json()
    console.log("Ticket erhalten:", ticket)
})

// 4. Validierung / Programmierungslogik

/*
URL-string aus Formular-Daten

https://myoenv.de/ticket-order
    ?
        ticketDestination=Hbf
    &
        ticketDate=2026-02-03
    &
        ticketAge=adult


        https://127.0.0.1:5502/index.html
        ? ticketDestination=Hbf
        & ticketDate=2026-02-04
        & ticketAge=child
        & ticketReduction=on
        & ticketReductionReason=bus+driver
*/
