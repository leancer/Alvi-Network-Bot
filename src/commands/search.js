const bot = require("../init");
const searchApi = require('../utils/search');

bot.onText(/\/search (.*)/, async (msg, match) => {
    
    const chatId = msg.chat.id;
    const searchString = match[1];

    const res = await searchApi(searchString);
    
    if(res){

        let replMsg = `Hey @${msg.from.username}, Here Your Result for ${searchString} \n\n`;

        res.forEach((item) => {
            replMsg += `\n <a href="${item.link}"><b>${item.title}</b></a> \n`;
        })

        replMsg += `\n <i>Alvi Network Team</i>`

        bot.sendMessage(chatId,replMsg,{parse_mode : "HTML"});

    }else{
        bot.sendMessage(chatId, `Hey @${msg.from.username}, there are no result for ${searchString}`);
    }

    

});

