module.exports = {
	name: 'candice',
	description: 'candice',
	execute(msg) {
		var responses = ["dick fit in your mouth", "dick sit on your face", "dick go down your throat", "dick go in your hands", "dick go on your forehead", "etc..."];
		var int = (Math.random() * (responses.length - 0 + 1) ) << 0
		msg.reply("candice " + responses[int]);
	},
};