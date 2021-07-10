const shell = require('shelljs'); // To execute shell commands
module.exports = {
	name: '!stopmc',
	description: '!stopmc',
	execute(msg) {
		// Starts MC Server
		msg.reply("MC Server is dead...");
    	shell.exec('bash -c /home/pat/git-projects/Howard-Discord-Bot/commands/stopmc.sh')
	},
};