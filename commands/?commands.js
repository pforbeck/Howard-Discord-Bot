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
		{ name: 'Commands', value: '!github\n!startmc\n!stopmc\n?commands\nape escape\nboth of\ncandice\ncd\ndragon\nfizzle\ngetka\nhandful\nharambe\nhorny\nhoward\nimagine dragons\nlick my\noh really\nparody\npong\nsadge\nstigma\nsuck my\nwendys\nwho asked\nxqc'},
		)
		.setTimestamp()
		.setFooter('Brought to you by Howard', 'https://i.imgur.com/wdDNd67.png');
		msg.channel.send(embed);
	}
};