module.exports = {
	name: 'getka',
	description: 'getka',
	execute(msg) {
		var responses = ["hmmmm ", "tasty ", "yikers ", "my highschool CS teacher ladies and gentlemen ", "sus ", "bonk go to horny jail "];
		var int = (Math.random() * (responses.length - 0 + 1) ) << 0
		msg.reply(responses[int], {files: ["./command_additional_files/getka/getka.mp4"]});
	},
};