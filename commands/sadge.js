module.exports = {
	name: 'sadge',
	description: 'sadge',
	execute(msg) {
		var responses = ["verily ", "omegalul ", "nomegalul ", "supertf died attempting to outhrow forsen... ", "fuck xqc ", "whatever you say pal "];
		var int = (Math.random() * (responses.length) ) << 0
		msg.channel.send(responses[int], {files: ["./command_additional_files/howards/howard_stressed.png"]});
	},
};