const fs = require("fs");
module.exports.config = {
	name: "Noprefix1",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Purv", 
	description: "For Sister",
	commandCategory: "no prefix",
	usages: "Behna or anu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Soja bot")==0 || event.body.indexOf("Good night")==0 || event.body.indexOf("Gud night")==0 || event.body.indexOf("Gn")==0) {
		var msg = {
				body: "🙃✨✨💝💝 ✨💖🥀",
				attachment: fs.createReadStream(__dirname + `/cache/an2.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😴", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }