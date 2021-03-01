const config = require("../config.json");

const Discord = require("discord.js");

const {
	getRandomMeme,
	getLocalRandomMeme
} = require(`@blad3mak3r/reddit-memes`);

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

const subreddits_tits = [
	`Boobies`,
	`TittyDrop`,
	`boobs`,
	`homegrowntits`,
	`boobgifs`,
	`nippleclamp`,
	`PerfectTits`,
	`bananatits`,
	`Perky`
];

module.exports.run = async(client, message, args, prefix) => {

	if (!message.channel.name.includes("nsfw")) return message.channel.send(`:underage: Please type the command in an NSFW channel`);

	const chosenSub = subreddits_tits[Math.floor(Math.random() * subreddits_tits.length - 1)];

	getRandomMeme(chosenSub).then(m => {

		const memeEmbed = new Discord.MessageEmbed()
		    .setFooter("Requested by " + message.author.tag, message.author.avatarURL())
			.setColor(config.embedColor)
			.setImage(m.image)
			.addField(`Subreddit`, `r/${m.subreddit}`)
			.addField(`Author`, `${m.author}`)
			.addField(`Upvotes`, `${m.ups}`)
			.setTimestamp();

		message.channel.send(memeEmbed);

	}).catch(console.error);


};

module.exports.help = {
  name: "tits",
	aliases: []
}
