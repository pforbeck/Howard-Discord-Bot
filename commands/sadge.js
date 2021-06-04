module.exports = {
	name: 'sadge',
	description: 'sadge',
	execute(msg) {
		var int = (Math.random() * (5 - 0 + 1) ) << 0
		var responses = ["verily ", "omegalul ", "nomegalul ", "supertf died attempting to outhrow forsen... ", "fuck xqc ", "whatever you say pal "];
		var str1 = responses[int]
		var link = "https://imgur.com/a/G0nE8Pl"
		msg.reply(str1.concat(link));
	},
};