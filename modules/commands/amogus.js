const fs = require("fs");
module.exports.config = {
	name: "megha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Ishika", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sus",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Jagi")==0 || event.body.indexOf("Barish")==0 || event.body.indexOf("Mosum")==0 || event.body.indexOf("Barsat")==0) {
		var msg = {
				body: "😍 💝 ------ re..Barso re..😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/meghu.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌧", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }