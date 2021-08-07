const Discord = require("discord.js"); // A JS implementation of the Discord API
const request = require('request'); // Handles requests
module.exports = {
	name: '!github',
	description: '!github',
	execute(msg) {
		// Formatting
		function capitalizeFirstLetter(string){ // Capitalizes first letter of any given string
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		// Actual Code
		// Checks Github Status
		let githubStatus = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Howard Bot GitHub')
		.setURL('https://github.com/pforbeck/Howard-Discord-Bot')
		.setTimestamp()
		.setFooter('Brought to you by Howard', 'https://i.imgur.com/wdDNd67.png');
		msg.channel.send(githubStatus);
	},
};