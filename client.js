//Enter your name
let userName = 'Anonymous' + Math.floor(Math.random() * 10000);
//HTML color or hex code
let userColor = 'white';
//Paste image address
let userAvatar = 'avatar2.png';

// tells were to connent to the server
const ws = new WebSocket('ws://192.168.24.101:8080/');

//Get height of input bar
document.documentElement.style.setProperty('--inpoot-height', document.getElementById('inpootBarBg').offsetHeight + 'px');

//when you open html file do this
ws.onopen = function() {
  // tell how is connected
  let connectMSG = {
    name: userName,
    color: userColor,
    type: "connect",
    date: new Date().toString().substr(4).slice(0, -36),
  }
  // turn everything you type in the box to string
  ws.send(JSON.stringify(connectMSG));
}

function update() {
  //Use normal favicon
  document.querySelector('link[rel*="icon"]').href = 'favicon.png';
  //Use compact interface for small windows
  if ((!compactOn && (window.innerWidth < 700 || window.innerHeight < 500)) || (compactOn && window.innerWidth >= 700 && window.innerHeight >= 500)) {compact();}
  if (compactOn) {document.getElementById('inpoot').style.height = '18px';}
  else {document.getElementById('inpoot').style.height = '42px';}
  if (document.getElementById('inpoot').clientHeight < document.getElementById('inpoot').scrollHeight) {document.getElementById('inpoot').style.height = '142px';}
    //Get height of input bar
    document.documentElement.style.setProperty('--inpoot-height', document.getElementById('inpootBarBg').offsetHeight + 'px');
}

document.addEventListener('visibilitychange', update);
window.addEventListener('resize', update);

// get your message from what you typed
document.getElementById('inpoot').addEventListener("keydown", function(event) {
  // if you hit enter this stuff
  if (event.keyCode == 13) {
    if (window.event.shiftKey && !codeOn) {
      document.getElementById('inpoot').value += '<br>';
    } else if (!window.event.shiftKey) {
      // hit the send button
      document.getElementById('sendButton').click();
    }
  }
  update();
});

// new functoin called send it
function sendit() {
  // properdes of a message that I sent to someone
  let msgObj = {
    name: userName,
    color: userColor,
    avatar: userAvatar,
    type: "message",
    message: document.getElementById('inpoot').value,
    date: new Date().toString().substr(4).slice(0, -36),
    id: Math.random(),
    channel: currentChannelNumber,
  };

  /*//For testing
  let avatar = 'https://lh3.googleusercontent.com/2xmt5NaWzoFiWrA5_Lp5648eRyqC0yyolZBCDHTcdgptOlZo9DRUa1_hoTxwcQAQcZCoR3LljFoI0yojO1WBPGInkAhSlik9VdTn6tIBIVyMwQXfF-xPVMzEGSzKWgavuYb3TcRF5lk7I-Ppu0AgVXfulr5R1tl_sC3e5B_1g3yNEsxs48spqz2HCuyQgnHZa5vg_B6B8eUQwIT0PlUTtam3rujc8l9VmX5x5bu85RjgPOYrbg79InXpZJQMd_iwT9c1HvfuiJv7b2xaOWDK63othX1LbA7myBlpZf10Iwn6ngW5JQiZiAVNQEbpri738CvICv7tzXxuDryQLis3JCBLUoRYd2LeeWPNwioYPiCRKgTaFH41xyuAwG9lT7kqlRNzF5PNLk0MhSUDTh1XtI3jPXYTgoxlr8wKonJqVAyt2DuWOpHjO5q0c3ig-Ody3Dx_-zhFovL4cAw4e9Dio4jpEMWxutyirKy6KAbXAKFiiXIWSDhGFvt19a8s6dDHTNvWDZjBYnqnmVI9Vsh2FlfxQ60QOTEWnDfV3QB8Zth-fENqwuxP32A85M4zKHoLvm3cXiR8WzpgMCNH2XQsTQg_LvY6xKGxXve0cQNcslMF8AQiNvmBx0ME8R1AI92JjGF9ws9GNU8Kd35JsPUSEj3BZsScy9ODjdcRr0moD2oowh8wjbNeYjvJbOV9=s256-no?authuser=0'
  id = Math.random()
  document.getElementById('outpoot').innerHTML +=
  `<div id='` + id + `' class='message'
  onmouseover='showMsgButtons("` + userName + '","' + id + `")' onmouseout='showMsgButtons("` + userName + '","' + id + `")'>
  <span class='msgHeading'><img class='avatar' src=` + avatar + `>
  <div class='msgText'><b style="color: `+userColor+`;">`+userName+`</b><span id='` + id + `-date' class='date'> ` + new Date().toString().substr(4).slice(0, -36) +
  `</span><img id='` + id + `-edit' src='edit1.png' class='msgButton hidden' onclick='editMsg(` + id + `)' title='Edit message'>
  <img id='` + id + `-del' src='delete.png' class='msgButton delButton hidden' onclick='deleteMsg(` + id + `)' title='Delete message'></span>
  <br><span id='` + id + `-mainText'>` + document.getElementById('inpoot').value + `</span></div></div>`;
  if (name == name) {document.getElementById(id).style.backgroundColor = 'var(--bg-highlight-color)';}*/

  //Send error message if not connected
  if (ws.readyState !== WebSocket.OPEN) {document.getElementById('outpoot' + currentChannelNumber).innerHTML += "<i class='notConnected' class='msgText'>Not connected to server.</i><br>";}
  // turn it to string when sent
  ws.send(JSON.stringify(msgObj));

  // when you send a message empty the message box
  document.getElementById('inpoot').value = "";
  turnOffButtons();
}

// when you send a message
ws.onmessage = function(message) {
  //Change favicon if page is not open
  if (document.hidden) {document.querySelector('link[rel*="icon"]').href = 'favicon2.png';}

  //when send convert to string
  let data = JSON.parse(message.data);

  // if there is a message do this stuff
  if (data.type == "message") {
    let atBottom;
    if (document.getElementById('outpoot').scrollTop === document.getElementById('outpoot').scrollHeight - document.getElementById('outpoot').clientHeight) {atBottom = true;}
    else {atBottom = false;}
      // put the messae on the screen
      document.getElementById('outpoot').innerHTML += `<div id='${data.id}' class='message'><span class='msgHeading'><img class='avatar' src='${data.avatar}'><div class='msgText'><b style="color: ${data.color};">${data.name}</b><span id='${data.message}-date' class='date'> ${data.date}</span></span><img id='${data.id}-edit' src='edit1.png' class='msgButton hidden' onclick='editMsg("${data.id}", document.getElementById("${data.id}-mainText").innerHTML' title='Edit message'><img id='${data.id}-del' src='delete.png' class='msgButton delButton hidden' onclick='deleteMsg("${data.id}")' title='Delete message'></span><br><span id='${data.message}-mainText'>${data.message}</span></div></div><br>`;
      if (`${data.name}` == name) {document.getElementById('`${data.id}`').style.backgroundColor = 'var(--bg-highlight-color)';}
    //Scroll to message if page is scrolled to bottom
    if (atBottom) {document.getElementById(`${data.id}`).scrollIntoView();}
  }

  else if (data.type == "userlist") {
    let userBox = document.getElementById('userBox');
    userBox.innerHTML = '';
    data.names.forEach(function(name) {userBox.innerHTML += name + "<br>";});
  }

  else if (data.type == "connect") {
    //When you connect
    if (`${data.name}` == name) {
      document.getElementById('outpoot').innerHTML += `<i class='message msgText'><span class='connectMsg'>Connected to server!</span></i><br>`;
    } else {
      document.getElementById('outpoot').innerHTML += `<i class='message msgText'><span style="color: ${data.color}"><b>${data.name}</b></span><span class='connectMsg'> has joined the server.</span></i><br>`;
    }
    document.getElementById('userBox').innerHTML += `<br><span style="color: ${data.color}" display: "inline-block" margin: "5px 0px">${data.name}</span>`
  }

  else if (data.type == 'edit') {
    document.getElementById(`${data.id}-mainText`).innerHTML = `${data.message}`;
    if (!document.getElementById('`${data.id}-date`').innerHTML.includes('(edited)')) {document.getElementById('`${data.id}-date`').innerHTML += ' (edited)';}
  }

  else if (data.type == 'delete') {document.getElementById(`${data.id}-mainText`).innerHTML = '<i class="deleted">Message deleted</i>'}

  //if (`${data.name}` == userName) {document.getElementById(`${data.id}`).style.backgroundColor = 'var(--bg-highlight-color)';}
}

function showMsgButtons(name, id) {
  if (name == userName) {
    document.getElementById(id + '-edit').classList.toggle('hidden');
    document.getElementById(id + '-del').classList.toggle('hidden');
  }
}
function editMsg(id, original) {
  let editMsgObj = {
    type: 'edit',
    id: id,
    message: prompt('Edit your message', original),
  };
  ws.send(JSON.stringify(editMsgObj));
}
function deleteMsg(id) {
  if (confirm('Delete this message?')) {
    let delMsgObj = {
      type: 'delete',
      id: id,
    };
    ws.send(JSON.stringify(delMsgObj));
  }
}

let compactOn = false;
//Show/hide userBox
//TO DO: change all outpoot widths
function toggleUb() {
  document.getElementById('userBox').classList.toggle('hidden');
  if (!ubHidden) {
    ubHidden = true;
    document.getElementById('outpoot').style.width = 'calc(100% - 65px)';
    document.getElementById('userButton').setAttribute('src', 'users2.png');
    document.getElementById('userButton').setAttribute('onmouseover', 'highlight("userButton", "users")');
    document.getElementById('userButton').setAttribute('onmouseout', 'removeHighlight("userButton", "users", false)');
  } else {
    ubHidden = false;
    document.getElementById('outpoot').style.width = 'calc(100% - 340px)';
    document.getElementById('userButton').setAttribute('src', 'close2.png');
    document.getElementById('userButton').setAttribute('onmouseover', 'highlight("userButton", "close")');
    document.getElementById('userButton').setAttribute('onmouseout', 'removeHighlight("userButton", "close", false)');
  }
}
//Compact interface for small windows
function compact() {
  if (!compactOn) {compactOn = true;}
  else {compactOn = false;}
  toggleUb();
  document.getElementById('userButton').setAttribute('src', 'users.png');
  document.getElementById('userButton').classList.toggle('hidden');
  document.getElementById('inpoot').classList.toggle('inpoot-compact');
  document.getElementById('inpootButtons').classList.toggle('hidden');
  document.getElementById('sendButton').classList.toggle('send-compact');
}


let currentChannelNumber = ''
let nextChannel = 1;

function nameNewChannel() {
  document.getElementById('channelBox' + nextChannel).classList.add('cbVisible');
  document.getElementById('channelBox' + nextChannel).innerHTML = '<input id="channelName' + nextChannel + '" placeholder="Enter channel name" onblur="sendNewChannel()"></input>';
  document.getElementById('channelName' + nextChannel).focus();
  document.getElementById('channelName' + nextChannel).addEventListener("keydown", function(event) {
    //When enter key pressed
    if (event.keyCode == 13) {
      sendNewChannel();
    }
    //When Esc kep pressed
    if (event.keyCode == 27) {
      cancelNewChannel();
    }
  });
}

function cancelNewChannel() {document.getElementById('channelBox' + nextChannel).classList.remove('cbVisible');}

function sendNewChannel() {
  //If channel name is not all whitespace
  if (document.getElementById('channelName' + nextChannel).value.trim().length) {
    currentChannelName = document.getElementById('channelName' + nextChannel).value
    document.getElementById('channelBox' + nextChannel).innerHTML = currentChannelName;
    switchChannel(nextChannel);
    nextChannel = ++nextChannel;
    let newChannelObj = {
      creator: userName,
      channelName: currentChannelName,
    }
    ws.send(JSON.stringify(newChannelObj));
  } else {cancelNewChannel();}
}

function switchChannel(target) {
    document.getElementById('outpoot').classList.add('hidden');
    document.getElementById('outpoot1').classList.add('hidden');
    document.getElementById('outpoot2').classList.add('hidden');
    document.getElementById('outpoot3').classList.add('hidden');
    document.getElementById('outpoot4').classList.add('hidden');
    document.getElementById('outpoot' + target).classList.remove('hidden');
    currentChannelName = document.getElementById('channelBox' + target).innerHTML;

}


function cancelLogin() {
  document.getElementById('loginBox').classList.add('hidden');
  document.getElementById('colorBox').classList.add('hidden');
  document.getElementById('avatarBox').classList.add('hidden');
  document.getElementById('bgBlur').classList.add('hidden');
}
