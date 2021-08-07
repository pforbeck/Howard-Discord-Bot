const Discord = require("discord.js"); // A JS implementation of the Discord API
const request = require('request'); // Handles requests
module.exports = {
	name: '!githubstatus',
	description: '!githubstatus',
	execute(msg) {
		// Formatting
		function capitalizeFirstLetter(string){ // Capitalizes first letter of any given string
			return string.charAt(0).toUpperCase() + string.slice(1);
		}

		// Actual Code
		// Checks Github Status
		request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {
		let githubStatus = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('GitHub Status')
		.setURL(body.page.url)
		.setThumbnail('https://i.imgur.com/O3WvuHp.png')
		.addFields(
		{ name: 'GitHub System Status', value: body.status.description},
		{ name: '\u200B', value: '\u200B' },
		{ name: body.components[0].name, value: capitalizeFirstLetter(body.components[0].status), inline: true },
		{ name: body.components[1].name, value: capitalizeFirstLetter(body.components[1].status), inline: true },
		{ name: body.components[2].name, value: capitalizeFirstLetter(body.components[2].status), inline: true },
		{ name: body.components[4].name, value: capitalizeFirstLetter(body.components[4].status), inline: true },
		{ name: body.components[5].name, value: capitalizeFirstLetter(body.components[5].status), inline: true },
		{ name: body.components[6].name, value: capitalizeFirstLetter(body.components[6].status), inline: true },
		{ name: body.components[7].name, value: capitalizeFirstLetter(body.components[7].status), inline: true },
		{ name: body.components[8].name, value: capitalizeFirstLetter(body.components[8].status), inline: true },
		)
		.setTimestamp()
		.setFooter('Brought to you by Howard', 'https://i.imgur.com/wdDNd67.png');
		msg.channel.send(githubStatus);
		});	
	},
};