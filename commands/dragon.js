module.exports = {
	name: 'parody',
	description: 'parody',
	execute(msg) {
		var int = (Math.random() * (5 - 0 + 1) ) << 0
		var responses = ["in your mouth ", "on your face ", "down your throat ", "in your hands", "on your forehead ", "etc... "];
		msg.reply("parody nutz " + responses[int]);
	},
};