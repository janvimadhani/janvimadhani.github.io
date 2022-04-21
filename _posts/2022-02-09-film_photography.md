---
layout: post
title: "Film Photography"
author: "Janvi Madhani"
categories: fun
tags: [fun]
image: koppers.jpg
---

Over the past few years, I've been learning more about cameras and lenses both from a curiosity about optics and also as a form of creative expression. What better place to start this journey than an analog film camera! I picked up a few inexpensive film cameras from ebay and have been playing around with different film stocks to find my niche. Currently, I'm really enjoying 35 mm and 120 mm photography and my favorite film stock is Kodak Portra 400, though Fujifilm Superia 400 is a close second. Here is a selection of photographs I took around Pittsburgh, Baltimore, and a few other places over the last few years! 

<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  text-align: center;
  padding: 32px;
}

.row {
  display: -ms-flexbox; /* IE 10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE 10 */
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create two equal columns that sits next to each other */
.column {
  -ms-flex: 50%; /* IE 10 */
  flex: 50%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  font-size: 18px;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
  color: white;
}
</style>
</head>
<body>

<!-- Header -->
<div class="header" id="myHeader">
  <h1>Film Portfolio</h1>
  <p>Click on the buttons to change the grid view.</p>
  <button class="btn" onclick="one()">1</button>
  <button class="btn active" onclick="two()">2</button>
  <button class="btn" onclick="four()">4</button>
</div>

<!-- Photo Grid -->
<div class="row"> 
  <div class="column">
    <img src="./assets/img/dahntahn.jpg" style="width:100%">
    <img src="./assets/img/schenley.jpg" style="width:100%">
    <img src="./assets/img/alleghenyobs.jpg" style="width:100%">
    <img src="./assets/img/frick.jpg" style="width:100%">
    <img src="./assets/img/yelimchinatown.jpg" style="width:100%">
    <img src="./assets/img/empirestate.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="./assets/img/koppers.jpg" style="width:100%">
    <img src="./assets/img/ya.jpg" style="width:100%">
    <img src="./assets/img/beachmoon.jpg" style="width:100%">
    <img src="./assets/img/waterfall.jpg" style="width:100%">
  </div>  
  <div class="column">
    <img src="./assets/img/rainbow.jpg" style="width:100%">
    <img src="./assets/img/mountains.jpg" style="width:100%">
    <img src="./assets/img/alleghenyspring.jpg" style="width:100%">
    <img src="./assets/img/foggy.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="./assets/img/janvi_steps_ao.JPG" style="width:100%">
    <img src="./assets/img/bananas.jpg" style="width:100%">
    <img src="./assets/img/friendship.jpg" style="width:100%">
    <img src="./assets/img/pghsunset.JPG" style="width:100%">
  
  </div>
</div>

<script>
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Full-width images
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "100%";  // IE10
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>

</body>
</html>
