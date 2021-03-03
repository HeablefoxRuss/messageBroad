ws.onopen = function() {
  let connectMsg = {
    name: "Me",
    type: "connect",
    date: new Date().toString().substr(4).slice(0, -36)
  }
  ws.send(JSON.stringify(connectMsg));
}

ws.onmessage = function(message) {
  let data = JSON.parse(message.data);
  console.log(`${data.name}`,`${data.color}`);
  if (data.type == "message" && Math.floor(Math.random() * 10) == 0) {
    senditNAB(`${data.name}`,`${data.color}`,`${data.avatar}`);
  }
}

function senditNAB(dataName, dataColor, dataAvatar) {
  let msgObj = {
    name: dataName,
    color: dataColor,
    avatar: dataAvatar,
    date: new Date().toString().substr(4).slice(0, -36),
    type: "message",
    message: "It is I, " + dataName + ".",
    id: Math.random()
  };
  ws.send(JSON.stringify(msgObj));
}
