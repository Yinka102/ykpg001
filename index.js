function readMoreText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less";
      moreText.style.display = "inline";
      moreText.style.backgroundColor = 'green';
      moreText.scrollIntoView({ behavior: 'smooth', block:'start'});
      aboutAthor();
    }
  }

  function aboutAthor () {
    var aboutMe = document.getElementsByClassName('about');
    aboutMe.scrollIntoView({ behavior: 'smooth', block:'start'});
  }

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // Get the current year
const currentYear = new Date().getFullYear();

// Update the footer content
document.getElementById("currentYear").textContent = currentYear;

document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');

  emailInput.addEventListener('input', function() {
    if (emailInput.validity.valid) {
      emailError.style.display = 'none';
    } else {
      emailError.style.display = 'block';
    }
  });
});