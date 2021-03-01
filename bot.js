const config = require('./config.json');

const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const colors = require("colors");
const fs = require("fs");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

fs.readdir("./commands/", (err, files) => {

	if(err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if(jsfile.length <= 0) {
		console.log("Couldn't find commands.");
		return;
	};

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded!`)
		client.commands.set(props.help.name, props);
		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name)
		});
	});

});

client.login(config.token);

client.on('ready', () => {

	client.user.setActivity('Alex', { type: 'LISTENING' });
	console.log(`${client.user.tag} is now active.`.red)

});

client.on('message', message => {

	if(message.author.bot) return;
	// if(message.channel.type !== "text") return message.channel.send(`${message.author}, you can only run bot commands in servers.`);

	let prefix = config.prefix;

	let args = message.content.toLowerCase().slice(prefix.length).split(" ");

	if(message.content.toLowerCase().startsWith(prefix)) {

		const command = args[0];

		let timeNow = new Date().toLocaleTimeString();
		let timeNowString = ("[" + timeNow + "] ");

		let stringArgs = args.join(" ");

		if(message.channel.type === "text") {
			console.log(timeNowString.cyan + command.yellow + " has been run by user " + message.author.tag.yellow + " in channel " + message.channel.name.yellow + " in server " + message.guild.name.yellow + ": " + stringArgs.brightMagenta);
		} else {
			console.log(timeNowString.cyan + command.yellow + " has been run by user " + message.author.tag.yellow + " privately: " + stringArgs.brightMagenta);
		};

		let commandfile = client.commands.get(command) || client.commands.get(client.aliases.get(command));
		if(commandfile) commandfile.run(client, message, args, prefix);
		// if(!commandfile) message.channel.send(`${message.author}, unknown command! Use \`${prefix}help\` for a list of commands.`);
		if(!commandfile) return;

	};

});
