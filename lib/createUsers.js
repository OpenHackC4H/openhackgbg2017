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
  'Chicago',
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
  'Cape town',
  'San francisco',
  'Moscow',
  'Bombay'
]

const positions = [
  'Developer',
  'Designer',
  'Photographer',
  'Waiter',
  'Mechanic',
  'Janitor',
  'Bartender'
]

const seniority = [
  'Less than a year',
  '2 to 5 years',
  'More than 5 years'
]

const companySize = [
  'Less than 5 people',
  '5 to 50 people',
  '500 to 500 people',
  'More than 500 people'
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

const keywords = [
  'creative',
  'open office',
  'health benefits',
  'free lunch',
  'central',
  'remote',
  'multiple offices',
  'yearly bonus'
]

setTimeout(() => {
  // User.remove({}, () => {
    console.log('removed')
    for (var i = 0; i < 200; i++) {
      setTimeout(() => {
        const user = new User({
          title: positions[Math.floor(Math.random() * positions.length)],
          city: cities[Math.floor(Math.random() * cities.length)],
          interestedIn: [cities[Math.floor(Math.random() * cities.length)]],
          seniority: seniority[Math.floor(Math.random() * seniority.length)],
          companySize: companySize[Math.floor(Math.random() * companySize.length)],
          jobDescription,
          workplaceDescription,
          languages: languages[Math.floor(Math.random() * languages.length)]
        })
        user.keywords = []
        keywords.forEach(keyword => {
          if (Math.random() > 0.75 && keywords.length < 3) {
            user.keywords.push(keyword)
          }
        })
        const randomCity = cities[Math.floor(Math.random() * cities.length)]
        if (Math.random() > 0.25 && user.interestedIn.indexOf(randomCity) === -1) {
          user.interestedIn.push(randomCity)
        }
        user.save(() => {
          console.log(user.title + ' saved!' + i)
        })
      }, 1500 * i)
    }
  // })
}, 1500)
