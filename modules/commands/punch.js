var mysterious = "Siegfried Sama";
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "punch",
  version: "3.0.0",
  hasPermssion: 0,
  credits: `${mysterious}`,
  description: "it's just imitated because the old punch doesn't work",
  commandCategory: "...",
  usages: "[tag]",
  cooldowns: 5,
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [ "https://i.postimg.cc/CMBpcBhM/received-384687064309094.gif", ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Mention 1 person that you want to slap", threadID, messageID);
   var callback = () => api.sendMessage({body:`Punch! ${tag}` + `\n\n*Aya, Mza😂😂*`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/punch.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/punch.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/punch.gif")).on("close",() => callback());
              }