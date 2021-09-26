const fs = require('fs');
const Discord = require("discord.js"); // A JS implementation of the Discord API
const config = require("./config.json"); // Handles private variables

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Logs the bot in
client.login(config.BOT_TOKEN); 

// Bot is ready to use
client.on('ready', () => { 
  client.user.setActivity('Ape Escape', { type: 'PLAYING' }) // Sets activity
  console.log(`Logged in as ${client.user.tag}!`); // Logs that the bot is online
});

// Bot is dead (sadge)
client.on('error', (err) => { 
    console.error(err);
});

// Finds files in the command folder that end with ".js"
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')) 

// Indexes the ".js" files findable so that they can be executed
for(const file of commandFiles){
  // Checks commands folder for corresponding file
   const command = require(`./commands/${file}`); 
   client.commands.set(command.name, command);
}

// Code for calling commands (user says ping, we say pong)
client.on('message', msg => {
  var commands = 3 // number of commands a user can execute per message
  // Checks that the incoming message has the specified prefix and does not originate from the bot
  if ((!msg.content.startsWith(config.PREFIX) && !msg.content.startsWith(config.PREFIX2)) || msg.author.bot) return;
    // Makes incoming sentence lowercase and makes the sentence an array of words
    const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/); // Makes
    // Iterates through the array of words
    for (var i = 0; i < args.length; i++) { 
      // Makes the word lowercase, removes non-alphanumeric characters, and removes punctuation (except for '!')
      console.log(args[i]);
      try {
        // Attemps to retrieve and execute a one word file associated with the command
        client.commands.get(args[i].replace(/[^a-zA-Z ]/g, "").toLowerCase()).execute(msg, args);
        console.log("- yea");
        commands--;
        if (commands < 1) { i = args.length }
      } catch (error) {
        try {
          // Attemps to retrieve and execute a two word file associated with the command
          client.commands.get(args[i] + " " + args[i+1]).execute(msg, args);
          console.log("- yea");
          commands--;
          if (commands < 1) { i = args.length }
        } catch (error) {
          // The word doesn't have a corresponding ".js" file or an exception occured
          console.log("- nah");
        }
      }
    }
});