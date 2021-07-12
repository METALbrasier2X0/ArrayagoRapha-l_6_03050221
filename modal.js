
// DOM Elements
const modalbgcontact = document.querySelector(".bground-contact");
const modalbgphoto = document.querySelector(".bground-photo");
const modalBtn = document.querySelectorAll(".contact-info");
const modalBtnphoto = document.querySelectorAll(".work-photographer-item");
const modalBtnphotonext = document.querySelectorAll(".next-photo");
const modalBtnphotoprevious = document.querySelectorAll(".previous-photo");
const closeBtn = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModalcontact));
modalBtnphoto.forEach((btn) => btn.addEventListener("click", launchModalphoto));
modalBtnphotonext.forEach((btn) => btn.addEventListener("click", nextphoto));
modalBtnphotoprevious.forEach((btn) => btn.addEventListener("click", previousphoto));

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModalcontact));


// launch modal form
function launchModalcontact() {
  modalbgcontact.style.display = "block";
}
function launchModalphoto() {
  modalbgphoto.style.display = "block";
}
// close modal form
function closeModalcontact() {

  document.getElementById("form").reset();
  modalbgcontact.style.display = "none";
  modalbgphoto.style.display = "none";
  document.getElementById("valid-content").style.display = "none";
  document.getElementById("valid").style.display = "none";
}


if(window.scrollY==0){
  document.getElementById("top").style.display = "none";}

  

// .className = "error";
function nextphoto() {
  document.getElementById("modal-image").src="img/Nabeel/Portrait_Sunkissed.jpg";
}

function previousphoto() {
  document.getElementById("modal-image").src="img/Nabeel/Travel_Boat_Wanderer.jpg";
}
