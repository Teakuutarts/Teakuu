const TTHelpEmbed = require('./commands/initial_handler.js')
const command = require('./commands/initial_handler.js')

// MAAAMAAAAAAAAAAAAA!!! OOHOOOHHHH!!!!
// III DONNT WANNNA DIEE!!!
// THEY SCREAM "PLEASE LORD SEND ME BACK!!!"

client.on('messageCreate', msg => {
	if(msg.content == 'tt!help'){
		const { MessageEmbed } = require('discord.js');
		const TTHelpEmbed = new MessageEmbed()
		.setColor('#EEABAB')
		.setTitle('**♡°•☆Help Menu☆•°♡**')
		.setAuthor('Prefix: tt! - Bot In Development \n Reaction pages may get added!')
		.setDescription("• mypfp - Displays your profile picture \n • ping / testcmd - PingPong! \n • massclear - Clears mass chunk of channel text \n • serverlist - Displays servers the bot is in  \n • ttm! - This is for the music part of the bot \n • help `<page>` - Help pages")
		.setFooter('Page 1/2');
		msg.channel.send({ embeds: [TTHelpEmbed] });
	}
});
client.on('messageCreate', msg => {
	if(msg.content == 'tt!help 1'){
		const { MessageEmbed } = require('discord.js');
		const TTHelpEmbed = new MessageEmbed()
		.setColor('#EEABAB')
		.setTitle('**♡°•☆Help Menu☆•°♡**')
		.setAuthor('Prefix: tt! - Bot In Development \n Reaction pages may get added!')
		.setDescription("• mypfp - Displays your profile picture \n • ping / testcmd - PingPong! \n • massclear - Clears mass chunk of channel text \n • serverlist - Displays servers the bot is in  \n • ttm! - This is for the music part of the bot \n • help `<page>` - Help pages")
		.setFooter('Page 1/2');
		msg.channel.send({ embeds: [TTHelpEmbed] });
	}
});


client.on('messageCreate', msg => {
	if(msg.content == 'tt!help 2'){
		const { MessageEmbed } = require('discord.js');
		const TTHelpEmbed = new MessageEmbed()
		.setColor('#EEABAB')
		.setTitle('**♡°•☆Help Menu☆•°♡**')
		.setDescription("Last Page!")
		.setFooter('Page 2/2');
		msg.channel.send({ embeds: [TTHelpEmbed] });
	}
});

// CHANGE ALL OF THIS TO COMMAND INSTEAD OF CLIENT.ON lmao