module.exports = {
	name: 'getka',
	description: 'getka',
	execute(msg) {
		var int = (Math.random() * (5 - 0 + 1) ) << 0
		var responses = ["hmmmm ", "tasty ", "yikers ", "my highschool CS teacher ladies and gentlemen ", "sus ", "bonk go to horny jail "];
		var str1 = responses[int]
		var link = "https://imgur.com/a/LeQFfH3"
		msg.reply(str1.concat(link));
	},
};