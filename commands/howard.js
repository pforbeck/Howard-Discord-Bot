module.exports = {
	name: 'howard',
	description: 'howard',
	execute(msg) {
		var howard = [
		"<:KissingTheHomiesGoodnightIsntGay:873026568535023636>",
		"<:Howard:873026522418659328>",
		"<:HowardAngy:873026567612284948>",
		"<:HowardBalls:873026568283385926>",
		"<:HowardBean:873026567494852658>",
		"<:HowardBruhMoment:873026568375640124>",
		"<:HowardConfused:873026568438558780>",
		"<:HowardDent:873026568002351174>",
		"<:HowardDrunk:873026567662628867>",
		"<:HowardFear:873026568367243325>",
		"<:HowardGrovel:873026568702787695>",
		"<:HowardLurk:873026568086245457>",
		"<:HowardMC:873026564856623195>",
		"<:HowardPanic:873026568195289148>",
		"<:HowardS:873026564810493994>",
		"<:HowardSad:873026568438571018>",
		"<:HowardShush:873026568367267930>",
		"<:HowardSmirk:873026568400826458>",
		"<:HowardUwU:873026567780040755>",
		"<:HowardW:873026566773424168>",
		"<:HowardWait:873026568115597332>",
		"<:HowardWhoa:873026568551825409>",
		"<:HowardYes:873026568170119169>",
		"<:Howard_Bonk_2:873026564701421588>",
		"<:Howard_Excite:873026564533682226>",
		"<:Howard_Left:873026566861492254>",
		"<:Howard_Right:873026568400830505>",
		"<:Nun:873026568509874208>",
		"<:Wisconsin_Howard:873026568174313533>",
		"<:howard_over_it:873026568505667634>",
		"<:howard_stressed:873026568111394866>",]
		var responses = ["in your mouth ", "on your face ", "down your throat ", "in your hands", "on your forehead ", "etc... "];

		var int1 = (Math.random() * (responses.length) ) << 0 // For random responses
		var int2 = (Math.random() * (howard.length) ) << 0 // For random images

		msg.channel.send(howard[int2] + " deez nutz " + responses[int1]);
	},
};