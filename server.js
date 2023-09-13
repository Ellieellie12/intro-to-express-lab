// import modules

import express from 'express'

import { students } from './data/student-data.js'

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes

//GET http://localhost:3000/
app.get('/', function (req, res) {
  res.redirect('/students')
})

app.get('/home', function (req, res) {
  res.render('home')
})

app.get('/students', function (reg, res) {
  res.render('students/index', {
    students: students
  })
})

// tell the app to listen on port 3000

app.listen(3000, function () {
  console.log('Listening on port 3000')
})