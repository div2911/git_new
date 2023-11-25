"use strict";

var alllis = document.querySelectorAll('li');
var colors = ['yellow', 'blue', 'red', 'black'];
alllis.forEach(function (value, i) {
  var color = colors[i];
  console.log(value, color);
});