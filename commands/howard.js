module.exports = {
	name: 'howard',
	description: 'howard deez nutz!',
	execute(msg) {
		var int1 = (Math.random() * (9 - 0 + 1) ) << 0 // For random images
		var int2 = (Math.random() * (2 - 0 + 1) ) << 0 // For random responses
		var howard = [
		"./howards/Howard_Bonk_2.png",
		"./howards/Howard_Bonk.png",
		"./howards/Howard_Excite.png",
		"./howards/Howard_Left.png",
		"./howards/Howard_Right.png",
		"./howards/Howard.jpg",
		"./howards/HowardAngy.png",
		"./howards/HowardBalls.png",
		"./howards/HowardBean.png",
		"./howards/HowardBruh.png",
		"./howards/HowardBruhMoments.png",
		"./howards/HowardConfused.png",
		"./howards/HowardDent.png",
		"./howards/HowardDrunk.png",
		"./howards/HowardFear.png",
		"./howards/HowardGrovel.png",
		"./howards/HowardLurk.png",
		"./howards/HowardLurk2.png",
		"./howards/HowardMC.png",
		"./howards/HowardPanic.png",
		"./howards/HowardS.png",
		"./howards/HowardSad.png",
		"./howards/HowardShush.png",
		"./howards/HowardSit.png",
		"./howards/HowardSmirk.png",
		"./howards/HowardUwU.png",
		"./howards/HowardW.png",
		"./howards/HowardWait.png",
		"./howards/HowardWhoa.png",
		"./howards/HowardYes.png",
		"./howards/KissingTheHomiesGoodnightIsntGay.png",
		"./howards/Nun.png",
		"./howards/sadge.png",
		"./howards/Wisconsin_Howard.png",]
		var responses = ["in your mouth ", "on your face ", "down your throat ", "in your hands", "on your forehead ", "etc... "];
		var str1 = "howard deez nutz "
		var response = str1.concat(responses[int2]);
		msg.reply(response, {files: [howard[int1]]});
		console.log(howard[int2])
	},
};