module.exports = {
	name: 'cd',
	description: 'cd',
	execute(msg) {
		var int = (Math.random() * (5 - 0 + 1) ) << 0
		var responses = [" in your mouth", " on your face", " down your throat", " in your hands", " on your forehead", "etc..."];
		var str1 = "cdeeznutz "
		var response = str1.concat(responses[int])
		msg.reply(response);
	},
};