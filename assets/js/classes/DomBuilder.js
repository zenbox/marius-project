/** DOM Builder
 *
 * @desc buids and modifies DOM Elements, attributes and value
 *
 * @package Webapplication
 * @module Document
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2026-02-04
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2026 Michael Reichart, Cologne
 */

/*

    <div class="price" id="ticket-price" data-id="32" data-name="price" data-currency="EUR">Preis: 2,80 EUR</div>

*/

export default class DomBuilder {
    constructor() {}

    /**
     * @param   {string} tageName - tag name of the element to create
     * @returns {void}
     */
    createElement(tagName) {
        try {
            const el = document.createElement(tagName)
            return el
        } catch (error) {
            console.error("Error creating element:", error)
        }

        return null
    }

    /**
     *
     * @param   {DOM object} el - DOM element to set class on
     * @param   {string} className - class name to add to the element
     * @returns {DOM element}
     */
    setClass(el, className) {
        try {
            el.classList.add(className)
        } catch (error) {
            console.error("Error setting class:", error)
        }

        return el
    }

    /**
     *
     * @param   {DOM object} el - DOM element to add content to
     * @param   {string} content - content to add to the element
     * @returns {DOM element}
     */
    addContent(el, content) {
        try {
            el.textContent = content
        } catch (error) {
            console.error("Error adding content:", error)
        }
        return el
    }

    /**
     *
     * @param   {number} price - ticket price amount
     * @returns {DOM element} price container element
     */
    buildPriceContainer(price) {
        // 1. Element erzeugen
        let el = this.createElement("div")

        // 2. CSS-Klassen setzen
        el = this.setClass(el, "price")

        // 3. Preis als Inhalt setzen
        el = this.addContent(el, `Preis: ${price} EUR`)

        return el
    }
}
