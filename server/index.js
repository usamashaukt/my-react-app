const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware

const app = express();
app.use(express.json());
app.use(cors()); // Use CORS middleware

const TicketSchema = mongoose.Schema({
    title: {
        require: true,
        type: String
    },
    description: {
        require: true,
        type: String
    },
});
const TicketModel = mongoose.model("todos", TicketSchema);

mongoose.connect('mongodb://127.0.0.1:27017/pm')
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch(err => console.error("Error connecting to MongoDB:", err));

app.get("/get-tickets", async (req, res) => {
    try {
        const tickets = await TicketModel.find();
        res.json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post("/add-tickets", async (req, res) => {
    try {
        const tickets = await TicketModel.create(req.body);
        res.json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
