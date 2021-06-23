module.exports = {
	name: 'both of',
	description: 'both of',
	execute(msg) {
		var responses = ["hmmmm ", "tasty ", "yikers ", "my highschool CS teacher ladies and gentlemen ", "sus ", "bonk go to horny jail "];
		var int = (Math.random() * (responses.length) ) << 0
		msg.channel.send("bofa " + responses[int]);
	},
};