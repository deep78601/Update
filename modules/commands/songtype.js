const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot2",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Fixed By Jagdeep",
  description: "goibot2",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Main Tenu Smjhava ki, Naa Yere bina lagda jee, tu ki jaane pyar mera , me kru intezaar tera .." , "ਮੰਗਦੇ ਆ Wish ਕਹਿੰਦੇ ਕਰਨਾ Finish ਜੱਟ ਚੋਕ ਲਾ ਕੇ ਹੋਇਆ ਨੀ Start ਬੱਲੀਏ☝🏻" , "ਪਿੰਡ ਬਹੁਤਿਆਂ ਨੂੰ ਸ਼ੱਕ ਆ #Black ਕਰਦੇ....😈👽" , "ਹੋਣਾ Success ਕੋਈ ਵੱਡੀ ਗੱਲ ਨੀ ਹੋਵੇ ਨਾ ਰਕਾਨੇ ਬੰਦਾ ਮਾੜਾ ਨੀਤ ਦਾ💯💯" , "ਚਿੱਤੇ ਕੁੱਤਿਆਂ ਦੀ ਦੌੜ ਚ ਨੀ ਭੱਜਦੇ..ਰੌਲਾ ਥੌਡੇ ਨਾਲ ਮੇਰਾ ਕੋਈ ਵਿਚਾਰ⚔ ਨੀ..😈" , "Tu naa jaan di, kaarobar ni, jaali number plate lagi car di, ha face utte a glow, puchi naa tikaane sare rhnde aa ni low, ek do" , "kehndi hundi si chann tak raah banade , taare ne pasand menu heyha saare laade , ohna tareya de vicho jado menu dekhegi ni meri yaad jado au, odo pata laggu ga" , "ਸਾਰਾ ਜੱਗ ਜਿੱਤ ਲੈਣਾ ਏ ਮੈਂ ਵੇਖ ਲਈਂ ਫੇਰ ਕਦਮਾਂ 'ਚ ਰੱਖੂ ਬੇਬੇ ਬਾਪੂ ਦੇ👫" , "🤙🏻ਜਿੱਥੇ ਅੜਦੀ ਗਰਾਰੀ ਪੂਰੀ ਮਿੱਤਰਾਂ ਅੜਾਈ ਆ💖ਐਥੋ ਪਤਾ ਲੱਗਦਾ ਆ JATT ਦੀ ਚੜਾਈ ਆ😈" , " ਫੈਰ ਜਿੰਨਾ ਦਬਕਾ ਤਾਂ ਮੁੱਛ ਮਾਰਦੀ VALUE ਪਤਾ ਆ ਵੈਲੀਆਂ ਨੂੰ ਯਾਰ ਦੀ..✌🏻" , "waqt Bhi thahara Hai Kaise Kyun ye Hua Kash Tu Aise Aaye Jaise koi Dua Yeh Meri zamanat Hai Tu Meri Ibadat Hai Apne Karm Ki Kar adaen Kar Le idhar Bhi Tu Nigahen Sun Raha Hai Na Tu Ro Raha Hun Main" , "Kyon Ek Pal Ki Bhi Judaai sahi jaaye na kyon Har Subah Tu Meri Sanson Mein Samaye na Aaja Na Tu mere pass Dunga Itna Pyar Kitni Raat Gujari hai tere Intezar Mein" , " uska hun ,usmein hun ,use hun Usi Ka Rahane De Main To Pyasa Hoon Hai Dariya O zariya wo Jeene Ka Mere, Dil Mujhe De Agar ,Dard De uska per ,uski ho vah Hansi Gunje Jo Mera Ghar"]
  var rand = tl[Math.floor(Math.random() * tl.length)]
   mess = "{name}"

  if (event.body.indexOf("Song") == 0 || (event.body.indexOf("song") == 0)) {
    var msg = {
      body: `𝗛𝗲𝗹𝗹𝗼 🎵${name}🔊,  \n\n𝗧𝗵𝗶𝘀 𝗶𝘀 𝗙𝗼𝗿 𝘆𝗼𝘂💞 »»\n『\n   ${rand}  』\n\n𝙲𝚛𝚎𝚍𝚒𝚝𝚜»» ◎ 𝙅𝙖𝙜𝙙𝙚𝙚𝙥 𝙨𝙞𝙣𝙜𝙝 ◎`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }