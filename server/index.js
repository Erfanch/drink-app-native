const express = require('express');
const app = express();
const port = 3999;
const path = require('path');
const db = require('../db/index.js')
const model = require('../db/model.js')
const sampleData= require('../sampleData.js')


// var grocery = [
//   {name:'Milk', quantity:1},
//   {name:'Peaches', quantity: 5},
//   {name:'Pasta', quantity: 1},
//   {name: 'Banana', quantity: 6}
// ]


app.get('/', (req, res) => {
  res.status(200).send(sampleData)
  })


// app.use(express.json())

// app.post('/groceries', (req, res) => {
//   // console.log('Post request is working', req.body)
//   model.insertGroceries(req.body, (err, results) => {
//     if(err) {
//       console.log(err)
//     } else {
//       res.status(201).send()
//     }
//   })
// })

app.listen(port, console.log('server is listening at port:', port))