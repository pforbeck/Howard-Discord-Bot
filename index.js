const fs = require('fs');
const Discord = require("discord.js"); // A JS implementation of the Discord API
const shell = require('shelljs'); // To execute shell commands
const config = require("./config.json"); // Handles private variables

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Logs the bot in
client.login(config.BOT_TOKEN); 

// Bot is ready to use
client.on('ready', () => { 
    console.log(`Logged in as ${client.user.tag}!`);
  });

// Bot is dead (sadge)
client.on('error', (err) => { 
    console.error(err);
});

// Actual bot code below

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

  // Starts MC Server
  if (msg.content == "!startmc"){ 
    msg.reply("MC Server is starting!");
    shell.exec('bash -c /home/pat/git-projects/Howard-Discord-Bot/commands/startmc.sh')
  }

  // Stops MC Server
  if (msg.content == "!stopmc"){
    msg.reply("MC Server is dead...");
    shell.exec('bash -c /home/pat/git-projects/Howard-Discord-Bot/commands/stopmc.sh')
  }

  // Checks that the incoming message has the specified prefix and does not originate from the bot
  if (!msg.content.startsWith(config.PREFIX) || msg.author.bot) return;

    // Makes incoming sentence lowercase and makes the sentence an array of words
    const message = msg.content.toLowerCase(); 
    const args = msg.content.slice(config.PREFIX.length).trim().split(/ +/); // Makes 

    // Iterates through the array of words
    for (var i = 0; i < args.length; i++) { 
      // Makes the word lowercase, removes non-alphanumeric characters, and removes punctuation
      args[i] = args[i].toLowerCase(); 
      // For debugging
      console.log(args[i])
      args[i] = args[i].replace(/[^0-9a-z]/gi, ""); 
      args[i] = args[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
      
      try {
        // Attemps to retrieve and execute a one word file associated with the command
        client.commands.get(args[i]).execute(msg, args);
        // It worked
        console.log("- yea");
      } catch (error) {
        try {
          // Attemps to retrieve and execute a two word file associated with the command
          client.commands.get(args[i] + " " + args[i+1]).execute(msg, args);
          // It worked
          console.log("- yea");
        } catch (error) {
          // The word doesn't have a corresponding ".js" file or an exception occured
          console.log("- nah");
        }
      }
    }
});

// https://stackoverflow.com/questions/65509847/discord-bot-crashes-when-a-command-executed-in-discord-js