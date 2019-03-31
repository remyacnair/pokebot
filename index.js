const TelegramBot = require('node-telegram-bot-api');
const request=require('request')

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = 'https://sebasuz.herokuapp.com',
    token = process.env.TOKEN || '704759716:AAGbz6kGY7pE9U65ZmQ3S91fNDo1-S_BFak',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text)
fun(){let url="http://api.chucknorris.io/jokes/random"
function request(url,function(err,body,response)
let data=JSON.parse(response)
 console.log(data.value)
   })}
  
        bot.sendMessage(chatId, fun());
        
    // send a message to the chat acknowledging receipt of their message
  
  });
  
