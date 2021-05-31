
// DOM Elements
const refrshBtn = document.querySelectorAll(".refresh-info");
// launch modal event
refrshBtn.forEach((btn) => btn.addEventListener("click", readJson));


function link(id) {
window.location.href = "photographe.html?"+id;}


function readJson () {
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
      }
    };
    xhttp.open("GET", "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json", true);
    xhttp.send();
}

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
