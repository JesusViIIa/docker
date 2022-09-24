const express = require('express')

const routes = require('./routes')
require('./database')
const app = express()
const port = 3000

app.use(express.json())

app.use(express.static('public'))
app.use('/api',routes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))