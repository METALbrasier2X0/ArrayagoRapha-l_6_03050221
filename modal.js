
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



// test code modal

//création d'un tableau d'image (pour simplifier le parcours par la suite)
let col = ["red","green","blue","gray","pink"];
let els = [];
//element courant de la galerie
let curel = 0;

//Création des éléments html
for(let cur of col)
{
	els.push(document.createElement("p"));
  els[els.length-1].className = cur;
  document.body.appendChild(els[els.length-1]);
}

//création du boutton suivant
let but = document.createElement("button");
but.textContent="next";
//au click sur le boutton suivant
but.onclick=(ev)=>{
//on réinitialise l'affichage de toutes les images (autres que celle que l'on veut afficher)
	for(let el of els)
  	el.style.display="none";
    //on choisit l'image que l'on veut afficher (curel++) après la première image on passe à la suivante(avec ++) puis on prend le reste de la division(modulo (%), c'est à dire 1%5 = 1, 5%5 =0 7%5 = 2, 15%5 =0) par rapport au nombre d'images que l'on as à disposition (els.length)
	els[(curel++)%els.length].style.display="inline";
};
document.body.appendChild(but);
