
var obj = document.getElementById("topnav");

var heart1 = document.getElementById("heart1");
var heart2 = document.getElementById("heart2");
var heart3 = document.getElementById("heart3");

// This function opens and closes the .nav-link.responsive via the hamburger icon.
function collapse() {
  if (obj.className === "nav-links") {
    obj.className += " responsive";     // Activates .nav-link.responsive NOTE: notice the space before 'responsive'.
  } 
  else {
    obj.className = "nav-links";   // Deactivates .nav-link.responsive & Activates .nav-links
  }
}

// This function will close the .nav-links.responsive if any area of .nav-link is clicked.
obj.addEventListener('click', close); 

function close(){
  obj.className = "nav-links";
}

// These functions will change the like button

function changeHeart1() {
  if (heart1.className === "fa-regular fa-heart") {
    heart1.className = "fa fa-heart";
  }
  else {
    heart1.className = "fa-regular fa-heart"
  }
}

function changeHeart2() {
  if (heart2.className === "fa-regular fa-heart") {
    heart2.className = "fa fa-heart";
  }
  else {
    heart2.className = "fa-regular fa-heart"
  }
}

function changeHeart3() {
  if (heart3.className === "fa-regular fa-heart") {
    heart3.className = "fa fa-heart";
  }
  else {
    heart3.className = "fa-regular fa-heart"
  }
}