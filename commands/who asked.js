module.exports = {
	name: 'who asked',
	description: 'who asked',
	execute(msg) {
		var responses = ["yikers ", "schut ", "sus "];
		var who_asked = [
		"./command_additional_files/who asked/howard_with_gun.png", 
		"./command_additional_files/who asked/40f.png", 
		"./command_additional_files/who asked/692.png", 
		"./command_additional_files/who asked/HowardFear.png"];

		var int1 = (Math.random() * (responses.length) ) << 0
		var int2 = (Math.random() * (who_asked.length) ) << 0
		
		msg.channel.send(responses[int1], {files: [who_asked[int2]]});
	},
};