/** Javascript Examples
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

// - - - - - - - - - -
// Imports
// - - - - - - - - - -
import Ticket from "./classes/Ticket.js"
import DomBuilder from "./classes/DomBuilder.js"

// - - - - - - - - - -
// Instances
// - - - - - - - - - -
const myTicket = new Ticket()
const myDomBuilder = new DomBuilder()

console.log("Ticket instance:", myTicket)
console.log("DomBuilder instance:", myDomBuilder)

// - - - - - - - - - -
// CONFIGURATIONS
// - - - - - - - - - -
const form = document.querySelector("form#ticket")

// - - - - - - - - - -
// EVENT CONTROL
// - - - - - - - - - -
form.addEventListener("change", function (event) {
    event.preventDefault()

    const formData = new FormData(form)
    const queryString = new URLSearchParams(formData).toString()

    myTicket.fetchPrice(queryString).then((price) => {
        const priceContainer = myDomBuilder.buildPriceContainer(price)
        const target = document.querySelector("#ticket-price")
        if (!target || !priceContainer) return
        target.replaceChildren(priceContainer)
    })
})

// Event Listener für das Absenden des Formulars
form.addEventListener("submit", async function (event) {
    event.preventDefault()
    alert("Ticket gekauft!")})