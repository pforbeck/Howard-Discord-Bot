const fs = require('fs');
const Discord = require("discord.js"); // A JS implementation of the Discord API
const config = require("./config.json"); // Handles private variables

const client = new Discord.Client();
client.commands = new Discord.Collection();

// Logs the bot in
client.login(config.BOT_TOKEN); 

// Function to check if a specific user is online and playing Overwatch and then send a message accordingly.
// Command is run every 3 minutes with checks to make sure the message is sent more than once
// Does NOT use the Discord presenceUpdate() function as it is not triggered when Activity starts, stops, or changes
// Can be extended to other games or Activities with Discord Integration.
// Addresses a specific server, specific text channel, specific user, specific users activity and status
// NOTE: This may not cover some edge cases but is believed to work for the most part
var announcedOW = false // Variable to see if the command should send a message or if it already has
var playingOW = false // Variable to see if the user is playing Overwatch
function gamerMoments(){ 
  let member = client.users.cache.find(user => user.id == config.MY_ID) // Addresses a user

  let server = client.guilds.cache.find(guild => guild.id == config.LIVE_SERVER_ID) // Addresses the server
  let text_channel = client.channels.cache.find(channel => channel.id == config.LIVE_CHANNEL_ID) // Addresses a text channel

  if (member.id == config.MY_ID) { // Checks for the Discord ID of a specific user
    var activityArr = []; // Creates an Array to store the Activity Object
    activityArr = member.presence.activities // Fills the array with the users current Activity object(s)
    if (server.id == config.LIVE_SERVER_ID){ // Checks for the Discord ID of a specific server
      if (member.presence.status == 'online' || member.presence.status == 'dnd' || member.presence.status == 'idle'){ // User is online or idle
        if (activityArr.length <= 1){ // Checks if an activity is possibly active
          announcedOW = false; // Bot has announced user is playing Overwatch variable is reset
          playingOW = false; // User playing Overwatch variable is reset
          return
        }
        for (var i = 0; i < activityArr.length; i++){ // Loops through all Activity object(s) in the array since there are more than 1
          if (activityArr[i].name == 'Overwatch'){ // Checks if the current Activity object being checked contains the name Overwatch
            i = activityArr.length // Exits the for loop when the Activity 'Overwatch' is detected
            playingOW = true; // playingOW is set to true since the user is playing Overwatch
            if (playingOW == true && announcedOW == true){ // User is playing Overwatch and it has been announced to the server, do nothing
              return
            }
            if (playingOW == true && announcedOW == false){ // User is playing Overwatch but it has not been announced to the server
              var text = "It is time for me to throw in Overwatch fellow gamers"; // Message is drafted
              text_channel.send(text); // Message is sent
              announcedOW = true; // Sets OW Announced to 'true'
              return
            }
          }else{ 
            // The user has not been detected to be playing Overwatch 
            // This will be set off once for the first Activity object but should correct itself when it detects Overwatch is being played by exiting the loop and setting 'playingOW' to 'true'
            playingOW = false;
          }
        }
        if (!playingOW){ // After looping through the for loop, if the 'playingOW' variable is still false, the user shouldn't be playing Overwatch and the code below is executed
          playingOW = false; // Changes playingOW to false
          announcedOW = false; // Changes announcedOW to false since playingOW is false
        }
      }else{ // User is offline or idle or an error occured
        playingOW = false; // Changes playingOW to false
        announcedOW = false; // Changes announcedOW to false since playingOW is false
        return
      }
    }else{ // Discord ID of a specific server cannot be found or an error occured
      return
    }
  }else{ // Discord ID of a specific user cannot be found or an error occured
    return 
  }
}

// Bot is ready to use
client.on('ready', () => { 
  client.user.setActivity('Ape Escape', { type: 'PLAYING' }) // Sets activity
  gamerMoments() // Executes "gamerMoments" on startup
  if (!announcedOW){
    setInterval(() => (gamerMoments()), 180000) // Executes the "gamerMoments" command every 3 minutes
  }
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