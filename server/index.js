const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3002
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler() //part of next config
const mongoose = require('mongoose')

nextApp.prepare().then(() => {
  nextApp.prepare().then(() => {
    // express code here
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use('/aboutUs', require('./routes/aboutUs/index'))

    app.get('*', (req, res) => {
      return handle(req, res) // for all the react stuff
    })
    app.listen(PORT, (err) => {
      if (err) throw err
      console.log(`ready at http://localhost:${PORT}`)
    })
  })
  const app = express()
})
