const gameExpose = require('./event-functions/game-expose');
const liveNoti = require('./event-functions/live-noti');

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ activities: [{ name: 'teakuu.tk' }], status: 'available' });
		gameExpose(client);
		liveNoti(client);
	},
};