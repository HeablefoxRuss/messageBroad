ws.onopen = function() {
  let connectMsg = {
    name: "Яцѕѕіа Ьот ☭ (@RussiaBot)",
    type: "connect",
    date: new Date().toString().substr(4).slice(0, -36),
    color: "red"
  }
  ws.send(JSON.stringify(connectMsg));
}

ws.onmessage = function(message) {
  let data = JSON.parse(message.data);
  if (`${data.message}`.includes("@RussiaBot") == true) {
    senditRB(`${data.message}`);
  }
}

function senditRB(original) {
  let message = original.replace(/ @RussiaBot/g, "");
  message = message.replace(/@RussiaBot /g, "");
  message = message.replace(/@RussiaBot/g, "");
  message = message.replace(/<p>async/g, "");
  message = message.replace(/a/g, "д");
  message = message.replace(/A/g, "Д");
  message = message.replace(/b/g, "ь");
  message = message.replace(/B/g, "Ь");
  message = message.replace(/c/g, "с");
  message = message.replace(/C/g, "С");
  message = message.replace(/e/g, "э");
  message = message.replace(/E/g, "Э");
  message = message.replace(/f/g, "ғ");
  message = message.replace(/F/g, "Ғ");
  message = message.replace(/h/g, "һ");
  message = message.replace(/H/g, "Һ");
  message = message.replace(/i/g, "і");
  message = message.replace(/I/g, "І");
  message = message.replace(/j/g, "ј");
  message = message.replace(/J/g, "Ј");
  message = message.replace(/k/g, "к");
  message = message.replace(/K/g, "К");
  message = message.replace(/m/g, "м");
  message = message.replace(/M/g, "М");
  message = message.replace(/n/g, "и");
  message = message.replace(/N/g, "И");
  message = message.replace(/o/g, "ө");
  message = message.replace(/O/g, "Ө");
  message = message.replace(/p/g, "р");
  message = message.replace(/P/g, "Р");
  message = message.replace(/q/g, "ԛ");
  message = message.replace(/Q/g, "Ԛ");
  message = message.replace(/r/g, "я");
  message = message.replace(/R/g, "Я");
  message = message.replace(/s/g, "ѕ");
  message = message.replace(/S/g, "Ѕ");
  message = message.replace(/t/g, "т");
  message = message.replace(/T/g, "Т");
  message = message.replace(/u/g, "ц");
  message = message.replace(/U/g, "Ц");
  message = message.replace(/v/g, "ѵ");
  message = message.replace(/V/g, "Ѵ");
  message = message.replace(/w/g, "ш");
  message = message.replace(/W/g, "Ш");
  message = message.replace(/x/g, "ж");
  message = message.replace(/X/g, "Ж");
  message = message.replace(/y/g, "ч");
  message = message.replace(/Y/g, "Ч");
  let msgObj = {
    name: "Яцѕѕіа Ьот ☭ (@RussiaBot)",
    color: "red",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hammer_and_sickle.svg/1024px-Hammer_and_sickle.svg.png",
    date: new Date().toString().substr(4).slice(0, -36).toString().substr(4).slice(0, -36),
    type: "message",
    message: message,
    channel: "",
    id: Math.random()
  };
  ws.send(JSON.stringify(msgObj));
}
