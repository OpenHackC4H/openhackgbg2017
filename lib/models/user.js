'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  title: { type: String },
  yearsOfExperience: { type: Number }
})

const User = mongoose.model('user', userSchema)

module.exports = User
