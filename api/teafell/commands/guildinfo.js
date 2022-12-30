const command = require('./command.js');

command(client, ['serverinfo', 'thisserver', 'serinfo'], (message) => {
     const { guild } = message
     const { name, region, memberCount, owner, afkTimeout } = guild
     const icon = guild.iconURL()
     const embed = new MessageEmbed()
          .setTitle(`Server info for "${name}"`)
          .setThumbnail(icon)
          .addFields(
               { name: 'Region',
               value: region, },
               { name: 'Members',
               value: memberCount, },
               { name: 'AFK Timeout',
               value: afkTimeout / 60,
          })
     message.channel.send(embed)
     });