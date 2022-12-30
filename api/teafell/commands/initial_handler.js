const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('./config.json').config();
const fs = require('fs');
const { clientId } = require('./config.json');
const commands = [];
const commandFiles = fs.readdirSync('./commands/tt!').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/tt!/${file}`);
	commands.push(command.data.toJSON());
}
const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
(async () => {
	try {
		console.log('tt! enabled :D');
		await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);
		console.log('Tested Commands: Working!');}
	catch (error) {
		console.error(error);}
})();
console.log('TT! Support Enabled');

// Oh, Hi!

command(client, ['ping', 'testcmd'], (message) => {
     message.channel.send('Pong!')
// I am keeping this because it's funny ;p
});
command(client, [''], (message) => {
     message.channel.send('tt what now? Try tt!help silly.')
});