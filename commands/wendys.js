module.exports = {
	name: 'wendys',
	description: 'wendys',
	execute(msg) {
		var responses = ["in your mouth ", "on your face ", "down your throat ", "in your hands", "on your forehead ", "etc... "];
		var int = (Math.random() * (responses.length) ) << 0
		msg.channel.send("wendeez nutz go " + responses[int]);
	},
};