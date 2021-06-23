module.exports = {
	name: 'who asked',
	description: 'who asked',
	execute(msg) {
		var responses = ["yikers ", "schut ", "sus ", "bonk go to horny jail "];
		var int = (Math.random() * (responses.length) ) << 0
		msg.channel.send(responses[int], {files: ["./command_additional_files/howards/howard_with_gun.png"]});
	},
};