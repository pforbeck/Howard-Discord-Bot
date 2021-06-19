const fs = require('fs');
const Discord = require("discord.js"); // A JS implementation of the Discord API
const shell = require('shelljs'); // To execute shell commands
const config = require("./config.json"); // Handles private variables

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.login(config.BOT_TOKEN); // Logs the bot in

client.on('ready', () => { // Bot is ready to use
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('error', (err) => { // Bot is dead (sadge)
    console.error(err);
});

// Actual bot code below

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')) // Finds files in the command folder that end with ".js"
for(const file of commandFiles){ // Indexes the ".js" files findable so that they can be executed
   const command = require(`./commands/${file}`); // Checks commands folder for corresponding file
   client.commands.set(command.name, command);
}

// Code for calling commands (user says ping, we say pong)
client.on('message', msg => { // Bot sees a message

  if (msg.content == "!startmc"){ // Starts MC Server
    msg.reply("MC Server is starting!");
    shell.exec('bash -c /home/pat/git-projects/Howard-Discord-Bot/commands/startmc.sh')
  }

  if (msg.content == "!stopmc"){ // Stops MC Server
    msg.reply("MC Server is dead...");
    shell.exec('bash -c /home/pat/git-projects/Howard-Discord-Bot/commands/stopmc.sh')
  }

  if (!msg.content.startsWith(config.PREFIX) || msg.author.bot) return; // Checks that message has prefix and does not originate from the bot

    const message = msg.content.toLowerCase(); // Makes incoming sentence lowercase
    const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/); // Makes the sentence an array of words

    for (var i = 0; i < args.length; i++) { // Iterates through the array of words
      args[i] = args[i].toLowerCase(); // Makes the word lowercase
      console.log(args[i]) // For debugging
      args[i] = args[i].replace(/[^0-9a-z]/gi, ""); // Removes non-alphanumeric characters
      args[i] = args[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // Removes punctuation
      
      try {
        client.commands.get(args[i]).execute(msg, args); // Attemps to retrieve and execute a one word file associated with the command
        console.log("- yea"); // It worked
      } catch (error) {
        try {
          client.commands.get(args[i] + " " + args[i+1]).execute(msg, args); // Attemps to retrieve and execute a two word file associated with the command
          console.log("- yea"); // It worked
        } catch (error) {
          console.log("- nah"); // The word doesn't have a corresponding ".js" file or an exception occured
        }
      }
    }
});

// https://stackoverflow.com/questions/65509847/discord-bot-crashes-when-a-command-executed-in-discord-js