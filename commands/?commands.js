const Discord = require("discord.js"); // A JS implementation of the Discord API
module.exports = {
	name: '?commands',
	description: '?commands',
	execute(msg) {
		const embed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Howard Bot Commands')
		.setAuthor('Howard Bot', 'https://i.imgur.com/wdDNd67.png')
		.setThumbnail('https://i.imgur.com/wdDNd67.png')
		.addFields(
		{ name: 'Commands', value: '?commands\nhoward\nape escape\nboth of\ncandice\ndragon\nxqc\n!github', inline: true},
		{ name: '-', value: 'imagine dragons\nlick my\noh really\nparody\npong\nsadge\nstigma\nfizzle\ncd', inline: true},
		{ name: '-', value: '\ngetka\nhandful\nharambe\nhorny\nsuck my\nwendys\nwho asked\n!githubstatus', inline: true},
		)
		.setTimestamp()
		.setFooter('Brought to you by Howard', 'https://i.imgur.com/wdDNd67.png');
		msg.channel.send(embed);
	}
};