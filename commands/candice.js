module.exports = {
	name: 'candice',
	description: 'candice',
	execute(msg) {
		var int = (Math.random() * (5 - 0 + 1) ) << 0
		var responses = ["dick fit in your mouth", "dick sit on your face", "dick go down your throat", "dick go in your hands", "dick go on your forehead", "etc..."];
		var str1 = "candice "
		var response = str1.concat(responses[int])
		msg.reply(response);
	},
};