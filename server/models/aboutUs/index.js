const mongoose = require('mongoose')
const schema = mongoose.Schema

const aboutUs = new schema({
  id: { type: Number },
  heading: { type: String },
  featureHeading: { type: String },
  feature: { type: Array, default: [] }
})

module.exports = mongoose.model('photos', photoModel)
