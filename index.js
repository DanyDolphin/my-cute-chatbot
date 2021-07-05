const express = require('express')
const morgan = require('morgan')
const path = require('path')

const app = express()

app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => console.log('listening on port 3000'))