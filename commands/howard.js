module.exports = {
	name: 'howard',
	description: 'howard',
	execute(msg) {
		var howard = [
		"./command_additional_files/howards/Howard_Bonk_2.png",
		"./command_additional_files/howards/Howard_Bonk.png",
		"./command_additional_files/howards/Howard_Excite.png",
		"./command_additional_files/howards/Howard_Left.png",
		"./command_additional_files/howards/Howard_Right.png",
		"./command_additional_files/howards/Howard.jpg",
		"./command_additional_files/howards/HowardAngy.png",
		"./command_additional_files/howards/HowardBalls.png",
		"./command_additional_files/howards/HowardBean.png",
		"./command_additional_files/howards/HowardBruh.png",
		"./command_additional_files/howards/HowardBruhMoments.png",
		"./command_additional_files/howards/HowardConfused.png",
		"./command_additional_files/howards/HowardDent.png",
		"./command_additional_files/howards/HowardDrunk.png",
		"./command_additional_files/howards/HowardFear.png",
		"./command_additional_files/howards/HowardGrovel.png",
		"./command_additional_files/howards/HowardLurk.png",
		"./command_additional_files/howards/HowardLurk2.png",
		"./command_additional_files/howards/HowardMC.png",
		"./command_additional_files/howards/HowardPanic.png",
		"./command_additional_files/howards/HowardS.png",
		"./command_additional_files/howards/HowardSad.png",
		"./command_additional_files/howards/HowardShush.png",
		"./command_additional_files/howards/HowardSit.png",
		"./command_additional_files/howards/HowardSmirk.png",
		"./command_additional_files/howards/HowardUwU.png",
		"./command_additional_files/howards/HowardW.png",
		"./command_additional_files/howards/HowardWait.png",
		"./command_additional_files/howards/HowardWhoa.png",
		"./command_additional_files/howards/HowardYes.png",
		"./command_additional_files/howards/KissingTheHomiesGoodnightIsntGay.png",
		"./command_additional_files/howards/Nun.png",
		"./command_additional_files/howards/sadge.png",
		"./command_additional_files/howards/Wisconsin_Howard.png",
		"./command_additional_files/howards/howard_over_it.jpg",
		"./command_additional_files/howards/howard_stressed.png",]
		var responses = ["in your mouth ", "on your face ", "down your throat ", "in your hands", "on your forehead ", "etc... "];

		var int1 = (Math.random() * (responses.length) ) << 0 // For random responses
		var int2 = (Math.random() * (howard.length) ) << 0 // For random images

		msg.channel.send("howard deez nutz " + responses[int1], {files: [howard[int2]]});
	},
};