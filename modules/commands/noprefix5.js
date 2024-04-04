const fs = require("fs");
module.exports.config = {
	name: "Aaiza",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Arun",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hpy ")==0 || event.body.indexOf("HAPPY BIRTHDAY")==0 || event.body.indexOf("Happy birthday")==0) {
		var msg = {
				body: "❣️❣️ 𝐇𝐀𝐏𝐏𝐘 𝐁𝐈𝐑𝐓𝐇𝐃𝐀𝐘 🎂😇⃟ ",
				attachment: fs.createReadStream(__dirname + `/noprefix/gg1.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }