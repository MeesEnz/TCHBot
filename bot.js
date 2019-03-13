const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "!"

bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    
    let args = message.content.split(" ").slice(1);
    
       
    if (command === "repeat") {
        message.channel.sendMessage(args.join(" "));
    }
    
    
    if (command === "ping")) {
    	message.channel.sendMessage("Pong!");
  	}
    
    
    
});

bot.login(process.env.BOT_TOKEN);
