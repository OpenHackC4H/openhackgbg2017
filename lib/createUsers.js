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
  'Developer',
  'Designer',
  'Photographer',
  'Waiter',
  'Mechanic',
  'Janitor'
]

const seniority = [
  '0 to 1 year',
  '2 to 5 years',
  'more than 5 years'
]

const companySize = [
  'Less than 5 people',
  '5 to 50 people',
  '500 to 500 people',
  'more than 500 people'
]

const jobDescription = ''
const workplaceDescription = ''

const languages = [
  'English',
  'English',
  'English',
  'English',
  'Spanish',
  'French',
  'Swedish'
]

User.remove({}, () => {
  for (var i = 0; i < 100; i++) {
    setTimeout(() => {
      const user = new User({
        title: positions[Math.floor(Math.random() * positions.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        interestedIn: [cities[Math.floor(Math.random() * cities.length)], cities[Math.floor(Math.random() * cities.length)]],
        seniority: seniority[Math.floor(Math.random() * seniority.length)],
        companySize: companySize[Math.floor(Math.random() * companySize.length)],
        jobDescription,
        workplaceDescription,
        languages: languages[Math.floor(Math.random() * languages.length)]
      })
      user.save(() => {
        console.log(user.title + ' saved!' + i)
      })
    }, 1000 * i)
  }
})
