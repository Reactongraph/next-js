const express = require('express')
const router = express.Router()

const aboutUs = {
  id: 1,
  heading:
    'Next JS is the framework used for rendering react application on server side.',
  featureHeading: 'Some core Features are :',
  feature: [
    'Server renders our react application.',
    'Automatic code splitting for faster page reload.',
    'Simple client side routing.',
    'Build in CSS support.',
    'Able to implement with Express or any other node JS framework.',
    'Hot reloading.',
    'Deployment.',
  ],
}

router.get('/', (req, res, next) => {
  res.status(200).send(aboutUs)
  next()
})

module.exports = router
