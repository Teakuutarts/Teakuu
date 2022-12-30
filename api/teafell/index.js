//
//                       Teafell JS API - For Teakuu Discord Bot
//
// hi
// hey, please update any node modules needed, ty!
//                Need this? sql.teakuu.tk - If don't have a login, ask me for one - Ace
//
//
// ich bin ein kätze und ich mag es sooo!!!
//
//
//
//
//
//
//Sorry for the long message board!!! I just like to have this lol
const { Client, Intents, Collection, Permissions, Discord, Attachment, Message, MessageEmbed, MessageManager } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES,],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const { token } = require("./config.json");
client.login(token);
client.once('ready', () => {
console.log('Teafell - ✶ A-K1 - Online ✶');
});
// If you are made to, put this at the end, idk discordjs is weird :/
client.once('ready', () => {
	console.log('Loading...');
});

client.once('ready', () => {console.log('Setting Up Commands.');});
const command = require('./commands/command.js');
client.once('ready', () => {console.log('Setting Up Commands..');});
const commands = require('./deploy-commands.js');
client.once('ready', () => {console.log('Setting Up Commands...');});
const teafell = require("./commands/tt!/check.js")
client.once('ready', () => {console.log('Done!');});


/// - Del can you figure out how to call this module for the status? It won't fucking load it
client.once('ready', () => {console.log('Setting Profile');
const status = require('./events/status.js');
require('./events/status.js').status;
});
///


client.once('ready', () => {console.log('Loading Content & Assets');});
const fs = require('fs');
const mongoose = require('mongoose');



client.once('ready', () => {console.log('Finalizing...');});



client.on("error", () => { client.login(token) });
client.once('ready', () => {
	console.log('Teafell - Loaded Assets & Bot Configuration');
	console.log('...')
	console.log('Done! - *Happy Robot Noises!*')
});

// :3