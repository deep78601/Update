module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100092187319347","61552222097959") {
    var aid = ["100092187319347","61552222097959"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Abee Mere se baat Kar ..use mention kyu kar rhe ho😒", "Ohh busy a tang na kro 😌", "Wo Shayad Busy h😐🙄", "Tujhe sunai nhi deta meri dost ko tang na kr😒😒", "Meri dost ko tang naa karo", "Abee Bola na meri dost ko bar bar mention mat karo ek bar me nahi smjh nahi ata", "Kya kaam hai mujhe bol", "Ek Baar me samjh ni ata , kyu mention kar rhe ho use" ];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }