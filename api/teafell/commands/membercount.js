const command = require('./command.js');

command(client, ['guild', 'HOWMANYPEOPLES', 'membercount', 'members'], (message) => {
     client.on('guildCreate', guild => {
          console.log(guild.members.cache)
          client.on("error", () => { client.login(token) });
          // Keep in mind: This will quite literally spam your terminal. 
          // SHUT THE FUCK UP I KNOW -k (wait it's gonna say I edited that)
          })
     });