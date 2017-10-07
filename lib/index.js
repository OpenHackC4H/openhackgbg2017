require('./models')

const User = require('./models/user')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('hey ho')
})

app.get('/users', (req, res) => {
  User.find({}, (err, users) => res.send({ data: users }))
})

app.post('/users', (req, res) => {
  var user = new User(req.body)
  user.save(() => {
    res.json({user})
  })
})

app.get('/user/:user_id', (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    res.send({data: user})
  })
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
