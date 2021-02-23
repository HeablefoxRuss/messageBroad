const ws = new WebSocket('ws://192.168.24.101:8080/');

ws.onopen = function() {
  console.log('Connected to server!');
  let connectMsg = {
    name: 'Me',
    type: 'connect',
    date: new Date(),
  }
  ws.send(JSON.stringify(connectMsg));
}

ws.onmessage = function(message) {
  let data = JSON.parse(message.data);
  console.log(`${data.name}`,`${data.color}`);
  if (data.type == 'message' && Math.floor(Math.random() * 10) == 0) {
    sendit(`${data.name}`,`${data.color}`,`${data.avatar}`);
    console.log('10');
  }
}

function sendit(dataName,dataColor,dataAvatar) {
  let msgObj = {
    name: dataName,
    color: dataColor,
    avatar: dataAvatar,
    date: new Date(),
    type: 'message',
    message: 'It is I, ' + dataName + '.',
  }
  console.log(msgObj);
  ws.send(JSON.stringify(msgObj));
}
