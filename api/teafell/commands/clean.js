const command = require('./command.js');
const token = require('../config.json');

command(client, ['bulkclear', 'massclear', 'mclear', 'bclear', 'clean', 'bulkclean', 'massclean'], (message) => {
	if (message.member.permissions.has(Permissions.MANAGE_CHANNELS)) {
		message.channel.messages.fetch().then((results) => {
		message.channel.bulkDelete(results).catch(client.login(token));	//.catch(console.error)
		client.on("error", () => { client.login(token) });
     	})
	}
});