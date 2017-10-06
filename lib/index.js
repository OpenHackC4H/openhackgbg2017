require('./models')

const User = require('./models/user')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hey ho')
})

app.get('/users', (req, res) => {
  User.find({}, (err, users) => res.send({ data: users }))
})

app.listen(4000, function () {
  console.log('Example app listening on port 3000!')
})

const user = new User({ title: 'hello' })

console.log(user)

user.save()
  .then(() => {
    console.log('user saved')
  })
