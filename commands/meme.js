const config = require("../config.json");

const Discord = require("discord.js");

const {
	getRandomMeme,
	getLocalRandomMeme
} = require(`@blad3mak3r/reddit-memes`);

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

const subreddits_meme = [
	`DeepFriedMemes`,
	`meme`
];

module.exports.run = async(client, message, args, prefix) => {

	const chosenSub = subreddits_meme[Math.floor(Math.random() * subreddits_meme.length - 1)];

	getRandomMeme(chosenSub).then(m => {

		const memeEmbed = new Discord.MessageEmbed()
			.setColor(config.embedColor)
			.setImage(m.image)
			.setTitle(m.title)
			.addField(`Subreddit`, `r/${m.subreddit}`)
			.addField(`Author`, `${m.author}`)
			.addField(`Upvotes`, `${m.ups}`)
			.setTimestamp();

		message.channel.send(memeEmbed);

	}).catch(console.error);


};

module.exports.help = {
  name: "meme",
	aliases: []
}
