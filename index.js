const fs = require('fs')
const Discord = require("discord.js");
const config = require("./config.json"); // Handles token and prefix

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.login(config.BOT_TOKEN); // Logs the bot in

client.on('ready', () => { // Bot is ready to use
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on("error", (err) => { // Bot is dead (sadge)
    console.error(err);
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
   const command = require(`./commands/${file}`);
   client.commands.set(command.name, command);
}

// Code for calling commands (user says ping, we say pong)
client.on('message', msg => { // Bot sees a message
  if (!msg.content.startsWith(config.PREFIX) || msg.author.bot) return; // Checks that message has prefix and does not originate from the bot

    const message = msg.content.toLowerCase(); // Makes incoming sentence lowercase
    const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/); // Makes the sentence an array of words
    var i;
    for (i = 0; i < args.length; i++) {
      args[i] = args[i].toLowerCase();
      console.log(args[i])
      args[i] = args[i].replace(/[^0-9a-z]/gi, ""); // Removes non-alphanumeric characters
      args[i] = args[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // Removes punctuation
      try {
        client.commands.get(args[i]).execute(msg, args); // Attemps to retrieve and execute the file associated with the command
        console.log("- yea");
      } catch (error) {
        console.log("- nah");
        //msg.reply('There was an error trying to execute that command!'); // Cannot find command and replies with 'nah'.
      }
    }
    /*
    console.log(args)
    const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/); // Trims the prefix
	  const command = args.shift().toLowerCase(); // Makes it lowercase and names the altered message 'command'.
    console.log(command)

    try {
		client.commands.get(command).execute(msg, args); // Attemps to retrieve and execute the file associated with the command
	} catch (error) {
		console.error(error);
		msg.reply('There was an error trying to execute that command!'); // Cannot find command and replies with 'nah'.
	}
  */
});

// https://stackoverflow.com/questions/65509847/discord-bot-crashes-when-a-command-executed-in-discord-js