const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://www.app.com.br'
]

//it allows cors
app.use(cors({
  origin: function (origin, callback) {
    let allowed = true

    if (!origin) allowed = true

    if (!allowedOrigins.includes(origin)) allowed = false

    callback(null, allowed)
  }
}))

//it allows server receive JSON format data
app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('The server is running on port: ' + port)
})