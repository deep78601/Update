const fs = require("fs");
module.exports.config = {
	name: "women",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "women",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Women")==0 || event.body.indexOf("Women")==0 || event.body.indexOf("Naari")==0 || event.body.indexOf("Stree")==0) {
		var msg = {
				body: "hehe women, stree, aurat, naari, mahila ☕☕☕☕ ek cup chay ☕ aur Prem se bolo Women☕ 🤣",
				attachment: fs.createReadStream(__dirname + `/noprefix/wn.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("☕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }