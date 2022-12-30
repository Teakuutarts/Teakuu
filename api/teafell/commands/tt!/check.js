const { Client, Intents, Collection, Permissions, Discord, Attachment, Message, MessageEmbed, MessageManager } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES,],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const { token } = require("../../config.json");
client.login(token);
client.once('ready', () => {
console.log('Teakuu Seems To Be Working Alright! - check.js');
});