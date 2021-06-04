module.exports = {
	name: 'howard',
	description: 'howard deez nutz!',
	execute(msg) {
		var int1 = (Math.random() * (5 - 0 + 1) ) << 0
		var int2 = (Math.random() * (2 - 0 + 1) ) << 0
		var howard = ["https://imgur.com/a/KtJNSar", "https://imgur.com/a/WJDZhG6", "https://imgur.com/a/woaqfkD"]
		var responses = ["in your mouth ", "on your face ", "down your throat ", "in your hands", "on your forehead ", "etc... "];
		var str1 = "howard deez nutz "
		var response = str1.concat(responses[int1], howard[int2])
		msg.reply(response);
	},
};