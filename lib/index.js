require('./models')

const User = require('./models/user')

const user = new User({ title: 'hello' })

console.log(user)

user.save()
  .then(() => {
    console.log('user saved')
  })
