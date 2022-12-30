const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
const fs = require('fs');
const { clientId } = require('../config.json');
const { token } = require('../config.json');
const commands = [];
const commandFiles = fs.readdirSync('../events').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`../events/${file}`);
	commands.push(command.data.toJSON());
}
const rest = new REST({ version: '9' }).setToken(token);
(async () => {
	try {
		console.log('Loading Event Listener');
		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);
		console.log('Listening For Events Such As: Status');}
	catch (error) {
		console.error(error);}
})();
console.log('Done!');