'use strict'

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  title: { type: String },
  yearsOfExperience: { type: Number }
})

const User = mongoose.model('user', userSchema)

module.exports = User
