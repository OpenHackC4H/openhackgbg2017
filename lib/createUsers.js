require('./models')
const User = require('./models/user')

const cities = [
  'Gothenburg',
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

for (var i = 0; i < 2500; i++) {
  const user = new User({
    title: 'Title ' + i,
    city: cities[Math.floor(Math.random() * cities.length)]
  })
  user.save(() => {
    console.log(user.title + ' saved!')
  })
}
