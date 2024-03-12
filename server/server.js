const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server Listening On http://localhost:${port}`))