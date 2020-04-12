var challenges = {
  ch1: false,
  log1: "Why is this here?",
  ch2a: "VGhpcyBpcyB0aGUgY29ycmVjdCBhbnN3ZXIu",
  ch2b: "",
  log2: "What...? Ok, but who did this? Nevermind that. Why?",
};

// Wait. that was JS! An object! If you see this... keep going. Use your tools.

var cha1 = document.getElementById("ch1");
var cha2 = document.getElementById("ch2");

function loop() {
  if (challenges.ch1) {
    document.getElementById("correct1").innerHTML = "Engaged";
    document.getElementById("ch1p").style.visibility = "visible";
    cha2.style.visibility = "visible";
  }

  if (btoa(challenges.ch2a) == challenges.ch2b) {
    //Btoa. never heard of it. there isn't even an function definition. if you know what this is please do what you need to do.
    document.getElementById("correct2").innerHTML = "Correct";
    document.getElementById("ch2p").style.visibility = "visible";
  }
}

setInterval(loop, 16.67);
