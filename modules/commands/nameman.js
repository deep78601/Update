//@jagdeep-singh3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT JAGDEEP SINGH
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "namemn",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "JAGDEEP",
  description: "ALL REPLY JAGDEEP SINGH",
  commandCategory: "Noprefix",
  usages: "Deep or BOT",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
//JO COMMAND CHANGE KREGA USKI BEHN PREM KI RAKHEL HOGI 
  var tl = [""];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "@Sharma Sonali Sharma") || (event.body.toLowerCase() == "@sharma sonali sharma") || (event.body.toLowerCase() == "@Sonali Sharma Sharma") || (event.body.toLowerCase() == "@sonali sharma sharma")) {
     return api.sendMessage("ਜੂਆ ਦੀ ਮਾਰੀ ਨੂੰ ਨਾ ਬੁਲਾ ,ਇਹਦੇ ਸਿਰ ਚੋ ਗੋਡੇ ਗੋਡੇ ਜੂਆ ਨੇ 🙂", threadID);
   };

    if ((event.body.toLowerCase() == "@ਹਾਂ ਹੈਗੇ ਆ") || (event.body.toLowerCase() == "@ਹਾਂ ਹੈਗੇ ਆ") || (event.body.toLowerCase() == "@ਹਾਂ ਹੈਗੇ ਆ ") || (event.body.toLowerCase() == "Coll")) {
     return api.sendMessage("ਇਹ ਦੋ ਜਵਾਕਾਂ ਦੀ ਮੰਮੀ ਆ ਮੈ ਕਾਲ ਤੇ ਇਹਦੇ ਜਵਾਕਾਂ ਦੀ ਆਵਾਜ਼ ਸੁਣੀ ਆ 😒👈", threadID);
   };

   if ((event.body.toLowerCase() == "@ਜੱਗਾ ਜੱਟ") || (event.body.toLowerCase() == "@ਜੱਗਾ ਜੱਟ")) {
    return api.sendMessage("ਇਹ ਲੁੱਚਿਆ ਦਾ ਸਰਦਾਰ ਏ 🤨👈", threadID);
   };

    if ((event.body.toLowerCase() == "@Sana Kaur") || (event.body.toLowerCase() == "@sana kaur") || (event.body.toLowerCase() == "sana") || (event.body.toLowerCase() == "@sana kaur")) {
     return api.sendMessage("Sana Moye Moye 🤨👈", threadID);
   };

  if ((event.body.toLowerCase() == "@Karishma Karishma") || (event.body.toLowerCase() == "@karishma karishma") || (event.body.toLowerCase() == "@Karishma ") || (event.body.toLowerCase() == "Karishma")) {
     return api.sendMessage("ਉਹ ਪੋਚਾ ਮਾਰਨ ਚੋ ਬੀਜੀ ਏ 🥵😶", threadID);
   };

   if ((event.body.toLowerCase() == "@𒄬｢𝐖 𝐈 𝐍 𝐒 𝐓 𝐎 𝐍᭄｣ 爾") || (event.body.toLowerCase() == "@𒄬｢𝐖 𝐈 𝐍 𝐒 𝐓 𝐎 𝐍᭄｣ 爾") || (event.body.toLowerCase() == "brar") || (event.body.toLowerCase() == "ਬਰਾੜ")) {
     return api.sendMessage("ਟੈਪੂ ਨੂੰ ਨਾ ਬਲਾਉ ਉਹ ਲੋਕਾ ਸਰਵਿਸ ਦੇ ਰਿਹਾ 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "@ਕੁੜੀਆ ਨੂੰ ਕੁੱਟਣ ਵਾਲਾ ") || (event.body.toLowerCase() == "@ਕੁੜੀਆ ਨੂੰ ਕੁੱਟਣ ਵਾਲਾ") || (event.body.toLowerCase() == "@ਕੁੜੀਆ ਨੂੰ ਕੁੱਟਣ ਵਾਲਾ ") || (event.body.toLowerCase() == "@ਕੁੜੀਆ ਨੂੰ ਕੁੱਟਣ ਵਾਲਾ")) {
     return api.sendMessage("ਉਹ ਨਾਲੀਆ ਸਾਫ ਕਰ ਰਿਹਾ 😒👈", threadID);
   };

  if ((event.body.toLowerCase() == "shat up") || (event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "shut") || (event.body.toLowerCase() == "stup")) {
     return api.sendMessage("You Stup Up 😕👈", threadID);
   };

  if ((event.body.toLowerCase() == "@ਨਵਰਾਜ ਕੌਰ") || (event.body.toLowerCase() == "️️️️️️️️️️️️️️️️️️️️️️️@ਨਵਰਾਜ ਕੌਰ ") || (event.body.toLowerCase() == "️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️️@ਨਵਰਾਜ ਕੌਰ") || (event.body.toLowerCase() == "🥰🥰🥰🥰ਕਤ")) {
     return api.sendMessage("ਉਹ ਨੱਕ ਪੂੰਝਣ ਚੋ ਬੀਜੀ ਆ 😂", threadID);
   };

  if ((event.body.toLowerCase() == "ludo") || (event.body.toLowerCase() == "ludo link do") || (event.body.toLowerCase() == "ludo lwo") || (event.body.toLowerCase() == "link do")) {
     return api.sendMessage("मुझे लूडो खेलना नही आता 🥺👈", threadID);
   };

  if ((event.body.toLowerCase() == "@Preet Sharma") || (event.body.toLowerCase() == "@preet sharma") || (event.body.toLowerCase() == "@Preet Sharma") || (event.body.toLowerCase() == "@PREET Sharma")) {
     return api.sendMessage("ਉਹ ਨੱਕ ਪੁੰਝਣ ਚੋ ਬੀਜੀ ਏ 😒👈", threadID);
   };
  
   mess = "{name}"   //THIS BOT IS MADE BY JAGDEEP SINGH
  
if (event.body.indexOf("n😂😂😐💔625") == 0 || (event.body.indexOf("jah😴✌🤦‍♂️626") == 0)) {
    var msg = {
      body: `✧════•❁${name}❁•════✧\n\n ${rand} \n\n                       ◦•●◉✿🤣✿◉●•◦`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { } 