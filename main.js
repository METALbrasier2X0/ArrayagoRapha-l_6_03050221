// DOM Elements
const form = document.getElementById("form");
const refrshBtn = document.querySelectorAll(".refresh-info");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
// launch modal event
refrshBtn.forEach((btn) => btn.addEventListener("click", run));


// fonction fetch
function readjson () {
   return fetch('FishEyeData.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
     .then(json => {
       var result = json;
       var dataphoto = result;
       return dataphoto;
     })
   .catch(function () {
       this.dataError = true;
   })
}

// Differentes fonctions pour recuperer les infos précises du json

                    function get_id(dataphoto){

                    var page_id_raw = window.location.search;
                    var page_id = page_id_raw.substring(1);

                                for (var i = 0; i < dataphoto.length; i++){
                                // look for the entry with a matching `code` value
                                if (dataphoto[i].id == page_id){
                                  var current_photographer = dataphoto[i];
                                  return current_photographer;
                                }
                              }
                            }


                    function get_media_list(datamedia){

                    var page_id_raw = window.location.search;
                    var page_id = page_id_raw.substring(1);
                    var medialist = [];

                                for (var i = 0; i < datamedia.length; i++){
                                if (datamedia[i].photographerId == page_id){
                                  medialist.push(datamedia[i]);
                                }
                              }
                              return medialist;
                            }


                            function get_id_by_tag(tag){
                              readjson().then((value) => {
                                    var dataphoto = value.photographers.filter(photographers=> photographers.tags.includes(tag));
                                    applytag(dataphoto);
                                    }
                                )}

                                function set_tag(tag){
                                  localStorage.setItem('montag', tag);
                                  window.location.replace("http://localhost/projet-6/index.html");
                                }

// Different method pour filtrer

function filter_by_like(current_photographer_media){const sortedphotos = current_photographer_media.sort((a, b) => { return b.likes - a.likes; });}
function filter_by_date(current_photographer_media){const sortedphotos = current_photographer_media.sort((a, b) => { let da = new Date(a.date), db = new Date(b.date);return da - db; });}
function filter_by_title(current_photographer_media){

const sortedphotos = current_photographer_media.sort((a, b) => {
let fa = a.title.toLowerCase(),
    fb = b.title.toLowerCase();

if (fa < fb) {
    return -1;
}
if (fa > fb) {
    return 1;
}
return 0;
});}

// Fonctions pour afficher les photographes et leurs infos en ajax

function link(id) {
window.location.href = "photographe.html?"+id;}


        function readTextFile(file, callback) {
            var rawFile = new XMLHttpRequest();
            rawFile.overrideMimeType("application/json");
            rawFile.open("GET", file, true);
            rawFile.onreadystatechange = function() {
                if (rawFile.readyState === 4 && rawFile.status == "200") {
                    callback(rawFile.responseText);
                }
            }
            rawFile.send(null);
        }

function applytag(dataphoto) {
  e = document.getElementById("list-photographer");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;}

    indexset(dataphoto)
}

        function indexset(dataphoto) {
          for (var i = 0; i < dataphoto.length; i++) {
            var objphotographe = dataphoto[i] ;
            var finaltag = ""
                for (var a = 0; a < objphotographe.tags.length; a++) {
                  var tag = objphotographe.tags[a];
                  finaltag = finaltag+'<span class="tag" aria-label="Tag" onclick="get_id_by_tag(this.innerHTML)">'+tag+'</span>'
                }

                    document.getElementById("list-photographer").innerHTML +=
                      '<div class="list-photographer-item"> <a id="'+objphotographe.id+'" onClick="link(this.id)" href="#"><div class="list-photographer-item__img"><img class="list-photographer-item__img__content" alt="'+objphotographe.alt+'" src="img/ID/'+objphotographe.portrait+'" alt=""></div><h3 class="list-photographer-item__name" >'+objphotographe.name+'</h3><div class="list-photographer-item__caption"><p class="list-photographer-item__caption__location">'+objphotographe.city+'</p><p class="list-photographer-item__caption__phrase">'+objphotographe.tagline+'</p><p class="list-photographer-item__caption__price">'+objphotographe.price+'$ par jour</p></div></a><div class="list-photographer-item__tags">'+finaltag+'</div></div>';}
                 }


                function photographeset() {

                          readTextFile("FishEyeData.json", function(text){
                            var data = JSON.parse(text);
                            var dataphoto = data.photographers;
                            get_id(dataphoto)
                            var current_photographer = get_id(dataphoto);

                            var finaltag = ""
                                for (var a = 0; a < current_photographer.tags.length; a++) {
                                  var tag = current_photographer.tags[a];
                                  finaltag = finaltag+'<span class="tag" aria-label="Tag" onclick="set_tag(this.innerHTML)">'+tag+'</span>'
                                }
                            document.getElementById("photographer-info").innerHTML +=
                              '  <div class="top-info"> <h2 class="photographer-info__name" >'+current_photographer.name+'</h3>   <a aria-label="Contact me" href"#" class="contact-info" onclick="launchModalcontact()">Contactez moi</a></div> <div class="photographer-info__caption"> <p class="photographer-info__caption__location">'+current_photographer.city+'</p> <p class="photographer-info__caption__phrase">'+current_photographer.tagline+'</p> <div class="navigation navigation-photo" aria-label="photographer categories">'+finaltag+'</div> <div class="photographer-info__img"><img class="photographer-info__img__content" alt="'+current_photographer.alt+'" src="img/ID/'+current_photographer.portrait+'" alt=""> </div>';   document.getElementById("stats").innerHTML +=
                                  ' <p>'+current_photographer.likes+'<i onClick="addlike()" class="fas fa-heart" aria-hidden="true"></i></p><p>'+current_photographer.price+'$</p>';


                        });  }


// Foctory pattern pour afficher montrer et instencier les medias pour chaque photographes

function Creator() {

    this.createPhotographe = function (type, data, order) {
        var photographe;
        if (type === "image") {
            photographe = new Photo(data, order);
        } else if (type === "video") {
            photographe = new Video(data, order);
        }

        photographe.type = type;

        photographe.say = function () {
          if (this.image == undefined) {
          log.add(this.video);
          }else {
          log.add(this.image);
          }


        }

        return photographe;
    }
}

var Photo = function (data, order) {
    this.image = data.image;
    this.name = data.title;
    this.likes =  data.likes;
    this.order = order;
    this.alt =  data.alt;
    log.appendphoto(this.image, this.name, this.likes, this.order, this.alt =  data.alt);
};

var Video = function (data, order) {
    this.video = data.video;
    this.name = data.title;
    this.likes =  data.likes;
    this.order = order;
    this.alt =  data.alt;
    log.appendphoto(this.video, this.name, this.likes, this.order, this.alt =  data.alt);
};

// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) {log += msg + "\n"; },
        show: function () { alert(log); log = ""; },
        appendphoto : function (msg, name, likes, order, alt) {

        if(msg.match(/(\w*)\.mp4$/) !== null){  let img = document.createElement("video"); img.src = msg; img.classList.add ("list-photographer-item__img__content"); img.title = alt;
          let divtext = document.createElement("div"); divtext.classList.add ("work-photographer-text");
          let namephoto = document.createElement("h4"); namephoto.innerHTML = name; namephoto.classList.add ("work-photographer-item__name");
          let plikes = document.createElement("p"); plikes.classList.add ("work-photographer-item__likes"); plikes.innerHTML = likes+'<i class="fas fa-heart" aria-hidden="true"></i>';
          let div = document.createElement("div"); div.classList.add ("work-photographer-item__img");
          let divphoto = document.createElement("div"); divphoto.classList.add ("work-photographer-item");
          div.appendChild(img); divphoto.appendChild(div);  divphoto.appendChild(divtext) ; divtext.appendChild(namephoto);divtext.appendChild(plikes);  document.getElementById("work-photographer").appendChild(divphoto); divphoto.setAttribute("onclick", 'set_modal_gal('+order+')' );}


        else {
          let img = document.createElement("img"); img.src = msg; img.classList.add ("list-photographer-item__img__content"); img.alt = alt;
          let divtext = document.createElement("div"); divtext.classList.add ("work-photographer-text");
          let namephoto = document.createElement("h4"); namephoto.innerHTML = name; namephoto.classList.add ("work-photographer-item__name");
          let plikes = document.createElement("p"); plikes.classList.add ("work-photographer-item__likes"); plikes.innerHTML = likes+'<i class="fas fa-heart" aria-hidden="true"></i>';
          let div = document.createElement("div"); div.classList.add ("work-photographer-item__img");
          let divphoto = document.createElement("div"); divphoto.classList.add ("work-photographer-item");
          div.appendChild(img); divphoto.appendChild(div);  divphoto.appendChild(divtext) ; divtext.appendChild(namephoto);divtext.appendChild(plikes);  document.getElementById("work-photographer").appendChild(divphoto); divphoto.setAttribute("onclick", 'set_modal_gal('+order+')' );
        }
      },

    }
})();

function run() {

    readjson().then((value) => {
    var trie = document.getElementById("trie-select").value;
    var current_photographer_media = get_media_list(value.media);
    var photographes = [];
    var creator = new Creator();
    if (trie == "Popularité") {
      filter_by_like(current_photographer_media)
    }else if (trie == "Date") {
      filter_by_date(current_photographer_media)
    }else if (trie == "Titre") {
      filter_by_title(current_photographer_media)
    }else {

    }
      for (var i = 0; i < current_photographer_media.length; i++) {
    photographes.push(creator.createPhotographe(current_photographer_media[i].type, current_photographer_media[i], i));
}

    for (var i = 0, len = photographes.length; i < len; i++) {
        photographes[i].say();
    }

})
}

function filterchange(){
  g = document.getElementById("work-photographer");
  var child = g.lastElementChild;
  while (child) {
    g.removeChild(child);
    child = g.lastElementChild;};
    run();
}

function addlike(){
  readjson().then((value) => {
  var current_photo = get_id(value.photographers)
  console.log(current_photo);
  current_photo.likes = current_photo.likes + 1 ;
  console.log(current_photo.likes);
})
}
