'use strict'

const mongoose = require('mongoose')

const { getGeoCodeForCity } = require('../adapters/geocoder')

const userSchema = new mongoose.Schema({
  title: { type: String },
  yearsOfExperience: { type: Number },
  city: String,
  position: {
    latitude: Number,
    longitude: Number
  }
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
