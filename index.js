function myFunction() {
    var obj = document.getElementById("topnav");
    if (obj.className === "nav-links") {
      obj.className += " responsive";
    } else {
      obj.className = "nav-links";
    }
  }

  const topNav = document.querySelector('#topnav');
  topNav.addEventListener('click', close);

  function close(){
    var obj = document.getElementById("topnav");
    obj.className = "nav-links";
  }