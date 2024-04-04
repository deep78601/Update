const fs = require("fs");
module.exports.config = {
	name: "Dfr",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "deep", 
	description: "hananahah",
	commandCategory: "no prefix3",
	usages: "Dfr",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bakwas")==0 || event.body.indexOf("Pagal")==0 || event.body.indexOf("Dfa ho")==0 || event.body.indexOf("Df")==0) {
		var msg = {
				body: "🙃😓😥",
				attachment: fs.createReadStream(__dirname + `/cache/nk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😥", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }