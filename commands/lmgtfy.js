const config = require("../config.json");

const Discord = require("discord.js");
const encode = require(`strict-uri-encode`);

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

module.exports.run = async(client, message, args, prefix) => {

	const question = encode(message.content.substring(args[0].length + 1));

	let link = `https://www.lmgtfy.com/?q=${question}`;

	message.channel.send(link);

};

module.exports.help = {
  name: "lmgtfy",
	aliases: []
}
