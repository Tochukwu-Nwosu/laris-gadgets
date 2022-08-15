
var obj = document.getElementById("topnav");

var heart = document.getElementById("heart");

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

// THis function will change the like button
function changeHeart() {
  if (heart.className === "fa-regular fa-heart") {
    heart.className = "fa fa-heart";
  }
  else {
    heart.className = "fa-regular fa-heart"
  }
}