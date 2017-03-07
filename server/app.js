var express = require('express'),
    path    = require('path'),
    app     = express(),
    server  = require('http').createServer(app),
    bodyParser = require('body-parser');

require('./db/db')

app.use(bodyParser.urlencoded({extended: true}))

var Animal = require('./models/Animal');


app.get('/animals', function(req, res){
  Animal.find(function(err, animals){
    console.log(animals)
    res.json(animals)
  })
})

app.post('/animals', function(req, res){
  var name = req.body.name;
  var type = req.body.type;

  var critter = new Animal({name: name, type: type})
  console.log(name, type)
  critter.save();
  res.send('completed')
})

app.put('/animals/:id', function(req, res){
  console.log(req.params.id)
  var name = req.body.name
  console.log(req.body)
  Animal.findByIdAndUpdate(req.params.id, req.body, function(err, animal){
    // this returns the original object, not the updated
    res.json(animal)
  })
})

app.patch('/animals/:id', function(req, res){
  console.log(req.params.id)
  var name = req.body.name
  console.log(req.body)
  Animal.findByIdAndUpdate(req.params.id, req.body, function(err, animal){
    // this returns the original object, not the updated
    res.json(animal)
  })
})

app.delete('/animals', function(req, res){
  var id = req.body.id

  Animal.findById(id, function(err, animal){
    animal.remove();
    res.send('animal was adopted')
  })
})







server.listen(3000, function(){
  console.log('server is listening')
})
