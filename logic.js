let challenges = {
    "ch1":false,
    "log1":"Why is this here?",
    "ch2a":"",
    "ch2b":"",
    "log2":"What...? Ok, but who did this?"
};

// Wait. that was JS! An object! If you see this... keep going. Use your tools.

let cha1 = document.getElementById("cha1");
let tOrF = document.getElementById("trueOrFalse");

function loop() {
    if (challenges.ch1) {
        tOrF.innerHTML = "True";
        document.getElementById("ch1p").style.visibility = "visible"
    }
};

setInterval(loop,16.67);

