const express = require('express');
const cors = require('cors');
const db = require('./db');
const multer = require('multer');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
const upload = multer({ storage: storage })

app.get("/posts", async (req, res) => {
    try {
        const response = await db.query("SELECT * FROM posts");
        res.json(response.rows);
    } catch (err) {
        console.error("Erro ao buscar dados: " + err);
        res.status(500).json({ error: "Erro ao buscar dados" })
    }
})

app.get("/posts/:id", async (req, res) => {
    const postId = req.params.id;
    try {
        const response = await db.query("SELECT * FROM posts WHERE id = $1", [postId]);

        if (!response) {
            return res.status(404).json({ error: "Post não encontrado" });
        }

        res.json(response.rows[0]);
        res.status(200).json({ message: "Sucesso ao buscar post" });
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar post" });
    }
})

app.post('/posts', upload.single('image_url'), async (req, res) => {

    const { title, description, tags } = req.body
    const image_url = req.file ? `http://localhost:3030/uploads/images/${req.file.filename}` : req.body.image_url;
    const parsedTags = JSON.parse(tags);

    try {
        const response = await db.query('INSERT INTO posts(title, description, image_url, tags) VALUES ($1, $2, $3, $4)', [title, description, image_url, parsedTags])

        if (!response) {
            res.status(500).json({ error: "Falha ao criar Post" });
            throw new Error('Erro ao publica Post');
        }

        res.status(201).json({
            message: "Post criado com sucesso!",
        })

    } catch (err) {
        res.status(500).json({ error: "Sem conexão com o servidor" });
        throw new Error("Falha ao conectar com o servidor: " + err);
    }
})

app.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const response = await db.query('DELETE FROM posts WHERE id = $1', [postId]);

        if(!response){
            return res.status(404).json({error: "Post não encontrado"});
        }

        res.status(200).json({message: "Post deletado com sucesso"});
    } catch (err) {
        console.error("Erro ao buscar dados: " + err);
        return res.status(500).json({error: "Erro ao buscar dados"});
    }
})

app.listen(3030, () => {
    console.log("Server running: http://localhost:3030");
})
