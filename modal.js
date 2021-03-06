
// DOM Elements
const modalbgcontact = document.querySelector(".bground-contact");
const modalbgphoto = document.querySelector(".bground-photo");
const modalBtn = document.querySelectorAll(".contact-info");
const modalBtnphoto = document.querySelectorAll(".work-photographer-item");
const modalBtnphotonext = document.querySelectorAll(".next-photo");
const modalBtnphotoprevious = document.querySelectorAll(".previous-photo");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtnphotonext.forEach((btn) => btn.addEventListener("click", nextphoto));
modalBtnphotoprevious.forEach((btn) => btn.addEventListener("click", previousphoto));
// close modal event
document.getElementById("close-photo").addEventListener("click", closeModalphoto);
document.getElementById("close-contact").addEventListener("click", closeModalcontact);
// launch modal form
function launchModalcontact() {
  modalbgcontact.style.display = "block";
}

// close modal form
function closeModalcontact() {
  document.getElementById("form").reset();
  modalbgcontact.style.display = "none";
};

function closeModalphoto() {
  p = document.getElementById("modal-body-photo");
  var child = p.lastElementChild;
  while (child) {
    p.removeChild(child);
    child = p.lastElementChild;};
    document.getElementById("modal-body-photo");
    modalbgphoto.style.display = "none";
};




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
  var trie = document.getElementById("trie-select").value;
  var creator = new Creator();
  if (trie == "Popularit√©") {
    filter_by_like(current_photographer_media)
  }else if (trie == "Date") {
    filter_by_date(current_photographer_media)
  }else if (trie == "Titre") {
    filter_by_title(current_photographer_media)
  }else {

  }
    for (var i = 0; i < current_photographer_media.length; i++) {

        if (current_photographer_media[i].image == undefined) {
          col.push(current_photographer_media[i].video);
        }else {
            col.push(current_photographer_media[i].image);
        };


}
  //cr√©ation d'un tableau d'image (pour simplifier le parcours par la suite)
  let lesimages = [];
  //element courant de la galerie
  for(let i = 0;i<col.length;i++)
  {
    if(col[i].match(/(\w*)\.mp4$/) !== null){
        lesimages.push(document.createElement("video"))
        lesimages[lesimages.length-1].src=col[i];
        lesimages[lesimages.length-1].classList.add ("list-photographer-item__img__content");
        lesimages[lesimages.length-1].title = current_photographer_media[i].alt;
        lesimages[lesimages.length-1].autoplay = true;
        lesimages[lesimages.length-1].loop = true;
        document.getElementById("modal-body-photo").appendChild(lesimages[lesimages.length-1]);
    }else {
      lesimages.push(document.createElement("img"))
      lesimages[lesimages.length-1].src=col[i];
      lesimages[lesimages.length-1].classList.add ("list-photographer-item__img__content");
      lesimages[lesimages.length-1].alt = current_photographer_media[i].alt;
      document.getElementById("modal-body-photo").appendChild(lesimages[lesimages.length-1]);
    };
  }

  //cr√©ation du boutton suivant
  let butnext = document.createElement("i");
  butnext.className="arrow right next-photo";


  //cr√©ation du boutton pr√©cedant
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
      if (curel == 0 ||curel == -1) {
        curel = lesimages.length;
      }
   lesimages[Math.abs((--curel)%lesimages.length)].style.display="block";
  }


  butnext.onclick=(e)=>{
  	for(let cur of lesimages)
    	cur.style.display="none";

   lesimages[Math.abs((++curel)%lesimages.length)].style.display="block";
  }

  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'√©v√©nement de la touche √©tait d√©j√† consomm√©.
    }

  switch (event.key) {
      case "ArrowLeft":
      for(let cur of lesimages)
        cur.style.display="none";
        if (curel == 0 ||curel == -1) {
          curel = lesimages.length;
        }
     lesimages[Math.abs((--curel)%lesimages.length)].style.display="block";
          break;
      case "ArrowRight":
      for(let cur of lesimages)
        cur.style.display="none";

     lesimages[Math.abs((++curel)%lesimages.length)].style.display="block";
          break;
          case "Escape":
     closeModalphoto();
     break;
  }
});


butnext.setAttribute('aria-label', 'Next image');
butprev.setAttribute('aria-label', 'Previous image');

})
}
