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

app.post('/users', (req, res) => {
  var user = new User()
  user.title = req.body.title
  user.yearsOfExperience = req.body.yearsOfExperience
  user.save()
})

app.get('/user/:user_id', (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    res.send({data: user})
  })
})

app.listen(4000, function () {
  console.log('Example app listening on port 3000!')
})

// app.put('/user/:user_id', (req, res) => {
//   User.findById(req.params.user_id, (err, user) => {
//     if (err) {res.send(err)}
//   })
// })



const user = new User({ title: 'hello' })

user.save()
  .then(() => {
    console.log('user saved')
  })
