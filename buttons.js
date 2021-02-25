var boldOn = false;
var italicsOn = false;
var underlineOn = false;
var strikeOn = false;
var superOn = false;
var subOn = false;
var fontOn = false;
var colorOn = false;
var codeOn = false;
var linkOn = false;
var emojiOn = false;
var diacriticOn = false;
var imageOn = false;
var videoOn = false;
var audioOn = false;
var websiteOn = false;
var youtubeOn = false;
var lightOn = false;
var ubHidden = false;
function bold() {
  if (!boldOn) {
    boldOn = true;
    document.getElementById('boldButton').setAttribute('src', 'bold2.png');
    document.getElementById('inpoot').value += '<b>';
    document.getElementById('inpoot').focus();
  } else {
    boldOn = false;
    document.getElementById('inpoot').value += '</b>';
    document.getElementById('inpoot').focus();
  }
}
function italics() {
  if (!italicsOn) {
    italicsOn = true;
    document.getElementById('italicsButton').setAttribute('src', 'italics2.png');
    document.getElementById('inpoot').value += '<i>';
    document.getElementById('inpoot').focus();
  } else {
    italicsOn = false;
    document.getElementById('inpoot').value += '</i>';
    document.getElementById('inpoot').focus();
  }
}
function underline() {
  if (!underlineOn) {
    underlineOn = true;
    document.getElementById('underlineButton').setAttribute('src', 'underline2.png');
    document.getElementById('inpoot').value += '<u>';
    document.getElementById('inpoot').focus();
  } else {
    underlineOn = false;
    document.getElementById('inpoot').value += '</u>';
    document.getElementById('inpoot').focus();
  }
}
function strike() {
  if (!strikeOn) {
    strikeOn = true;
    document.getElementById('strikeButton').setAttribute('src', 'strike2.png');
    document.getElementById('inpoot').value += '<s>';
    document.getElementById('inpoot').focus();
  } else {
    strikeOn = false;
    document.getElementById('inpoot').value += '</s>';
    document.getElementById('inpoot').focus();
  }
}
function sup() {
  if (!superOn) {
    superOn = true;
    document.getElementById('superButton').setAttribute('src', 'super2.png');
    document.getElementById('inpoot').value += '<sup>';
    document.getElementById('inpoot').focus();
  } else {
    superOn = false;
    document.getElementById('inpoot').value += '</sup>';
    document.getElementById('inpoot').focus();
  }
}
function sub() {
  if (!subOn) {
    subOn = true;
    document.getElementById('subButton').setAttribute('src', 'sub2.png');
    document.getElementById('inpoot').value += '<sub>';
    document.getElementById('inpoot').focus();
  } else {
    subOn = false;
    document.getElementById('inpoot').value += '</sub>';
    document.getElementById('inpoot').focus();
  }
}
function font() {
  if (!fontOn) {
    fontOn = true;
    document.getElementById('fontButton').setAttribute('src', 'font2.png');
    document.getElementById('fMenu').classList.toggle('show');
  } else if (fontOn == 'selected') {
    fontOn = false;
    document.getElementById('inpoot').value += '</span>';
    document.getElementById('inpoot').focus();
  } else {
    fontOn = false;
    document.getElementById('fMenu').classList.toggle('show');
  }
}
function fontSelect(f) {
  fontOn = 'selected';
  document.getElementById('fMenu').classList.toggle('show');
  document.getElementById('inpoot').value += '<span style="font-family: ' + f + ';">';
  document.getElementById('inpoot').focus();
}
function color() {
  if (!colorOn) {
    colorOn = true;
    document.getElementById('colorButton').setAttribute('src', 'color2.png');
    document.getElementById('cMenu').classList.toggle('show');
  } else if (colorOn == 'selected') {
    colorOn = false;
    document.getElementById('inpoot').value += '</span>';
    document.getElementById('inpoot').focus();
  } else {
    colorOn = false;
    document.getElementById('cMenu').classList.toggle('show');
  }
}
function colorSelect(c) {
  colorOn = 'selected';
  document.getElementById('cMenu').classList.toggle('show');
  document.getElementById('inpoot').value += '<span style="color: ' + c + ';">'
  document.getElementById('inpoot').focus();
}
function colorHover(light) {
  if (light) {document.documentElement.style.setProperty('--menu-color-hover', 'black');}
  else  {document.documentElement.style.setProperty('--menu-color-hover', 'white');}
}
function code() {
  if (!codeOn) {
    codeOn = true;
    document.getElementById('codeButton').setAttribute('src', 'code2.png');
    document.getElementById('inpoot').value += '<pre><code>';
    document.getElementById('inpoot').focus();
  } else {
    codeOn = false;
    document.getElementById('inpoot').value += '</code></pre>';
    document.getElementById('inpoot').focus();
  }
}
function link() {
  if (!linkOn) {
    linkOn = 1;
    document.getElementById('linkButton').setAttribute('src', 'link2.png');
    document.getElementById('inpoot').value += '<a href="';
    document.getElementById('inpoot').focus();
  } else if (linkOn == 1) {
    linkOn = 2;
    document.getElementById('inpoot').value += '">';
    document.getElementById('inpoot').focus();
  } else {
    linkOn = false;
    document.getElementById('inpoot').value += '</a>';
    document.getElementById('inpoot').focus();
  }
}
function emoji() {
  if (!emojiOn) {
    emojiOn = true;
    document.getElementById('emojiButton').setAttribute('src', 'emoji2.png');
    document.getElementById('eMenu').classList.toggle('show');
  } else {
    emojiOn = false;
    document.getElementById('eMenu').classList.toggle('show');
  }
}
function emojiSelect(e) {
  emojiOn = false;
  document.getElementById('eMenu').classList.toggle('show');
  document.getElementById('inpoot').value += e;
  document.getElementById('inpoot').focus();
}
function diacritic() {
  if (!diacriticOn) {
    diacriticOn = true;
    document.getElementById('diacriticButton').setAttribute('src', 'diacritic2.png');
    document.getElementById('dMenu').classList.toggle('show');
  } else {
    diacriticOn = false;
    document.getElementById('dMenu').classList.toggle('show');
  }
}
function diacriticSelect(d) {
  diacriticOn = false;
  document.getElementById('dMenu').classList.toggle('show');
  document.getElementById('diacriticButton').setAttribute('src', 'diacritic.png');
  document.getElementById('inpoot').value += d;
  document.getElementById('inpoot').focus();
}
function image() {
  if (!imageOn) {
    imageOn = true;
    document.getElementById('imageButton').setAttribute('src', 'image2.png');
    document.getElementById('inpoot').value += '<img src="';
    document.getElementById('inpoot').focus();
  } else {
    imageOn = false;
    document.getElementById('inpoot').value += '">';
    document.getElementById('inpoot').focus();
  }
}
function video() {
  if (!videoOn) {
    videoOn = true;
    document.getElementById('videoButton').setAttribute('src', 'video2.png');
    document.getElementById('inpoot').value += '<video controls><source src="';
    document.getElementById('inpoot').focus();
  } else {
    videoOn = false;
    document.getElementById('inpoot').value += '"></video>';
    document.getElementById('inpoot').focus();
  }
}
function audio() {
  if (!audioOn) {
    audioOn = true;
    document.getElementById('audioButton').setAttribute('src', 'audio2.png');
    document.getElementById('inpoot').value += '<audio controls><source src="';
    document.getElementById('inpoot').focus();
  } else {
    audioOn = false;
    document.getElementById('inpoot').value += '"></audio>';
    document.getElementById('inpoot').focus();
  }
}
function website() {
  if (!websiteOn) {
    websiteOn = true;
    document.getElementById('websiteButton').setAttribute('src', 'website2.png');
    document.getElementById('inpoot').value += '<iframe src="';
    document.getElementById('inpoot').focus();
  } else {
    websiteOn = false;
    document.getElementById('inpoot').value += '"></iframe>';
    document.getElementById('inpoot').focus();
  }
}
function youtube() {
  if (!youtubeOn) {
    youtubeOn = true;
    document.getElementById('youtubeButton').setAttribute('src', 'youtube2.png');
    document.getElementById('inpoot').value += '<iframe width="560" height="315" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/';
    document.getElementById('inpoot').focus();
  } else {
    youtubeOn = false;
    document.getElementById('inpoot').value += '"></iframe>';
    document.getElementById('inpoot').focus();
  }
}
function box() {
  document.getElementById('inpoot').value += '<div class="box" style="width: ' + Math.random() * 100 + 'px; height: ' + Math.random() * 100 + 'px; top: ' + Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%;"></div>';
  document.getElementById('inpoot').focus();
}
function rBot() {
  document.getElementById('inpoot').value += '@RussiaBot';
  document.getElementById('inpoot').focus();
}
function fmBot() {
  document.getElementById('inpoot').value += '@FunnyMemeBot';
  document.getElementById('inpoot').focus();
}
function fvBot() {
  document.getElementById('inpoot').value += '@FunnyVideoBot';
  document.getElementById('inpoot').focus();
}
function hair() {
  document.getElementById('inpoot').value += '<img src="hair3.png" style="width: ' + Math.random() * 35 + 'px; position: fixed; top: ' + Math.random() * 1080 + 'px; left: ' + Math.random() * 1920 + 'px; transform: rotate(' + Math.random() * 360 + 'deg); pointer-event: none; z-index: 2;">';
  document.getElementById('inpoot').focus();
}
function light() {
  if (!lightOn) {
    lightOn = true;
    document.documentElement.style.setProperty('--text-color', 'black');
    document.documentElement.style.setProperty('--background-color', 'white');
    document.documentElement.style.setProperty('--bg-highlight-color', '#ddd');
    document.documentElement.style.setProperty('--main-color', '#4040bf');
    document.documentElement.style.setProperty('--alt-color', '#333');
    document.documentElement.style.setProperty('--emphasis-color', '#333');
    document.getElementById('userBox').style.backgroundColor = '#ccc';
    document.getElementById('lightButton').setAttribute('src', 'light.png');
    document.getElementById('lightButton').setAttribute('onmouseover', 'removeHighlight("lightButton", "light", false)');
    document.getElementById('lightButton').setAttribute('onmouseout', 'highlight("lightButton", "light")');
    document.getElementById('lightButton').setAttribute('title', 'Turn on dark mode');
    document.getElementById('userButton').setAttribute('src', 'userButtonLight.png');
  } else {
    lightOn = false;
    document.documentElement.style.setProperty('--text-color', 'white');
    document.documentElement.style.setProperty('--background-color', '#333');
    document.documentElement.style.setProperty('--bg-highlight-color', '#444');
    document.documentElement.style.setProperty('--main-color', '#bfbfff');
    document.documentElement.style.setProperty('--alt-color', '#8f8fbf');
    document.documentElement.style.setProperty('--emphasis-color', 'white');
    document.getElementById('lightButton').setAttribute('src', 'light2.png');
    document.getElementById('userBox').style.backgroundColor = '#222';
    document.getElementById('lightButton').setAttribute('onmouseover', 'highlight("lightButton", "light")');
    document.getElementById('lightButton').setAttribute('onmouseout', 'removeHighlight("lightButton", "light", false)');
    document.getElementById('lightButton').setAttribute('title', 'Turn on light mode');
    document.getElementById('userButton').setAttribute('src', 'userButton.png');
  }
}
function highlight(button, original) {
  document.getElementById(button).setAttribute('src', original + '2.png');
}
function removeHighlight(button, original, condition) {
  if (!condition) document.getElementById(button).setAttribute('src', original + '.png');
}
function closeMenus() {
  /*if (fontOn) {
    font()
  }*/
}

//Keyboard shortcuts
document.getElementById('inpoot').addEventListener("keyup", function(event) {
  if (event.keyCode == 66 && window.event.ctrlKey) {
    bold();
  }
  if (event.keyCode == 73 && window.event.ctrlKey) {
    italics();
  }
  if (event.keyCode == 85 && window.event.ctrlKey) {
    underline();
  }
  if (event.keyCode == 83 && window.event.ctrlKey) {
    strike();
  }
  if (event.keyCode == 190 && window.event.ctrlKey) {
    sup();
  }
  if (event.keyCode == 188 && window.event.ctrlKey) {
    sub();
  }
  if (event.keyCode == 72 && window.event.ctrlKey) {
    code();
  }
  if (event.keyCode == 75 && window.event.ctrlKey) {
    link();
  }
  if (event.keyCode == 77 && window.event.ctrlKey) {
    image();
  }
  if (event.keyCode == 69 && window.event.ctrlKey) {
    video();
  }
  if (event.keyCode == 76 && window.event.ctrlKey) {
    audio();
  }
  if (event.keyCode == 70 && window.event.ctrlKey) {
    website();
  }
  if (event.keyCode == 81 && window.event.ctrlKey) {
    youtube();
  }
});

function turnOffButtons() {
  boldOn = false;
  document.getElementById('boldButton').setAttribute('src', 'bold.png');
  italicsOn = false;
  document.getElementById('italicsButton').setAttribute('src', 'italics.png');
  underlineOn = false;
  document.getElementById('underlineButton').setAttribute('src', 'underline.png');
  strikeOn = false;
  document.getElementById('strikeButton').setAttribute('src', 'strike.png');
  superOn = false;
  document.getElementById('superButton').setAttribute('src', 'super.png');
  subOn = false;
  document.getElementById('subButton').setAttribute('src', 'sub.png');
  if (fontOn) {document.getElementById('fMenu').classList.toggle('show');}
  fontOn = false;
  document.getElementById('fontButton').setAttribute('src', 'font.png');
  if (colorOn) {document.getElementById('cMenu').classList.toggle('show');}
  colorOn = false;
  document.getElementById('colorButton').setAttribute('src', 'color.png');
  codeOn = false;
  document.getElementById('codeButton').setAttribute('src', 'code.png');
  linkOn = false;
  document.getElementById('linkButton').setAttribute('src', 'link.png');
  if (diacriticOn) {document.getElementById('dMenu').classList.toggle('show');}
  diacriticOn = false;
  document.getElementById('diacriticButton').setAttribute('src', 'diacritic.png');
  imageOn = false;
  document.getElementById('imageButton').setAttribute('src', 'image.png');
  videoOn = false;
  document.getElementById('videoButton').setAttribute('src', 'video.png');
  audioOn = false;
  document.getElementById('audioButton').setAttribute('src', 'audio.png');
  websiteOn = false;
  document.getElementById('websiteButton').setAttribute('src', 'website.png');
  youtubeOn = false;
  document.getElementById('youtubeButton').setAttribute('src', 'youtube.png');
}
