const express = require('express');
const cors = require('cors');
const db = require('./db');
const multer = require('multer');
const { json } = require('stream/consumers');
const MESSAGES = require('./constants/messages');
const user = require('./constants/user');
const jwt = require('jsonwebtoken');

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
        return res.json(response.rows);
    } catch (err) {
        console.error(MESSAGES.ERROR.SERVER_ERROR + err);
        return res.status(500).json({ error: MESSAGES.ERROR.SERVER_ERROR })
    }
});

app.get("/posts/:id", async (req, res) => {
    const postId = req.params.id;
    try {
        const response = await db.query("SELECT * FROM posts WHERE id = $1", [postId]);

        if (!response) {
            return res.status(404).json({ error: MESSAGES.ERROR.POST_NOT_FOUND });
        }

        return res.json(response.rows[0]);
    } catch (err) {
        console.err(MESSAGES.ERROR.SERVER_ERROR + err)
        return res.status(500).json({ error: MESSAGES.ERROR.SERVER_ERROR });
    }
});

app.post('/posts', upload.single('image_url'), async (req, res) => {

    const { title, description, tags } = req.body
    const image_url = req.file ? `http://localhost:3030/uploads/images/${req.file.filename}` : req.body.image_url;
    const parsedTags = JSON.parse(tags);

    if (!title || !description || !tags || !image_url) {
        return res.status(400).json({ error: "Title, description, image, and tags are required!" })
    }

    if (title.lenght > 40) {
        return res.status(400).json({ error: "Title must be less than 40 characters" });
    }
    if (!Array.isArray(parsedTags)) {
        return res.status(400).json({ error: "Tags must be an array" });
    }

    try {
        const response = await db.query('INSERT INTO posts(title, description, image_url, tags) VALUES ($1, $2, $3, $4)', [title, description, image_url, parsedTags])

        if (!response) {
            console.error(MESSAGES.ERROR.POST_NOT_FOUND);
            return res.status(400).json({ error: MESSAGES.ERROR.POST_NOT_FOUND });
        }

        return res.status(201).json({ message: MESSAGES.SUCESS.POST_CREATED })

    } catch (err) {
        console.error(MESSAGES.ERROR.SERVER_ERROR + err);
        return res.status(500).json({ error: MESSAGES.ERROR.SERVER_ERROR });
    }
});

app.delete('/posts/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const response = await db.query('DELETE FROM posts WHERE id = $1', [postId]);

        if (!response) {
            return res.status(404).json({ error: MESSAGES.ERROR.POST_NOT_FOUND });
        }

        return res.status(200).json({ message: MESSAGES.SUCESS.POST_DELETED });
    } catch (err) {
        console.error(MESSAGES.ERROR.SERVER_ERROR + err);
        return res.status(500).json({ error: MESSAGES.ERROR.SERVER_ERROR });
    }
});

app.put('/posts/:id', upload.single('image_url'), async (req, res) => {
    const postId = req.params.id;
    const { title, description, tags } = req.body;
    const image_url = req.file ? `http://localhost:3030/uploads/images/${req.file.filename}` : req.body.image_url;
    const parsedTags = JSON.parse(tags);

    if (!title || !description || !tags || !image_url) {
        return res.status(400).json({ error: "Title, description, images and tags are required" });
    }
    if (title.length > 40) {
        return res.status(400).json({ error: "Title must be less than 40 characters" });
    }
    if (!Array.isArray(parsedTags)) {
        return res.status(400).json({ error: "Tags must be an array" });
    }

    try {
        const response = await db.query(
            'UPDATE posts SET title = $1, description = $2, image_url = $3, tags = $4 WHERE id = $5',
            [title, description, image_url, parsedTags, postId],
        )

        if (!response) {
            console.error(MESSAGES.ERROR.POST_NOT_FOUND)
            return res.status(404).json({ error: MESSAGES.ERROR.POST_NOT_FOUND });
        }

        return res.status(200).json({ message: MESSAGES.SUCESS.POST_UPDATED });

    } catch (err) {
        console.error(MESSAGES.ERROR.SERVER_ERROR + err);
        return res.status(500).json({ error: MESSAGES.ERROR.SERVER_ERROR });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (username !== user.username) {
        return res.status(401).json({ message: "Invalid username!" })
    }


    if (password !== user.password) {
        return res.status(401).json({ message: "Invalid password!" })
    }

    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: "1h" });

    res.json({ token });
})

app.listen(3030, () => {
    console.log("Server running: http://localhost:3030");
});
