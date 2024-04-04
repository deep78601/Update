const fs = require("fs");
module.exports.config = {
	name: "ishika",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Ishika",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Km kar")==0 || event.body.indexOf("Apna km kar")==0 || event.body.indexOf("Koi km nhi")==0 || event.body.indexOf("Koi kam karle")==0) {
		var msg = {
				body: "😍😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/an1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }