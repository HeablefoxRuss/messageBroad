//Enter your name
let userName = 'Anonymous' + Math.floor(Math.random() * 10000);
//HTML color or hex code
let userColor = '#COLOR';
//Paste image address
let userAvatar = 'images/AVATAR.png';

const ws = new WebSocket("ws://localhost:8080/");

//Get height of input bar
document.documentElement.style.setProperty("--inpoot-height", document.getElementById("inpootBarBg").offsetHeight + "px");

let compactOn = false;

function resetFavicon() {
  document.querySelector("link[rel*='icon']").href = "images/favicon.png";
}
document.addEventListener("visibilitychange", resetFavicon);

ws.onopen = function() {
  let connectMSG = {
    name: userName,
    color: userColor,
    type: "connect",
    date: new Date().toString().substr(4).slice(0, -36)
  };
  ws.send(JSON.stringify(connectMSG));
};

function resizeInpoot() {
  if (compactOn) {
    document.getElementById("inpoot").style.height = "18px";
  } else {
    document.getElementById("inpoot").style.height = "42px";
  }
  if (document.getElementById("inpoot").clientHeight < document.getElementById("inpoot").scrollHeight) {
    document.getElementById("inpoot").style.height = "142px";
  }
  //Get height of input bar
  document.documentElement.style.setProperty("--inpoot-height", document.getElementById("inpootBarBg").offsetHeight + "px");
}

document.getElementById("inpoot").addEventListener("keydown", function(event) {
  //Enter pressed
  if (event.keyCode == 13) {
    if (window.event.shiftKey && !codeOn) {
      document.getElementById("inpoot").value += "<br>";
    } else if (!window.event.shiftKey) {
      document.getElementById("sendButton").click();
    }
  }
});
document.getElementById("inpoot").oninput = function() {
  resizeInpoot();
};

function sendit() {
  document.getElementById("sendButton").blur();
  let msgObj = {
    name: userName,
    color: userColor,
    avatar: userAvatar,
    type: "message",
    message: document.getElementById("inpoot").value,
    date: new Date().toString().substr(4).slice(0, -36),
    id: Math.random()
  };

  //Send error message if not connected
  if (ws.readyState !== WebSocket.OPEN) {
    document.getElementById("outpoot").innerHTML += "<i class='notConnected' class='msgText'>Not connected to server.</i>";
  } else {
    //Send message
    ws.send(JSON.stringify(msgObj));

    //Empty message box
    document.getElementById("inpoot").value = "";
    resizeInpoot();
    turnOffButtons();
  }
}

ws.onmessage = function(message) {
  //Change favicon if page is not open
  if (document.hidden) {
    document.querySelector("link[rel*='icon']").href = "images/favicon2.png";
  }

  let data = JSON.parse(message.data);

  if (data.type == "message") {
    let atBottom;
    if (document.getElementById("outpoot").scrollTop === document.getElementById("outpoot").scrollHeight - document.getElementById("outpoot").clientHeight) {
      atBottom = true;
    }
    else {
      atBottom = false;
    }
      document.getElementById("outpoot").innerHTML += `<div id="${data.id}" class="message"><span class="msgHeading"><img class="avatar" src="${data.avatar}"><div class="msgText"><b style='color: ${data.color};'>${data.name}</b><span id="${data.id}-date" class="date"> ${data.date}</span></span><img id="${data.id}-edit" src="images/edit1.png" class="msgButton hidden" onclick="editMsg('${data.id}', document.getElementById('${data.id}-mainText').innerHTML" title="Edit message"><img id="${data.id}-del" src="images/delete.png" class="msgButton delButton hidden" onclick="deleteMsg('${data.id}')" title="Delete message"></span><br><span id="${data.id}-mainText">${data.message}</span></div></div><br>`;
      if (`${data.name}` == userName) {
        document.getElementById(`${data.id}`).style.backgroundColor = "var(--bg-highlight-color)";
      }
      if (`${data.message}`.includes("#")) {
        document.getElementById(`${data.id}`).style.backgroundColor = "var(--bg-green-color)";
      }
      if (`${data.message}`.includes("@")) {
        document.getElementById(`${data.id}`).style.backgroundColor = "var(--bg-purple-color)";
      }
    //Scroll to message if page is scrolled to bottom
    if (atBottom) {
      document.getElementById(`${data.id}`).scrollIntoView();
    }
  }

  else if (data.type == "userlist") {
    let userBox = document.getElementById("userBox");
    userBox.innerHTML = "";
    data.names.forEach(function(name) {
      userBox.innerHTML += name + '<br>';
    });
  }

  else if (data.type == "connect") {
    if (`${data.name}` == userName) {
      document.getElementById("outpoot").innerHTML += `<i class="message msgText"><span class="connectMsg">Connected to server!</span></i><br>`;
    } else {
      document.getElementById("outpoot").innerHTML += `<i class="message msgText"><span style='color: ${data.color}'><b>${data.name}</b></span><span class="connectMsg"> has joined the server.</span></i><br>`;
    }
    document.getElementById("userBox").innerHTML += `<br><span style='color: ${data.color}' display: 'inline-block' margin: '5px 0px'>${data.name}</span>`;
  }

  else if (data.type == "edit") {
    document.getElementById(`${data.id}-mainText`).innerHTML = `${data.message}`;
    if (!document.getElementById(`${data.id}-date`).innerHTML.includes("(edited)")) {
      document.getElementById(`${data.id}-date`).innerHTML += " (edited)";
    }
  }

  else if (data.type == "delete") {
    document.getElementById(`${data.id}-mainText`).innerHTML = "<i class='deleted'>Message deleted</i>";
  }

  /*if (`${data.name}` == userName) {
  document.getElementById(`${data.id}`).style.backgroundColor = "var(--bg-highlight-color)";
  }*/
};

function showMsgButtons(name, id) {
  if (name == userName) {
    document.getElementById(id + "-edit").classList.toggle("hidden");
    document.getElementById(id + "-del").classList.toggle("hidden");
  }
}
function editMsg(id, original) {
  let editMsgObj = {
    type: "edit",
    id: id,
    message: prompt("Edit your message", original)
  };
  ws.send(JSON.stringify(editMsgObj));
}
function deleteMsg(id) {
  if (confirm("Delete this message?")) {
    let delMsgObj = {
      type: "delete",
      id: id
    };
    ws.send(JSON.stringify(delMsgObj));
  }
}

let sideMenuVisible = false;
document.getElementById("sideMenuAvatar").src = userAvatar;
document.getElementById("sideMenuUsername").innerHTML = userName;
document.getElementById("sideMenuUsername").style.color = userColor;
function toggleSideMenu() {
  document.getElementById("sideMenu").classList.toggle("hidden");
  document.getElementById("bgBlur").classList.toggle("hidden");
  if (!sideMenuVisible) {
    sideMenuVisible = true;
  } else {
    sideMenuVisible = false;
  }
}

function closePopups() {
  if (sideMenuVisible) {
    toggleSideMenu();
  }
}
document.addEventListener("keydown", function(event) {
  //Esc key pressed
  if (event.keyCode == 27) {
    closePopups();
    closeFMenu();
    closeCMenu();
    closeDMenu();
  }
});

let lightOn = false;
//Set light/dark mode to stored value
if (localStorage.getItem("mode") == "false") {
  document.getElementById("light").checked = false;
  light();
}
function light() {
  if (!lightOn) {
    lightOn = true;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--bg-highlight-color", "#ddd");
    document.documentElement.style.setProperty("--main-color", "#4040bf");
    document.documentElement.style.setProperty("--alt-color", "#333");
    document.documentElement.style.setProperty("--emphasis-color", "#333");
    document.getElementById("userBox").style.backgroundColor = "#ccc";
    document.getElementById("menuButton").src = "images/menuButtonLight.png";
  } else {
    lightOn = false;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "#333");
    document.documentElement.style.setProperty("--bg-highlight-color", "#444");
    document.documentElement.style.setProperty("--main-color", "#bfbfff");
    document.documentElement.style.setProperty("--alt-color", "#8f8fbf");
    document.documentElement.style.setProperty("--emphasis-color", "white");
    document.getElementById("userBox").style.backgroundColor = "#222";
    document.getElementById("menuButton").src = "images/menuButton.png";
  }
  //Store light/dark mode
  localStorage.setItem("mode", document.getElementById("light").checked);
}

function compactCheck() {
  if ((!compactOn && (window.innerWidth < 700 || window.innerHeight < 500)) || (compactOn && window.innerWidth >= 700 && window.innerHeight >= 500)) {
    compact();
  }
  //Get height of input bar
  document.documentElement.style.setProperty("--inpoot-height", document.getElementById("inpootBarBg").offsetHeight + "px");
}
window.addEventListener("resize", compactCheck);
//TO DO: change all outpoot widths
function toggleUb() {
  document.getElementById("userBox").classList.toggle("hidden");
  if (!ubHidden) {
    ubHidden = true;
    document.getElementById("outpoot").style.width = "calc(100% - 65px)";
  } else {
    ubHidden = false;
    document.getElementById("outpoot").style.width = "calc(100% - 340px)";
  }
}
//Compact interface for small windows
function compact() {
  if (!compactOn) {compactOn = true;}
  else {
    compactOn = false;
  }
  toggleUb();
  document.getElementById("inpoot").classList.toggle("inpoot-compact");
  resizeInpoot();
  document.getElementById("inpootButtons").classList.toggle("hidden");
  document.getElementById("sendButton").classList.toggle("send-compact");
}


/*let currentChannelNumber = "";
let nextChannel = 1;

function nameNewChannel() {
  document.getElementById("channelBox" + nextChannel).classList.add("cbVisible");
  document.getElementById("channelBox" + nextChannel).innerHTML = "<input id='channelName" + nextChannel + "' placeholder='Enter channel name' onblur='sendNewChannel()'></input>";
  document.getElementById("channelName" + nextChannel).focus();
  document.getElementById("channelName" + nextChannel).addEventListener("keydown", function(event) {
    //When enter key pressed
    if (event.keyCode == 13) {
      sendNewChannel();
    }
    //When esc key pressed
    if (event.keyCode == 27) {
      cancelNewChannel();
    }
  });
}

function cancelNewChannel() {document.getElementById("channelBox" + nextChannel).classList.remove("cbVisible");}

function sendNewChannel() {
  //If channel name is not all whitespace
  if (document.getElementById("channelName" + nextChannel).value.trim().length) {
    currentChannelName = document.getElementById("channelName" + nextChannel).value;
    document.getElementById("channelBox" + nextChannel).innerHTML = currentChannelName;
    switchChannel(nextChannel);
    nextChannel = ++nextChannel;
    let newChannelObj = {
      creator: userName,
      channelName: currentChannelName
    };
    ws.send(JSON.stringify(newChannelObj));
  } else {
    cancelNewChannel();
  }
}

function switchChannel(target) {
    document.getElementById("outpoot").classList.add("hidden");
    document.getElementById("outpoot1").classList.add("hidden");
    document.getElementById("outpoot2").classList.add("hidden");
    document.getElementById("outpoot3").classList.add("hidden");
    document.getElementById("outpoot4").classList.add("hidden");
    document.getElementById("outpoot" + target).classList.remove("hidden");
    currentChannelName = document.getElementById("channelBox" + target).innerHTML;

}*/


function cancelLogin() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("colorBox").classList.add("hidden");
  document.getElementById("avatarBox").classList.add("hidden");
  document.getElementById("bgBlur").classList.add("hidden");
};
