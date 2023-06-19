module.exports.config = {

    name: 'autosend',

    version: '10.02',

    hasPermssion: 2,

    credits: 'DC-Nam',

    description: 'Tự động gửi tin nhắn theo giờ đã cài!',

    commandCategory: 'Hệ thống',

    usages: '[]',

    cooldowns: 3

};

const r = a => a[Math.floor(Math.random()*a.length)],

{

    get

} = require('axios'),

config = [
{
  timer: '6:00:00 AM',
        message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘀𝗮́𝗻𝗴 𝘃𝘂𝗶 𝘃𝗲̉.\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
          {
  timer: '12:00:00 AM',
    message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗿𝘂̛𝗮 𝘃𝘂𝗶 𝘃𝗲̉.\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
},
{
        timer: '7:00:00 PM',
        message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗖𝗵𝘂́𝗰 𝗺𝗼̣𝗶 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝘂𝗼̂̉𝗶 𝘁𝗼̂́𝗶 𝘃𝘂𝗶 𝘃𝗲̉.\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']

    },
    {
        timer: '12:00:00 PM',
          message: ['==== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ====\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ 𝗕𝗮̂𝘆 𝗚𝗶𝗼̛̀ 𝗟𝗮̀: {time} \n🧸 𝗞𝗵𝘂𝘆𝗮 𝗿𝗼̂̀𝗶 𝗻𝗴𝘂̉ đ𝗶 𝗯𝗼̣𝗻 𝗹.\n💬 𝗖𝗮̂𝘂 𝘁𝗵𝗶́𝗻𝗵:{thinh}\n▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱▱\n➝ Đ𝗮̂𝘆 𝗹𝗮̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴']
      }
];


module.exports.onLoad = o => {

    if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);

    global.autosendmessage_setinterval = setInterval(async function() {

        if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {

            var msg = r(á.message);

            msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Ho_Chi_Minh").format("HH:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(` https://api-hoangphuong--cutecana.repl.co/thinh`)).data.url)

            msg = {

                body: msg, attachment: (await get((await get(`https://api-hoangphuong.cutecana.repl.co/girl`)).data.url, {

                    responseType: 'stream'

                })).data

            };

            global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));

        };

    }, 1000);

};

module.exports.run = () => {};