const fs = require('fs')
const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.login(config.BOT_TOKEN);

client.once('ready', () => {
    console.log('Ready!');
  });

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
   const command = require(`./commands/${file}`);
   client.commands.set(command.name, command);
}

// https://stackoverflow.com/questions/65509847/discord-bot-crashes-when-a-command-executed-in-discord-js