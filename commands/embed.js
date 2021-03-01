const config = require("../config.json");

const Discord = require("discord.js");

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

module.exports.run = async(client, message, args, prefix) => {

	const title = args[1];
	const text = message.content.substring(args[0].length + args[1].length + 2);

	if (!title || !text) return message.channel.send(`${message.author}, try running the command like this: ${config.prefix}embed [title] [body]`);

	const memeEmbed = new Discord.MessageEmbed()
		.setColor(config.embedColor)
		.setTitle(title)
		.setDescription(text)
		.setTimestamp();
	message.channel.send(memeEmbed);

};

module.exports.help = {
  name: "embed",
	aliases: []
}
