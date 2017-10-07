require('./models')
const User = require('./models/user')

const cities = [
  'Göteborg',
  'Bangkok',
  'Paris',
  'Dubai',
  'Singapore',
  'Seoul',
  'Barcelona',
  'Prague',
  'Rome',
  'Los angeles',
  'chicago',
  'Seattle',
  'Sao Paulo',
  'Rio de Janeiro',
  'Buenos aires',
  'Stockholm',
  'Berlin',
  'New york',
  'London',
  'Amsterdam',
  'Tokyo',
  'Cairo',
  'Lagos',
  'Greater Johannesburg',
  'Cape town'
]

const positions = [
  'Develop',
  'Designer',
  'Photographer',
  'Waiter',
  'Mechanic',
  'Janitor'
]

User.remove({}, () => {
  for (var i = 0; i < 100; i++) {
    const user = new User({
      title: positions[Math.floor(Math.random() * positions.length)],
      city: cities[Math.floor(Math.random() * cities.length)],
    })
    user.save(() => {
      console.log(user.title + ' saved!')
    })
  }
})
