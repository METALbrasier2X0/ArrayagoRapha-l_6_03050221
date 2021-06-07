
// DOM Elements
const modalbgcontact = document.querySelector(".bground-contact");
const modalbgphoto = document.querySelector(".bground-photo");
const modalBtn = document.querySelectorAll(".contact-info");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModalcontact));


// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModalcontact));



// launch modal form
function launchModalcontact() {
  modalbgcontact.style.display = "block";
}

// close modal form
function closeModalcontact() {

  document.getElementById("form").reset();
  modalbgcontact.style.display = "none";
  document.getElementById("valid-content").style.display = "none";
  document.getElementById("valid").style.display = "none";
}


if(window.scrollY==0){
  document.getElementById("top").style.display = "none";}

// .className = "error";
