const fs = require("fs");
module.exports.config = {
	name: "hug",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "JAGDEEP", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("HUG") ||
     react.includes("Hug") || react.includes("HUG YOU") || react.includes("hug") ||
react.includes("Hug me") ||
react.includes("Hug yoU")) {
		var msg = {
				body: `𝐈 𝐇𝐔𝐆 𝐘𝐎𝐔 𝐓𝐎 𝐁𝐀𝐁𝐘 🙊💞`,attachment: fs.createReadStream(__dirname + `/noprefix/hugyou.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }