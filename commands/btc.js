const config = require("../config.json");

const Discord = require("discord.js");
const CoinGecko = require(`coingecko-api`);

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

const CoinGeckoClient = new CoinGecko();

module.exports.run = async(client, message, args, prefix) => {

	let data = await CoinGeckoClient.coins.fetch('bitcoin', {});

	const memeEmbed = new Discord.MessageEmbed()
		.setTitle(`Bitcoin`)
		.setColor(config.embedColor)
		.addField(`Price`, `$${data.data.market_data.current_price.usd.toFixed(2)}`)
		.addField(`24-hour Change`, `$${data.data.market_data.price_change_24h_in_currency.usd.toFixed(2)} (${data.data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)}%)`)
		.setTimestamp();

	message.channel.send(memeEmbed);

};

module.exports.help = {
  name: "btc",
	aliases: [`bitcoin`]
}
