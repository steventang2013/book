var _ = require('lodash')
var random_name = require('node-random-name');
var Firebase = require('firebase');
var ref = new Firebase('https://spaceteam.firebaseio.com')
var customers = [];

// San Francisco
var city_location = {
  lat: 37.78,
  lon: -122.41
}

var radius = 0.03

// simualate a random person entering, staying for a duration, and leaving
function simulate(){

  // generate a random person with a random name,
  // random location, and random duration
  var name = random_name()
  var duration = 1 + 5 * Math.random()
  var lat = city_location.lat + radius * (Math.random() - 0.5) * 2
  var lon = city_location.lon + radius * (Math.random() - 0.5) * 2
  var person = {
    name: name,
    duration: duration,
    lat: lat,
    lon: lon
  }

  // simulate this person entering
  enter(person)

  // simulate this person leaving after 'duration' seconds
  setTimeout(function(){
    leave(person)
  }, duration * 1000)
}

function enter(person){
  var cust_ref = ref.child(person.name)
  cust_ref.set(person)
}

function leave(person){
  // customers.remove(person)
  var cust_ref = ref.child(person.name).remove()
}

function clear(){
  // remove all people from the Firebase
  ref.remove()
  // ...
}

// clear the firebase, so that the simulation always starts from no one
clear()

// run each second
setInterval(simulate, 2000)
