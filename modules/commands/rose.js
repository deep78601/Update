const fs = require("fs");
module.exports.config = {
	name: "rose",
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
	if(react.includes("rose") ||
     react.includes("happy rose") || react.includes("Rose") || react.includes("rose de bot") ||
react.includes("rose me") ||
react.includes("bot happy rose")) {
		var msg = {
				body: `🌹𝐘𝐄 𝐋𝐎 𝐑𝐎𝐒𝐄 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 🌹`,attachment: fs.createReadStream(__dirname + `/cache/rose.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🌹", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }