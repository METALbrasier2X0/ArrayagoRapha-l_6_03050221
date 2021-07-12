// DOM Elements
const refrshBtn = document.querySelectorAll(".refresh-info");
// launch modal event
refrshBtn.forEach((btn) => btn.addEventListener("click", run));

window.onload = function() {
  indexset();
  photographeset();
};


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
       var dataphoto = result.photographers;
       // console.log(result);
       // console.log(dataphoto);
       return dataphoto;
     })
   .catch(function () {
       this.dataError = true;
   })
}


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




        function indexset() {

                  readTextFile("FishEyeData.json", function(text){
                    var data = JSON.parse(text);
                    var dataphoto = data.photographers;

          for (var i = 0; i < dataphoto.length; i++) {
            var objphotographe = dataphoto[i] ;
            var finaltag = ""
                for (var a = 0; a < objphotographe.tags.length; a++) {
                  var tag = objphotographe.tags[a];
                  finaltag = finaltag+'<p class="tag">'+tag+'</p>'
                }

                    document.getElementById("list-photographer").innerHTML +=
                      '<div class="list-photographer-item"> <a id="'+objphotographe.id+'" onClick="link(this.id)" href="#"><div class="list-photographer-item__img"><img class="list-photographer-item__img__content" src="img/ID/'+objphotographe.portrait+'" alt=""></div><h3 class="list-photographer-item__name" >'+objphotographe.name+'</h3><div class="list-photographer-item__caption"><p class="list-photographer-item__caption__location">'+objphotographe.city+'</p><p class="list-photographer-item__caption__phrase">'+objphotographe.tagline+'</p><p class="list-photographer-item__caption__price">'+objphotographe.price+'$ par jour</p></div><div class="list-photographer-item__tags">'+finaltag+'</div></a></div>';}
                });  }




                function photographeset() {

                          readTextFile("FishEyeData.json", function(text){
                            var data = JSON.parse(text);
                            var dataphoto = data.photographers;
                            get_id(dataphoto)
                            var current_photographer = get_id(dataphoto);
                            console.log(current_photographer);

                            var finaltag = ""
                                for (var a = 0; a < current_photographer.tags.length; a++) {
                                  var tag = current_photographer.tags[a];
                                  finaltag = finaltag+'<p class="tag">'+tag+'</p>'
                                }

                            document.getElementById("photographer-info").innerHTML +=
                              '  <div class="top-info"> <h2 class="photographer-info__name" >'+current_photographer.name+'</h3>   <a href"#" class="contact-info">Contactez moi</a></div> <div class="photographer-info__caption"> <p class="photographer-info__caption__location">'+current_photographer.city+'</p> <p class="photographer-info__caption__phrase">'+current_photographer.tagline+'</p> <div class="navigation navigation-photo" aria-label="photographer categories">'+finaltag+'</div> <div class="photographer-info__img"><img class="photographer-info__img__content" src="img/ID/'+current_photographer.portrait+'" alt=""> </div>';
                        });  }






function Creator() {

  readjson().then((value) => {
  console.log(value);})

    this.createPhotographe = function (type) {
        var photographe;

        if (type === "photo") {
            photographe = new Photo();
        } else if (type === "video") {
            photographe = new Video();
        }

        photographe.type = type;

        photographe.say = function () {
            log.add(this.image);

        }

        return photographe;
    }
}

var Photo = function () {
    this.image = "img/Ellie Rose/Sport_Jump.jpg";
    log.appendphoto(this.image);
};

var Video = function () {
    this.image = "img/ID/EllieRoseWilkens.jpg";
    log.appendphoto(this.image);
};

// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) {console.log(msg); log += msg + "\n"; },
        show: function () { alert(log); log = ""; },
        appendphoto : function (msg) { let img = document.createElement("img"); img.src =  msg; img.classList.add ("list-photographer-item__img__content");  let div = document.createElement("div"); div.classList.add ("work-photographer-item__img"); div.appendChild(img);  document.body.appendChild(div);  },

    }
})();

function run() {
    var photographes = [];
    var creator = new Creator();

    photographes.push(creator.createPhotographe("photo"));

    photographes.push(creator.createPhotographe("video"));


    for (var i = 0, len = photographes.length; i < len; i++) {
        photographes[i].say();
    }

}
