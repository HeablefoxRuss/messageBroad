let boldOn = false;
let italicsOn = false;
let underlineOn = false;
let strikeOn = false;
let superOn = false;
let subOn = false;
let fontOn = false;
let colorOn = false;
let codeOn = false;
let linkOn = false;
let emojiOn = false;
let diacriticOn = false;
let imageOn = false;
let videoOn = false;
let audioOn = false;
let websiteOn = false;
let youtubeOn = false;
let textVisible = true;
let mediaVisible = false;
let botsVisible = false;
let thumbsVisible = false;
let mysteryVisible = false;
let ubHidden = false;

function showText() {
  textVisible = true;
  document.getElementById("textButtons").classList.remove("hidden");
  mediaVisible = false;
  document.getElementById("mediaButton").src = "images/media.png";
  document.getElementById("mediaButtons").classList.add("hidden");
  botsVisible = false;
  document.getElementById("botsButton").src = "images/bots.png";
  document.getElementById("botButtons").classList.add("hidden");
  thumbsVisible = false;
  document.getElementById("thumbsButton").src = "images/thumbs.png";
  document.getElementById("thumbButtons").classList.add("hidden");
  mysteryVisible = false;
  document.getElementById("mysteryButton").src = "images/mystery.png";
  document.getElementById("mysteryButtons").classList.add("hidden");
}
function showMedia() {
  textVisible = false;
  document.getElementById("textButton").src = "images/text.png";
  document.getElementById("textButtons").classList.add("hidden");
  mediaVisible = true;
  document.getElementById("mediaButtons").classList.remove("hidden");
  botsVisible = false;
  document.getElementById("botsButton").src = "images/bots.png";
  document.getElementById("botButtons").classList.add("hidden");
  thumbsVisible = false;
  document.getElementById("thumbsButton").src = "images/thumbs.png";
  document.getElementById("thumbButtons").classList.add("hidden");
  mysteryVisible = false;
  document.getElementById("mysteryButton").src = "images/mystery.png";
  document.getElementById("mysteryButtons").classList.add("hidden");
}
function showBots() {
  textVisible = false;
  document.getElementById("textButton").src = "images/text.png";
  document.getElementById("textButtons").classList.add("hidden");
  mediaVisible = false;
  document.getElementById("mediaButton").src = "images/media.png";
  document.getElementById("mediaButtons").classList.add("hidden");
  botsVisible = true;
  document.getElementById("botButtons").classList.remove("hidden");
  thumbsVisible = false;
  document.getElementById("thumbsButton").src = "images/thumbs.png";
  document.getElementById("thumbButtons").classList.add("hidden");
  mysteryVisible = false;
  document.getElementById("mysteryButton").src = "images/mystery.png";
  document.getElementById("mysteryButtons").classList.add("hidden");
}
function showThumbs() {
  textVisible = false;
  document.getElementById("textButton").src = "images/text.png";
  document.getElementById("textButtons").classList.add("hidden");
  mediaVisible = false;
  document.getElementById("mediaButton").src = "images/media.png";
  document.getElementById("mediaButtons").classList.add("hidden");
  botsVisible = false;
  document.getElementById("botsButton").src = "images/bots.png";
  document.getElementById("botButtons").classList.add("hidden");
  thumbsVisible = true;
  document.getElementById("thumbButtons").classList.remove("hidden");
  mysteryVisible = false;
  document.getElementById("mysteryButton").src = "images/mystery.png";
  document.getElementById("mysteryButtons").classList.add("hidden");
}
function showMystery() {
  textVisible = false;
  document.getElementById("textButton").src = "images/text.png";
  document.getElementById("textButtons").classList.add("hidden");
  mediaVisible = false;
  document.getElementById("mediaButton").src = "images/media.png";
  document.getElementById("mediaButtons").classList.add("hidden");
  botsVisible = false;
  document.getElementById("botsButton").src = "images/bots.png";
  document.getElementById("botButtons").classList.add("hidden");
  thumbsVisible = false;
  document.getElementById("thumbsButton").src = "images/thumbs.png";
  document.getElementById("thumbButtons").classList.add("hidden");
  mysteryVisible = true;
  document.getElementById("mysteryButtons").classList.remove("hidden");
}

function bold() {
  if (!boldOn) {
    boldOn = true;
    document.getElementById("boldButton").src = "images/bold2.png";
    document.getElementById("inpoot").value += "<b>";
  } else {
    boldOn = false;
    document.getElementById("inpoot").value += "</b>";
  }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function italics() {
  if (!italicsOn) {
    italicsOn = true;
    document.getElementById("italicsButton").src = "images/italics2.png";
    document.getElementById("inpoot").value += "<i>";
      } else {
    italicsOn = false;
    document.getElementById("inpoot").value += "</i>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function underline() {
  if (!underlineOn) {
    underlineOn = true;
    document.getElementById("underlineButton").src = "images/underline2.png";
    document.getElementById("inpoot").value += "<u>";
      } else {
    underlineOn = false;
    document.getElementById("inpoot").value += "</u>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function strike() {
  if (!strikeOn) {
    strikeOn = true;
    document.getElementById("strikeButton").src = "images/strike2.png";
    document.getElementById("inpoot").value += "<s>";
      } else {
    strikeOn = false;
    document.getElementById("inpoot").value += "</s>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function sup() {
  if (!superOn) {
    superOn = true;
    document.getElementById("superButton").src = "images/super2.png";
    document.getElementById("inpoot").value += "<sup>";
      } else {
    superOn = false;
    document.getElementById("inpoot").value += "</sup>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function sub() {
  if (!subOn) {
    subOn = true;
    document.getElementById("subButton").src = "images/sub2.png";
    document.getElementById("inpoot").value += "<sub>";
      } else {
    subOn = false;
    document.getElementById("inpoot").value += "</sub>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function font() {
  if (!fontOn) {
    fontOn = true;
    document.getElementById("fontButton").src = "images/font2.png";
    document.getElementById("fMenu").classList.toggle("hidden");
    console.log("font");
  } else if (fontOn == "selected") {
    fontOn = false;
    document.getElementById("inpoot").value += "</span>";
  } else {
    fontOn = false;
    document.getElementById("fMenu").classList.toggle("hidden");
  }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function fontSelect(f) {
  fontOn = "selected";
  document.getElementById("fMenu").classList.toggle("hidden");
  document.getElementById("inpoot").value += "<span style='font-family: " + f + ";'>";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function color() {
  if (!colorOn) {
    colorOn = true;
    document.getElementById("colorButton").src = "images/color2.png";
    document.getElementById("cMenu").classList.remove("hidden");
  } else if (colorOn == "selected") {
    colorOn = false;
    document.getElementById("inpoot").value += "</span>";
      } else {
    colorOn = false;
    document.getElementById("cMenu").classList.add("hidden");
  }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function colorSelect(c) {
  colorOn = "selected";
  document.getElementById("cMenu").classList.add("hidden");
  document.getElementById("inpoot").value += "<span style='color: " + c + ";'>";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function colorHover(light) {
  if (light) {
    document.documentElement.style.setProperty("--menu-color-hover", "black");
  }
  else  {
    document.documentElement.style.setProperty("--menu-color-hover", "white");
  }
}
function code() {
  if (!codeOn) {
    codeOn = true;
    document.getElementById("codeButton").src = "images/code2.png";
    document.getElementById("inpoot").value += "<pre><code>";
      } else {
    codeOn = false;
    document.getElementById("inpoot").value += "</code></pre>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function link() {
  if (!linkOn) {
    linkOn = 1;
    document.getElementById("linkButton").src = "images/link2.png";
    document.getElementById("inpoot").value += "<a href='";
      } else if (linkOn == 1) {
    linkOn = 2;
    document.getElementById("inpoot").value += "'>";
      } else {
    linkOn = false;
    document.getElementById("inpoot").value += "</a>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function emoji() {
  if (!emojiOn) {
    emojiOn = true;
    document.getElementById("emojiButton").src = "images/emoji2.png";
    document.getElementById("eMenu").classList.toggle("hidden");
  } else {
    emojiOn = false;
    document.getElementById("eMenu").classList.toggle("hidden");
  }
}
function emojiSelect(e) {
  emojiOn = false;
  document.getElementById("eMenu").classList.toggle("hidden");
  document.getElementById("inpoot").value += e;
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function diacritic() {
  if (!diacriticOn) {
    diacriticOn = true;
    document.getElementById("diacriticButton").src = "images/diacritic2.png";
    document.getElementById("dMenu").classList.toggle("hidden");
  } else {
    diacriticOn = false;
    document.getElementById("dMenu").classList.toggle("hidden");
  }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function diacriticSelect(d) {
  diacriticOn = false;
  document.getElementById("dMenu").classList.toggle("hidden");
  document.getElementById("diacriticButton").src = "images/diacritic.png";
  document.getElementById("inpoot").value += d;
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function image() {
  if (!imageOn) {
    imageOn = true;
    document.getElementById("imageButton").src = "images/image2.png";
    document.getElementById("inpoot").value += "<img src='";
      } else {
    imageOn = false;
    document.getElementById("inpoot").value += "'>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function video() {
  if (!videoOn) {
    videoOn = true;
    document.getElementById("videoButton").src = "images/video2.png";
    document.getElementById("inpoot").value += "<video controls><source src='";
      } else {
    videoOn = false;
    document.getElementById("inpoot").value += "'></video>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function audio() {
  if (!audioOn) {
    audioOn = true;
    document.getElementById("audioButton").src = "images/audio2.png";
    document.getElementById("inpoot").value += "<audio controls><source src='";
      } else {
    audioOn = false;
    document.getElementById("inpoot").value += "'></audio>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function website() {
  if (!websiteOn) {
    websiteOn = true;
    document.getElementById("websiteButton").src = "images/website2.png";
    document.getElementById("inpoot").value += "<iframe src='";
      } else {
    websiteOn = false;
    document.getElementById("inpoot").value += "'></iframe>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function youtube() {
  if (!youtubeOn) {
    youtubeOn = true;
    document.getElementById("youtubeButton").src = "images/youtube2.png";
    document.getElementById("inpoot").value += "<iframe width='560' height='315' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen src='https://www.youtube.com/embed/";
      } else {
    youtubeOn = false;
    document.getElementById("inpoot").value += "'></iframe>";
      }
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function rBot() {
  document.getElementById("inpoot").value += "@RussiaBot";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function fmBot() {
  document.getElementById("inpoot").value += "@FunnyMemeBot";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function up() {
  document.getElementById("inpoot").value += "<img src='images/thumbsUp.png' width='50px'>";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function wiggle() {
  document.getElementById("inpoot").value += "<img src='images/thumbWiggle.png' width='50px'>";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function down() {
  document.getElementById("inpoot").value += "<img src='images/thumbsDown.png' width='50px'>";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function box() {
  document.getElementById("inpoot").value += "<div class='box' style='width: " + Math.random() * 100 + "px; height: " + Math.random() * 100 + "px; top: " + Math.random() * 100 + "%; left: " + Math.random() * 100 + "%;'></div>";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function hair() {
  document.getElementById("inpoot").value += "<img src='images/hair3.png' style='width: " + Math.random() * 35 + "px; position: fixed; top: " + Math.random() * 1080 + "px; left: " + Math.random() * 1920 + "px; transform: rotate(" + Math.random() * 360 + "deg); pointer-event: none; z-index: 2;'>";
  document.getElementById("inpoot").oninput();
  document.getElementById("inpoot").focus();
}
function highlight(button, original) {
  document.getElementById(button).src = "images/" + original + "2.png";
}
function removeHighlight(button, original, condition) {
  if (!condition) document.getElementById(button).src = "images/" + original + ".png";
}

document.addEventListener("mouseup", function(event) {
  //Anywhere except menuColor and colorButton
  if (event.target != document.getElementById("cMenu") && event.target != document.getElementById("colorButton")) {
    console.log(colorOn);
    document.getElementById("cMenu").classList.add("hidden");
    removeHighlight("colorButton", "color", colorOn);
    colorOn = false;
  }
});

//Keyboard shortcuts
document.getElementById("inpoot").addEventListener("keyup", function(event) {
  if (event.ctrlKey) {
    //Ctrl + B
    if (event.keyCode == 66) {
      bold();
    }
    //Ctrl + I
    if (event.keyCode == 73) {
      italics();
    }
    //Ctrl + Shift + U
    if (event.keyCode == 85 && event.shiftKey) {
      underline();
    }
    //Ctrl + Shift + S
    if (event.keyCode == 83 && event.shiftKey) {
      strike();
    }
    //Ctrl + .
    if (event.keyCode == 190) {
      sup();
    }
    //Ctrl + ,
    if (event.keyCode == 188) {
      sub();
    }
    //Ctrl + Shift + H
    if (event.keyCode == 72 && event.shiftKey) {
      code();
    }
    //Ctrl + Shift + K
    if (event.keyCode == 75 && event.shiftKey) {
      link();
    }
    //Ctrl + M
    if (event.keyCode == 77) {
      image();
    }
    //Ctrl + Shift + E
    if (event.keyCode == 69 && event.shiftKey) {
      video();
    }
    //Ctrl + Shift + L
    if (event.keyCode == 76 && event.shiftKey) {
      audio();
    }
    //Ctrl + Shift + F
    if (event.keyCode == 70 && event.shiftKey) {
      website();
    }
    //Ctrl + Q
    if (event.keyCode == 81) {
      youtube();
    }
  }
  if (event.altKey) {
    //Alt + +
    if (event.keyCode == 187) {
      up();
    }
    //Alt + /
    if (event.keyCode == 191) {
      wiggle();
    }
    //Alt + -
    if (event.keyCode == 189) {
      down();
    }
  }
});

function turnOffButtons() {
  boldOn = false;
  document.getElementById("boldButton").src = "images/bold.png";
  italicsOn = false;
  document.getElementById("italicsButton").src = "images/italics.png";
  underlineOn = false;
  document.getElementById("underlineButton").src = "images/underline.png";
  strikeOn = false;
  document.getElementById("strikeButton").src = "images/strike.png";
  superOn = false;
  document.getElementById("superButton").src = "images/super.png";
  subOn = false;
  document.getElementById("subButton").src = "images/sub.png";
  if (fontOn) {
    document.getElementById("fMenu").classList.toggle("hidden");
  }
  fontOn = false;
  document.getElementById("fontButton").src = "images/font.png";
  if (colorOn) {
    document.getElementById("cMenu").classList.toggle("hidden");
  }
  colorOn = false;
  document.getElementById("colorButton").src = "images/color.png";
  codeOn = false;
  document.getElementById("codeButton").src = "images/code.png";
  linkOn = false;
  document.getElementById("linkButton").src = "images/link.png";
  if (diacriticOn) {
    document.getElementById("dMenu").classList.toggle("hidden");
  }
  diacriticOn = false;
  document.getElementById("diacriticButton").src = "images/diacritic.png";
  imageOn = false;
  document.getElementById("imageButton").src = "images/image.png";
  videoOn = false;
  document.getElementById("videoButton").src = "images/video.png";
  audioOn = false;
  document.getElementById("audioButton").src = "images/audio.png";
  websiteOn = false;
  document.getElementById("websiteButton").src = "images/website.png";
  youtubeOn = false;
  document.getElementById("youtubeButton").src = "images/youtube.png";
}
