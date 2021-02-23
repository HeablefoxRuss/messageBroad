var memes =

const ws = new WebSocket('ws://192.168.24.101:8080/');

ws.onopen = function() {
  console.log('Connected to server!');
  let connectMsg = {
    name: 'Funny Meme Bot (@FunnyMemeBot)',
    type: 'connect',
    date: new Date(),
  }
  ws.send(JSON.stringify(connectMsg));
}

ws.onmessage = function(message) {
  let data = JSON.parse(message.data);
  if (`${data.message}`.includes('@FunnyMemeBot')) {
    let randomMeme = memes[Math.floor(Math.random()*memes.length)];
    console.log(`${data.message}`)
    sendit(randomMeme);
  }
}

function sendit(meme) {
  let message;
  if (meme.includes('.mp4')) {message = '<video controls><source src="funnymemebot/' + meme + '"></video>';}
  else {message = '<a href="funnymemebot/' + meme + '" target="_blank"><img height=300 src="funnymemebot/' + meme + '">';}
  console.log(message)
  let msgObj = {
    name: 'Funny Meme Bot (@FunnyMemeBot)',
    color: 'yellow',
    avatar: 'funnyMemeBot.png',
    date: new Date(),
    type: 'message',
    message: '<i>Funny Meme Bot has been executed for tax evasion.</i>',
    channel: '',
  }
  ws.send(JSON.stringify(msgObj));
}
