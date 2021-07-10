module.exports = {
	name: 'fizzle',
	description: 'fizzle',
	execute(msg) {
		var responses = ["in your mouth ", "on your face ", "down your throat ", "in your hands", "on your forehead ", "etc... "];
		var fizzle = [
		"https://preview.redd.it/cfy0e9pog9m51.jpg?width=640&crop=smart&auto=webp&s=74eb6c8f84598640e6267019f470e5c62a2e3696",
		"https://preview.redd.it/cfy0e9pog9m51.jpg?width=640&crop=smart&auto=webp&s=74eb6c8f84598640e6267019f470e5c62a2e3696",
		"https://preview.redd.it/ozajwcuta8d51.jpg?width=960&crop=smart&auto=webp&s=2d770e485f4854bff146d17cb76addc0d40440d2",
		"https://i.imgur.com/nYowMaW",
		"https://i.imgur.com/aM9oTFS",
		"https://i.imgur.com/B4b0rlR"]

		var int1 = (Math.random() * (responses.length) ) << 0
		var int2 = (Math.random() * (fizzle.length) ) << 0

		msg.channel.send("fizzle deez nutz " + responses[int1], {files: [fizzle[int2]]});
	},
};