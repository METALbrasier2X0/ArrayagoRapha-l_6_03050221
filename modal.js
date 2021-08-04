
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
  // test code modalc
  readjson().then((value) => {
  var current_photographer_media = get_media_list(value.media);
  const col = []
  var photographes = [];
  var creator = new Creator();
    for (var i = 0; i < current_photographer_media.length; i++) {
   col.push(current_photographer_media[i].image)
}
  //création d'un tableau d'image (pour simplifier le parcours par la suite)
  let lesimages = [];
  //element courant de la galerie
  for(let i = 0;i<col.length;i++)
  {
  	lesimages.push(document.createElement("img"))
    lesimages[lesimages.length-1].src=col[i];
    lesimages[lesimages.length-1].classList.add ("list-photographer-item__img__content");
    document.getElementById("modal-body-photo").appendChild(lesimages[lesimages.length-1])
  }

  //création du boutton suivant
  let butnext = document.createElement("i");
  butnext.className="arrow right next-photo";

  //création du boutton précedant
  let butprev = document.createElement("i");
  butprev.className="arrow left previous-photo";


  for(let cur of lesimages){
    cur.style.display="none";

 lesimages[curel].style.display="block";}


    document.getElementById("modal-body-photo").appendChild(butnext);
    document.getElementById("modal-body-photo").appendChild(butprev);


    butprev.onclick=(e)=>{
  	for(let cur of lesimages)
    	cur.style.display="none";

   lesimages[Math.abs((--curel)%lesimages.length)].style.display="block";
  }


  butnext.onclick=(e)=>{
  	for(let cur of lesimages)
    	cur.style.display="none";

   lesimages[Math.abs((++curel)%lesimages.length)].style.display="block";
  }

})
}
