module.exports = {
	name: 'dragon',
	description: 'dragon',
	execute(msg) {
		var int = (Math.random() * (responses.length - 0 + 1) ) << 0
		var responses = ["in your mouth ", "on your face ", "down your throat ", "in your hands", "on your forehead ", "etc... "];
		msg.reply("dragon deez nutz " + responses[int]);
	},
};