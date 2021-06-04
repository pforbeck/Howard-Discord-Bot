const fs = require('fs')
const Discord = require("discord.js");
const config = require("./config.json"); // Handles private variables

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.login(config.BOT_TOKEN); // Logs the bot in

client.on('ready', () => { // Bot is ready to use
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on("error", (err) => { // Bot is dead (sadge)
    console.error(err);
});

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')) // Finds files in the command folder that end with ".js"
for(const file of commandFiles){ // Indexes the ".js" files findable so that they can be executed
   const command = require(`./commands/${file}`);
   client.commands.set(command.name, command);
}

// Code for calling commands (user says ping, we say pong)
client.on('message', msg => { // Bot sees a message
  if (msg.content == "!startmc"){
    client.commands.get("!startmc").execute(msg, args);
  }

  if (!msg.content.startsWith(config.PREFIX) || msg.author.bot) return; // Checks that message has prefix and does not originate from the bot

    const message = msg.content.toLowerCase(); // Makes incoming sentence lowercase
    const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/); // Makes the sentence an array of words
    var i;
    for (i = 0; i < args.length; i++) { // Iterates through the incoming messages words
      args[i] = args[i].toLowerCase(); // Makes the word lowercase
      console.log(args[i]) // For debugging
      args[i] = args[i].replace(/[^0-9a-z]/gi, ""); // Removes non-alphanumeric characters
      args[i] = args[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // Removes punctuation
      try {
        client.commands.get(args[i]).execute(msg, args); // Attemps to retrieve and execute the file associated with the command
        console.log("- yea"); // It worked
      } catch (error) {
        console.log("- nah"); // The word doesn't have a corresponding ".js" file or an exception occured
      }
    }
});

// https://stackoverflow.com/questions/65509847/discord-bot-crashes-when-a-command-executed-in-discord-js