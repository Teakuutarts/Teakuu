const command = require('./command.js');

command(client, ['serverlist', 'guildlist', 'wasserver'], (message) => {
	if (message.member.permissions.has(Permissions.MANAGE_CHANNELS)) {
		client.guilds.cache.forEach((guild) => {
			message.channel.send(`• ${guild.name} (${guild.memberCount} Members)`)
		})
	}
});