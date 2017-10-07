'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { getGeoCodeForCity } = require('../adapters/geocoder')

const userSchema = new Schema({
  title: { type: String },
  yearsOfExperience: { type: Number },
  city: String,
  position: {
    latitude: Number,
    longitude: Number
  },
  seniority: String,
  companySize: String,
  jobDescription: String,
  workplaceDescription: String,
  languages: String
})

userSchema.pre('save', function(next) {
  if (!this.city) {
    return next()
  }

  getGeoCodeForCity(this.city)
    .then(geoCode => {
      this.position = geoCode
      next()
    })
})

const User = mongoose.model('user', userSchema)

module.exports = User
