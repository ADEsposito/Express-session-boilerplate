var mongoose = require('mongoose');

var connectString = 'mongodb://localhost/animals';

mongoose.connect(connectString);

mongoose.connection.on('connected', function(){
  console.log('mongoose is connected ')
})

mongoose.connection.on('error', function(err){
  console.log('mongoose connection error: ' + err)
})

mongoose.connection.on('disconnected', function(){
  console.log('disconnected ')
})
