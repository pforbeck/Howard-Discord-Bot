module.exports = {
	name: 'sadge',
	description: 'sadge',
	execute(msg) {
		var int = (Math.random() * (5 - 0 + 1) ) << 0
		var responses = ["verily ", "omegalul ", "nomegalul ", "supertf died attempting to outhrow forsan... ", "fuck xqc ", "whatever you say pal "];
		msg.reply(responses[int], {files: ["./command_additional_files/howards/howard_stressed.png"]});
	},
};