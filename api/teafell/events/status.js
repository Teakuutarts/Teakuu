const { Client, Intents, Collection, Permissions, Discord, Attachment, Message, MessageEmbed, MessageManager } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES,],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const { token } = require("../config.json");
const { username } = require("../config.json");
const { status } = require("../config.json");
client.on('ready', () => {
	console.log('Teafell - PID / User & Status Set');
	client.user.setUsername(username);
	client.user.setActivity(status, {
		type:"PLAYING"
//		url: "https://www.youtube.com/watch?v=0bZ0hkiIKt0"
// rickroll.com
	});
});

client.on("error", () => { client.login(token) });


// omg, the status!!!!
// do the rickroll, do the rickroll!!!
// classic bot moment