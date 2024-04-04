const fs = require("fs");
module.exports.config = {
	name: "Nop",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "deep", 
	description: "hcacahah",
	commandCategory: "no prefix2",
	usages: "hei",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Lat")==0 || event.body.indexOf("Kut ")==0 || event.body.indexOf("Chaped")==0 || event.body.indexOf("Chped")==0) {
		var msg = {
				body: "😓😭😥",
				attachment: fs.createReadStream(__dirname + `/cache/kutt.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }