const config = require("../config.json");

const Discord = require("discord.js");

const {
	getRandomMeme,
	getLocalRandomMeme
} = require(`@blad3mak3r/reddit-memes`);

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

const subreddits_wowme = [
	`mildlyinteresting`
];

module.exports.run = async(client, message, args, prefix) => {

	getRandomMeme(`mildlyinteresting`).then(m => {

		const memeEmbed = new Discord.MessageEmbed()
	   	    .setFooter("Requested by " + message.author.tag, message.author.avatarURL())		
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
  name: "wowme",
	aliases: []
}
