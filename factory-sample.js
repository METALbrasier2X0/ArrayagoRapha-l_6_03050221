
// DOM Elements
const modalBtn = document.querySelectorAll(".contact-info");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", run));

//
// readJson () {
//    // http://localhost:8080
//    fetch('/Reading/api/file')
//    .then(response => {
//        if (!response.ok) {
//            throw new Error("HTTP error " + response.status);
//        }
//        return response.json();
//    })
//    .then(json => {
//        this.users = json;
//        //console.log(this.users);
//    })
//    .catch(function () {
//        this.dataError = true;
//    })
// }


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
