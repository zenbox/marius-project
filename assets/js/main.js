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
let h1 = document.querySelector("h1");
h1.textContent = "Hallo myÖNV Welt!";

// h1.forEach((element, index) => {
//     element.textContent = `Link Nummer ${index + 1}`;
// });

console.log(h1);
console.log(typeof h1);

// 2. Event Listener
let button = document.querySelector("button");

console.log(button);
console.log(typeof button);

button.addEventListener("click", function() {
    console.log("Button wurde geklickt!");
});

// 3. Validierung
// 4. Server-Kommunikation


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