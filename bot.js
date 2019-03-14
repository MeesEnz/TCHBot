const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "!"

client.on('message', message => {
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

client.login(process.env.BOT_TOKEN);
