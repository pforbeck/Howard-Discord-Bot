module.exports = {
	name: 'horny',
	description: 'horny',
	execute(msg) {
		var horny = [
		"./command_additional_files/horny/9fe.jpg", 
		"./command_additional_files/horny/100.jpeg", 
		"./command_additional_files/horny/afa.png", 
		"./command_additional_files/horny/b82.png",
		"./command_additional_files/horny/bonk.png", 
		"./command_additional_files/horny/e74.png", 
		"./command_additional_files/horny/efa.png"];

		var int = (Math.random() * (horny.length) ) << 0
		
		msg.channel.send("bonk go to horny jail", {files: [who_asked[int]]});
	},
};