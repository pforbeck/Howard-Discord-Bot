const shell = require('shelljs'); // To execute shell commands
module.exports = {
	name: '!startmc',
	description: '!startmc',
	execute(msg) {
		// Starts MC Server
		msg.reply("MC Server is starting!");
    	shell.exec('bash -c /home/pat/git-projects/Howard-Discord-Bot/commands/startmc.sh')
	},
};