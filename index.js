const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})



app.get('/registration', db.getUsers)
app.get('/registration/:ordernumber', db.getUserById)
app.post('/registration', db.createUser)
app.put('/registration/:ordernumber', db.updateUser)
app.delete('/registration/:ordernumber', db.deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})