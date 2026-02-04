/** Ticket Class
 *
 * @desc A class ti handle ticket shopping ...
 *
 * @package Webapplication
 * @module ticket
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2026-02-04
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2026 Michael Reichart, Cologne
 */
// pure data object handling
export default class Ticket {
    constructor() {
        this._price = "2.8"
    }
    get price() {
        return this._price
    }
    set price(newPrice) {
        if (newPrice < 0) return

        try {
            newPrice = Number(newPrice)
            if (isNaN(Number(newPrice)))
                throw new Error("Price must be a number")
        } catch (error) {
            console.error(error)
            return
        }

        this._price = newPrice
    }

    /**
     * @desc    fetch price from server
     * @param   {string} queryString holds the ticket data as a string
     * @returns {Promise<number|undefined>} ticket price amount (or undefined on error)
     */
    async fetchPrice(queryString = "") {
        // ! Der Preis ist gar nicht heiss!
        // ? ist der der Preis heiss?
        // * Wenn der Preis heiss ist, dann ...

        // TODO Fetch price from server
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

        const ticketData = await response.json()
        return ticketData.price.amount
    }


}
