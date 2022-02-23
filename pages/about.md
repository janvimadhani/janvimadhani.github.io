---
layout: page
title: About
category: about
permalink: /about
---


<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">

<img src="./assets/img/headshot.jpeg" alt="headshot" width="400" style="padding: 10px;" align="right"/>
Hi, I'm Janvi! I'm a graduate student pursuing a PhD in Astrophysics at Johns Hopkins University in Baltimore, MD. I work with Drs. [Susan Kassin](https://www.susankassin.com/) and Charlotte Welker. You can find details about my current project using cosmological hydrodynamic simulations [here.](https://janvimadhani.github.io/simulation) As a researcher, I am most interested in answering cosmological questions
about the birth of the universe, inflation, dark energy driven expansion, and
structure formation and evolution. I am also interested in computationally
modeling cosmological phenomena to help us answer these questions. You can find a link to my CV [here](./Janvi_Curriculum_Vitae.pdf) or you can click the little book icon at the top right of the page. Outside of science, 
you can find me baking, painting, playing an instrument, out in nature, doing yoga, or 
reading a book! You can check out some of my recent interests like baking sourdough bread or film photography [here!](https://janvimadhani.github.io/fun)
<br/><br/>
<br/><br/>
## My Journey in Science In Pictures


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
    <img src="babyjtelly.jpeg" alt="Nature" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="janvi2_steps_ao.JPG" alt="Snow" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="graduation.JPG" alt="Mountains" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="vjgrad.jpeg" alt="Lights" style="width:100%" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="aogang.jpeg" alt="Lights" style="width:100%" onclick="myFunction(this);">
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
</html>


<!-- <figure>
  <img src="./assets/img/babyjtelly.jpeg" alt="babyj" width="400" style="padding: 10px;"/>
  <figcaption>My parents nourished my scientific curiosity from a young age. Pictured is me receiving a telescope for Diwali. I never figured out how to use it and before I could, I lost the eyepiece. Oops!</figcaption>
</figure>


<figure>
  <img src="./assets/img/janvi2_steps_ao.JPG" alt="AOSteps" width="400" style="padding: 10px;"/>
  <figcaption>Pictured is me on the steps of the historic Allegheny Observatory in Riverside Park, Pittsburgh, PA -- my science home for many years! </figcaption>
</figure>


<! -- I remember the first time I looked through a tube of a telescope. It was the 2016 open house at the [Allegheny Observatory](https://sites.pitt.edu/~aobsvtry/). My vision blurred by both emotion and bad eyesight, I could not even make out the boundaries of what I was looking at, a cluster of stars 3 million light years away. I felt tiny, insignificant, alone, amazed, and immensely grateful for our existence here on Earth. However, it was not until I became active in research, in my sophomore year of college, that I realized what a tremendous opportunity we have as scientists and humans to immerse ourselves in the largest scales of cosmology and simultaneously live and breathe in our shared humanity. This is a lens I am privileged and grateful to look through every day as an astrophysicist. -->



<figure>
  <img src="./assets/img/graduation.JPG" alt="graduation" width="400" style="padding: 10px;"/>
  <figcaption> I graduated with Honors from the University of Pittsburgh with a Bachelor's degree in Physics and Astronomy in 2019, alongside my two brilliant friends pictured above (Left to right: Vic, Em, Janvi)</figcaption>
</figure>


<figure>
  <img src="./assets/img/vjgrad.jpeg" alt="vgraduation" width="400" style="padding: 10px;"/>
  <figcaption> Nothing is as empowering as the support of my family. Pictured is me with my best friend and sister, Brinda. She is an incredibly educator who has taught me everything I know about science communication and education!</figcaption>
</figure>


<!--In the spring of 2019, I graduated from the University of Pittsburgh with a Bachelor's degree in Physics and Astronomy, alongside my two brilliant friends pictured above (Left to right: Vic, Em, Janvi). 

In 2020, in the midst of the pandemic, I moved to Baltimore and started my PhD at Johns Hopkins University where the atmosphere was charged with excitement over the upcoming launch of JWST happening just across the street at Space Telescope Science Institute. 

Two years later, I have found my science home working with Dr. Susan Kassin and the Slice and Dice Galaxy group, primarily at Space Telescope Science Institute and Johns Hopkins. We study everything from gas outflows, galactic winds, galaxy kinematics to large scale structure and the cosmic web. We are a group of both observers and theorists. Learn more about the fantastic scientists in our group by visiting our website, [here!](https://www.susankassin.com/sliceanddice) --> -->

