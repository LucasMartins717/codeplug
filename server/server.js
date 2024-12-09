const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
    try {
        const response = await db.query("SELECT * FROM posts");
        res.json(response.rows);
    } catch (err) {
        console.error("Erro ao buscar dados: " + err);
    }
})

app.listen(3030, () => {
    console.log("Server running: http://localhost:3030");
})

//fazer status de erro posteriormente!