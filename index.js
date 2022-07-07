function myFunction() {
    var obj = document.getElementById("topnav");
    if (obj.className === "nav-links") {
      obj.className += " responsive";
    } else {
      obj.className = "nav-links";
    }
  }