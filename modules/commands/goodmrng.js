const fs = require("fs");
module.exports.config = {
	name: "good",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "deep1", 
	description: "good mrn",
	commandCategory: "bgchama",
	usages: "gmgm",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Good morning")==0 || event.body.indexOf("Gud morning")==0 || event.body.indexOf("Gm")==0 || event.body.indexOf("Vgm")==0) {
		var msg = {
				body: "✨🥱🥱😬✨ ",
				attachment: fs.createReadStream(__dirname + `/cache/ay1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }