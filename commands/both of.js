module.exports = {
	name: 'bofa',
	description: 'bofa',
	execute(msg) {
		var int = (Math.random() * (5 - 0 + 1) ) << 0
		var responses = ["hmmmm ", "tasty ", "yikers ", "my highschool CS teacher ladies and gentlemen ", "sus ", "bonk go to horny jail "];
		msg.reply("bofa " + responses[int]);
	},
};