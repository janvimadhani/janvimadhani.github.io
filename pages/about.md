---
layout: page
title: About
category: about
permalink: /about
---




<img src="./assets/img/headshot.jpeg" alt="headshot" width="400" style="padding: 10px;" align="right"/>
Hi, I'm Janvi! I'm a graduate student pursuing a PhD in Astrophysics at Johns Hopkins University in Baltimore, MD. I work with Drs. [Susan Kassin](https://www.susankassin.com/) and Charlotte Welker. You can find details about my current project using cosmological hydrodynamic simulations [here.](https://janvimadhani.github.io/simulation). Working with Susan and Charlotte, I have found my science home in the Slice and Dice Galaxy group, primarily at Space Telescope Science Institute and Johns Hopkins. We study everything from gas outflows, galactic winds, galaxy kinematics to large scale structure and the cosmic web. We are a group of both observers and theorists. Learn more about the fantastic scientists in our group by visiting our website, [here!](https://www.susankassin.com/sliceanddice)
  
  As a researcher, I am most interested in answering cosmological questions
about the birth of the universe, inflation, dark energy driven expansion, and
structure formation and evolution. I am also interested in computationally
modeling cosmological phenomena to help us answer these questions. You can find a link to my CV [here](./Janvi_Curriculum_Vitae.pdf) or you can click the little book icon at the top right of the page. Outside of science, 
you can find me baking, painting, playing an instrument, out in nature, doing yoga, or 
reading a book! You can check out some of my recent interests like baking sourdough bread or film photography [here!](https://janvimadhani.github.io/fun)
<br/><br/>
<br/><br/>
## My Journey in Science In Pictures
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial;
}

/* The grid: Four equal columns that floats next to each other */
.column {
  float: left;
  width: 25%;
  padding: 10px;
}

/* Style the images inside the grid */
.column img {
  opacity: 0.8; 
  cursor: pointer; 
}

.column img:hover {
  opacity: 1;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* The expanding image container */
.container {
  position: relative;
  display: none;
}

/* Expanding image text */
#imgtext {
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  font-size: 20px;
}

/* Closable button inside the expanded image */
.closebtn {
  position: absolute;
  top: 10px;
  right: 15px;
  color: white;
  font-size: 35px;
  cursor: pointer;
}
</style>
</head>
<body>

<div style="text-align:center">
  <h2>Tabbed Image Gallery</h2>
  <p>Click on the images below:</p>
</div>

<!-- The four columns -->
<div class="row">
  <div class="column">
    <img src="babyjtelly.jpeg" alt="Little Me" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="janvi2_steps_ao.JPG" alt="Janvi AO Steps" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="graduation.JPG" alt="Graduation" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="vjgrad.jpeg" alt="Sister" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="aogang.jpeg" alt="Pittsburgh Friends" style="width:100%" onclick="myFunction(this);">
  </div>
</div>

<div class="container">
  <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
  <img id="expandedImg" style="width:100%">
  <div id="imgtext"></div>
</div>

<script>
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
</script>

</body>


