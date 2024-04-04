module.exports.config = {
  name: "admin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100093195437378") {
    var aid = ["100093195437378",];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Abee Mere se baat Kar ..mom ko kyu kar rhe ho😒", "Kya Hua mom ko q Bula Rhe Ho?", "Wo Shayad Busy h😐🙄", "Tujhe sunai nhi deta meri mom ko tang na kr😒😒", "main tera sir pad dena meri mom ko tng kiya to", "Abee Bola na meri mom ko bar bar mention mat karo ek bar me nahi smjh nahi ata", "Kya kaam hai mujhe bol", "Main tera sir pad dena 🙄" ];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }