command(client, 'mypfp', (message) => {
     const { MessageEmbed } = require('discord.js');
     const pfpEmbed = new MessageEmbed()
          .setColor('#8a4242')
          .setTitle('Your Profile Picture')
          .setImage(message.author.avatarURL())
          .setTimestamp()
          .setFooter('TF');
     message.channel.send({ embeds: [pfpEmbed] });
});