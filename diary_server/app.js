const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express();

app.use(cors());
app.use(express.json())
app.use(logger('dev'))

app.get("/", (req, res) => {
    res.json({
        title: "Personal Diary app",
        description: "Write about your wildest dreams, deepest fears and regrettable choices!"
    })
})


module.exports = app
