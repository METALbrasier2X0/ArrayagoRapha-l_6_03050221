
// DOM Elements
const refrshBtn = document.querySelectorAll(".refresh-info");
// launch modal event
refrshBtn.forEach((btn) => btn.addEventListener("click", indexset));

window.onload = function() {
  indexset();
};

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


function Creator() {
    this.createPhotographe = function (type) {
        var photographe;

        if (type === "fulltime") {
            photographe = new FullTime();
        } else if (type === "parttime") {
            photographe = new PartTime();
        } else if (type === "temporary") {
            photographe = new Temporary();
        } else if (type === "contractor") {
            photographe = new Contractor();
        }

        photographe.type = type;

        photographe.say = function () {
            log.add(this.type + ": rate " + this.hourly + "/hour");
        }

        return photographe;
    }
}

var FullTime = function () {
    this.hourly = "$12";
};

var PartTime = function () {
    this.hourly = "$11";
};

var Temporary = function () {
    this.hourly = "$10";
};

var Contractor = function () {
    this.hourly = "$15";
};

// log helper
var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; },
    }
})();

function run() {
    var photographes = [];
    var creator = new Creator();

    photographes.push(creator.createPhotographe("fulltime"));
    photographes.push(creator.createPhotographe("parttime"));
    photographes.push(creator.createPhotographe("temporary"));
    photographes.push(creator.createPhotographe("contractor"));

    for (var i = 0, len = photographes.length; i < len; i++) {
        photographes[i].say();
    }

    log.show();
}
