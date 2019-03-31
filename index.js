const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = 'https://sebasuz.herokuapp.com',
    token = process.env.TOKEN || '704759716:AAGbz6kGY7pE9U65ZmQ3591fNDo1-S_BFak',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(message.text)
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });
  
