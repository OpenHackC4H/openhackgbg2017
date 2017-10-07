'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { getGeoCodeForCity } = require('../adapters/geocoder')
const { getImage } = require('../adapters/images')

const userSchema = new Schema({
  title: { type: String },
  yearsOfExperience: { type: Number },
  city: String,
  interestedIn: [String],
  keywords: [String],
  position: {
    latitude: Number,
    longitude: Number
  },
  seniority: String,
  companySize: String,
  jobDescription: String,
  workplaceDescription: String,
  languages: String,
  imageURL: String,
})

userSchema.pre('save', function(next) {
  if (!this.city) {
    return next()
  }

  getGeoCodeForCity(this.city)
    .then(geoCode => {
      this.position = geoCode

      return getImage(this.city)
        .then(imageURL => {
          this.imageURL = imageURL
          next()
        })
    })
})

userSchema.methods.findMatches = function() {
  const self = this

  return new Promise((resolve, reject) => {
    User.find({
      city: { $in: self.interestedIn },
      interestedIn: self.city,
      title: self.title
    },
    (err, users) => {
      if (err) {
        return reject(err)
      }
      resolve(users)
    })
  })
}

const User = mongoose.model('user', userSchema)

module.exports = User
