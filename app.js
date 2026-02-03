const express = require("express")
const crypto = require("crypto")

const app = express()

function createTicketId() {
    if (typeof crypto.randomUUID === "function") return crypto.randomUUID()
    return crypto.randomBytes(16).toString("hex")
}
// CORS Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
    if (req.method === "OPTIONS") return res.sendStatus(204)
    next()
})

app.get("/ticket-order", (req, res) => {
    const ticket = {
        id: createTicketId(),
        type: "ticket",
        createdAt: new Date().toISOString(),
        price: {
            amount: 2.8,
            currency: "EUR",
        },
        data: { ...req.query },
    }

    res.status(200).json(ticket)
})

const port = Number(process.env.PORT) || 3000
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Ticket service listening on http://localhost:${port}`)
})
