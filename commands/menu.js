const config = require("../config.json");

const Discord = require("discord.js");

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

module.exports.run = async(client, message, args, prefix) => {

	const helpEmbed = new Discord.MessageEmbed()
	.setTitle(`Help Widget`)
	.setColor("#ecf542")
	.addFields(
		{ name: '**NSFW Commands**', value: '\u200B' },
		{ name: '`.nude`', value: 'Get a random nude', inline: true },
		{ name: '`.socks`', value: 'Get a cheeky sock pic', inline: true },
		{ name: '`.tease`', value: 'Get yourself in the mood', inline: true },
		{ name: '`.penis`', value: 'See that cock', inline: true },
		{ name: '`.tits`', value: 'Get a cheeky tit pic', inline: true },
		{ name: '`.danielle`', value: 'For Danielle', inline: true },
		{ name: '`.cosplay`', value: 'Bit of RP :wink:', inline: true },
		{ name: '`.legs`', value: 'Thicc', inline: true },
		{ name: '`.feet`', value: 'Eww stinky', inline: true },
		{ name: '`.ck`', value: 'Nudes in Calvin Kleins', inline: true },
	)
	.addField('\u200B', '\u200B', true)
	.addFields(
		{ name: '**Misc Commands**', value: '\u200B' },
		{ name: '`..roll [min] [max]`', value: 'Generates a random number between [min] and [max].', inline: true },
		{ name: '`.embed [title] [body]`', value: 'Sends an embed with title [title] and description [body].', inline: true },
		{ name: '`.lmgtfy [question]`', value: 'Searches [question] on LMGTFY.', inline: true },
		{ name: '`.meme`', value: 'Displays a random meme', inline: true },
		{ name: '`.tattoo`', value: 'View some sweet art', inline: true },
	)
	.setTimestamp()
	.setFooter('Made with ❤️ by Alex', 'https://cdn.discordapp.com/avatars/626130640768729088/158f78e91a67433d94b8cc830b6a00ec.png?size=128');

	message.channel.send(helpEmbed);

};

module.exports.help = {
  name: "menu",
	aliases: [`help`, `?`]
}
