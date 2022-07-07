var obj = document.getElementById("topnav");

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