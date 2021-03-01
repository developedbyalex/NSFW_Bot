const config = require("../config.json");

const Discord = require("discord.js");

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

module.exports.run = async(client, message, args, prefix) => {

	let num1 = parseInt(args[1]);
	let num2 = parseInt(args[2]);

	if (!num1 || !num2) return message.channel.send(`${message.author}, try running the command like this: \`${config.prefix}roll [min] [max]\``);

	let result = Math.ceil(Math.random() * (num2 - num1)) + num1;

	const memeEmbed = new Discord.MessageEmbed()
		.setTitle(`Random roll`)
		.setColor(config.embedColor)
		.setDescription(`You rolled **${result}**!`)
		.setTimestamp();

	message.channel.send(memeEmbed);

};

module.exports.help = {
  name: "roll",
	aliases: [`random`]
}
