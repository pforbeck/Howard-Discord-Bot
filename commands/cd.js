module.exports = {
	name: 'cd',
	description: 'cd',
	execute(msg) {
		var responses = [" in your mouth", " on your face", " down your throat", " in your hands", " on your forehead", "etc..."];
		var int = (Math.random() * (responses.length - 0 + 1) ) << 0
		msg.reply("cdeeznutz " + responses[int]);
	},
};