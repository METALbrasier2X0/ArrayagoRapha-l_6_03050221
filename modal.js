
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

// close modal form
function closeModalcontact() {

  p = document.getElementById("modal-body-photo");
  var child = p.lastElementChild;
  while (child) {
    p.removeChild(child);
    child = p.lastElementChild;};

  document.getElementById("form").reset();
  modalbgcontact.style.display = "none";
  document.getElementById("modal-body-photo");
  modalbgphoto.style.display = "none";
  document.getElementById("valid-content").style.display = "none";
  document.getElementById("valid").style.display = "none";


}


if(window.scrollY==0){
  document.getElementById("top").style.display = "none";}



// // .className = "error";
// function nextphoto() {
//   document.getElementById("modal-image").src="img/Nabeel/Portrait_Sunkissed.jpg";
// }
//
// function previousphoto() {
//   document.getElementById("modal-image").src="img/Nabeel/Travel_Boat_Wanderer.jpg";
// }

function set_modal_gal(curel){
  modalbgphoto.style.display = "block";
  // test code modal
  readjson().then((value) => {
  var current_photographer_media = get_media_list(value.media);

  var photographes = [];
  let col = [];
  var creator = new Creator();
    for (var i = 0; i < current_photographer_media.length; i++) {
  col.push(current_photographer_media[i].image)
}
  //création d'un tableau d'image (pour simplifier le parcours par la suite)
  let els = [];
  //element courant de la galerie

  //Création des éléments html
  for(let cur of col)
  {
  	els.push(document.createElement("img"));
    els[els.length-1].src = cur;
    els[els.length-1].className = "list-photographer-item__img__content";
    document.getElementById("modal-body-photo").appendChild(els[els.length-1]);
  }
  console.log(els);
  for(let el of els)
    el.style.display="none";
    //on choisit l'image que l'on veut afficher (curel++) après la première image on passe à la suivante(avec ++) puis on prend le reste de la division(modulo (%), c'est à dire 1%5 = 1, 5%5 =0 7%5 = 2, 15%5 =0) par rapport au nombre d'images que l'on as à disposition (els.length)
  els[(curel)].style.display="block";

  //création du boutton suivant
  let butnext = document.createElement("i");
  butnext.className="arrow right next-photo";
  //au click sur le boutton suivant
  butnext.onclick=(ev)=>{
  //on réinitialise l'affichage de toutes les images (autres que celle que l'on veut afficher)
  	for(let el of els)
    	el.style.display="none";
  	els[(curel++)%els.length].style.display="block";  console.log(curel);
  };

  let butprev = document.createElement("i");
  butprev.className="arrow left previous-photo";
  //au click sur le boutton precedant
  butprev.onclick=(ev)=>{
  //on réinitialise l'affichage de toutes les images (autres que celle que l'on veut afficher)
    for(let el of els)
      el.style.display="none";
      //on choisit l'image que l'on veut afficher (curel++) après la première image on passe à la suivante(avec ++) puis on prend le reste de la division(modulo (%), c'est à dire 1%5 = 1, 5%5 =0 7%5 = 2, 15%5 =0) par rapport au nombre d'images que l'on as à disposition (els.length)
    els[(curel--)%els.length].style.display="block";  console.log(curel);
    if (curel==0 || curel==-1) {
      curel = els.length;
    }
  };
    document.getElementById("modal-body-photo").appendChild(butnext);
    document.getElementById("modal-body-photo").appendChild(butprev);

})
}
