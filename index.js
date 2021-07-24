const fs = require('fs');
const jQuery = require('jQuery');
const Discord = require("discord.js"); // A JS implementation of the Discord API
const config = require("./config.json"); // Handles private variables

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Logs the bot in
client.login(config.BOT_TOKEN); 

let server = client.guilds.cache.find(guild => guild.id == config.TESTING_SERVER_ID) // Addresses the server
let text_channel = client.channels.cache.find(channel => channel.id == config.TESTING_CHANNEL_ID) // Addresses a text channel

let data = "https://ow-api.com/v1/stats/pc/us/EZPickens-1244/profile"

fs.writeFile('overwatch.json', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})

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

  // Checks that the incoming message has the specified prefix and does not originate from the bot
  if ((!msg.content.startsWith(config.PREFIX) && !msg.content.startsWith(config.PREFIX2)) || msg.author.bot) return;

    // Makes incoming sentence lowercase and makes the sentence an array of words
    const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/); // Makes 

    // Iterates through the array of words
    for (var i = 0; i < args.length; i++) { 
      // Makes the word lowercase, removes non-alphanumeric characters, and removes punctuation (except for '!')
      args[i] = args[i].toLowerCase(); 
      args[i] = args[i].replace(/[.,\/#$%\^&\*;:{}=\-_`~()]/g, "");
      console.log(args[i])
      
      try {
        // Attemps to retrieve and execute a one word file associated with the command
        client.commands.get(args[i]).execute(msg, args);
        console.log("- yea");
      } catch (error) {
        try {
          // Attemps to retrieve and execute a two word file associated with the command
          client.commands.get(args[i] + " " + args[i+1]).execute(msg, args);
          console.log("- yea");
        } catch (error) {
          // The word doesn't have a corresponding ".js" file or an exception occured
          console.log("- nah");
        }
      }
    }
});