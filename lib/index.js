require('./models')

const User = require('./models/user')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hey ho')
})

app.get('/users', (req, res) => {
  User.find({ title }, (err, users) => res.send({ data: users }))
})

app.listen(4000, () => {
  console.log('Example app listening on port 3000!')
})
