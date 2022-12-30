const { Client, Intents, Collection, Permissions, Discord, Attachment, Message, MessageEmbed, MessageManager } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES,],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

// begin

client.on('messageCreate', msg => {
	if(msg.content == 'changelog_fsanfiuabfi8h4gsghy5gwehertj4hfe9rgh483tjgwg'){
		const { MessageEmbed } = require('discord.js');
		const TartsEmbed = new MessageEmbed()
		.setColor('#EEABAB')
		.setTitle('**♡°•☆Teakuu - Log☆•°♡**')
		.setAuthor('')
		.setDescription("whats up next?")
		.setThumbnail('https://www.pngkey.com/png/full/910-9106364_kawaii-cute-cat-kitten-kitten.png')
		.setFooter('1.1.4.9', 'https://i.imgur.com/R37LvfJ.gif');
// available pings: 900776793978589194 = mc | 885553618906914866 = misc | 880525576102887457 = development
		msg.channel.send({ content: '|| <@&885553618906914866> <@&900776793978589194> ||', embeds: [TartsEmbed] })
	}
});
command(client, ['REACTIONSROLESMSG_v403928nv759fheng4vn2hfgh39yt90vq3y48t7v39gjdsfgsgggg_universal', 'key_5575755345599537891709513486590134659034650912346513945'], (message) => {
    message.channel.send('⠀⠀⠀<a:TT_Bounce_Black:876857465147359282> **༺ Pings ༻** <a:TT_Bounce_Black:876857465147359282> \n ━━━━━━━━━━━ \n <:TK_Sweets_Tart:900940272224059452><@&865674840181571629> \n <a:TK_MC_Diamond:908910442133454849><@&900776793978589194> \n <:TK_Badge_Owner:901156155378770032><@&880525360343691265> \n <a:TK_Logo_Booster:909146683030511616><@&902588624850272286> \n <a:TK_Pix_Bounce:900213510104055869><@&919350423377281084> \n <:TK_Bee_Frolic:909146805973958706><@&897281504948944926> \n <a:TK_Bounce_Black:876857465147359282><@&885553618906914866> \n <a:TK_Code_HyperVSC:878432482213625936><@&880525576102887457> \n <:TK_Catto_Gasp:920865456955473930><@&885233100513214525> \n <:TK_Badge:901162905809092719><@&922987078751506483>')
});
client.on('messageCreate', msg => {
	if(msg.content == 'info-help_channel_gdsybr8hgdfghd7673bnf9fsanfiua84wui'){
		const { MessageEmbed } = require('discord.js');
		const TartsEmbed = new MessageEmbed()
		.setColor('#EEABAB')
		.setTitle('More Help Here')
		.setURL('https://discord.com/channels/865674840181571624/866257273319325728')
		.setAuthor('Teakuu - Help')
		.setDescription("Helping <@&865674840334008358> :) \n Most Links: https://linktr.ee/Teakuu \n ~Applications~ \n https://www.teakuu.tk/staffapp \n https://www.teakuu.tk/devapp \n https://www.teakuu.tk/streamerapp \n https://www.teakuu.tk/banappeal \n \n -Bot Prefixes- \n  <@910565431927005194> | tt! \n <@928780240937967709> | t! \n <@159985870458322944>  | ! \n <@515067662028636170> | / \n <@536991182035746816> | == \n <@235148962103951360> | > \n <@204255221017214977> | >> \n <@992142134994014398> | meta> \n <@155149108183695360> | d! \n <@838451171768139786> | = \n <@557628352828014614> | -- \n <@493716749342998541> | . \n <@564426594144354315> | s! \n <@324631108731928587> | /poll \n <@294882584201003009> | g! \n <@468281173072805889> | ~ \n <@372022813839851520> | ; \n <@681770687614156811> | pig! \n <@716390085896962058> | pt! \n <@819778342818414632> | /activity \n <@472911936951156740> | `none` \n <@561151296170622976> | m! \n <@781606551349231667> | / \n <@302050872383242240> | /  \n <@270904126974590976> | pls \n")
		.setThumbnail('https://www.pngkey.com/png/full/910-9106364_kawaii-cute-cat-kitten-kitten.png')
		.setFooter('©2022 Teakuu');
		msg.channel.send({ embeds: [TartsEmbed] })
	}
});
client.on('messageCreate', msg => {
	if(msg.content == 'rules_5436345766777123dr56wwi'){
		const { MessageEmbed } = require('discord.js');
		const RulesEmbed = new MessageEmbed()
		.setColor('#EEABAB')
		.setTitle('♡°•☆Welcome to Teakuu!☆•°♡')
		.setAuthor("Rules", "https://i.imgur.com/4vqAf9G.png")
		.setDescription("~https://discord.gg/Teakuu \n ~https://discord.gg/RwkzDHktGj \n \n **°•☆Follow Discord's TOS!☆•°** \n ~https://discordapp.com/terms \n ~https://discordapp.com/guidelines \n \n **°•☆Be respectful to your fellow mice!☆•°** \n ~No threats (at all), sexism, racism, hate speech, slurs (of any kind) \n ~No targeting members because of certain beliefs, gender, pronouns, race, sexuality, disabilities, etc. \n ~No harassing other members in any way \n \n **°•☆Keep it PG-13☆•°** \n ~No cursing \n ~No NSFW (Not Safe For Work): Gore, sexual content, suggestive content, 18+ content, etc. \n \n **°•☆Advertising☆•°** \n ~All advertising goes in <#891413335592038410> \n ~No advertising other MC servers \n ~No advertising other Discords \n ~No DM advertising \n \n **°•☆Chat rules☆•°** \n ~Keep things in their respective channels \n ~No spamming (bots will mute you) \n ~Don't spam images, videos, or GIFs in general channels \n ~Bot commands go in <#891413553351892992> or a respected channel for a bot/command \n ~No earrape \n ~No flashing images or anything that could induce seizures \n \n **°•☆No trauma dumping☆•°** \n ~This is not a vent server, do not vent trauma in any chat \n ~No mentions of self harm or suicide \n ~Do not discuss negative mental health \n ~This rule is to ensure we keep a safe environment where no one feels awkward or forced to take on other's problems. \n \n **°•☆No sensitive topics☆•°** \n ~This includes but is not limited to: Politics, activist movements, racism, homophobia/transphobia, religion, etc. \n \n **°•☆Don't DM Staff☆•°** \n ~You will be strike/warned \n ~If it is a problem: Make a ticket in \<#866257273319325728> \n ~If it is a suggestion: Make a suggestion by using s! (Suggestion) in <#891413553351892992> \n \n **°•☆Have common sense☆•°** \n ~Please do not try and use subtle ways to get around the rules for example: wording a swear wrong so the bot doesn't punish you. It will be punished still. \n ~If you think you are doing something wrong, it likely is wrong. Ask someone first! \n \n **°•♡About Us♡•°** \n ~Our discord server here is primarily based around Minecraft and other assortments of activities. \n You can read more about us at https://www.teakuu.tk/about \n \n **°•☆Only use English☆•°** \n ~Most of the staff team has English as their first language and doesn't know any other language. We are not suppressing you, we just can't moderate in other languages. \n \n __***♡°•☆VIOLATING THESE RULES COULD RESULT IN A STRIKE/WARN, KICK, OR BAN FROM BOTH THE DISCORD SERVER AND MINECRAFT SERVER☆•°♡***__")
		.setThumbnail('https://www.pngkey.com/png/full/910-9106364_kawaii-cute-cat-kitten-kitten.png')
		.setFooter('©2022 Teakuu', 'https://i.imgur.com/R37LvfJ.gif');
		msg.channel.send({ embeds: [RulesEmbed] })
	}
});
client.on('messageCreate', msg => {
	if(msg.content == 'webstoremc_5asdgbj543aj66543734576677g7123fdr56wwifafSDUG4H'){
		const { MessageEmbed } = require('discord.js');
		const RulesEmbed = new MessageEmbed()
		.setColor('#EEABAB')
		.setTitle('♡°•☆Teakuu MC Webstore☆•°♡')
		.setURL('https://storemc.teakuu.tk')
		.setAuthor("")
		.setDescription("Click the link above to view our Minecraft & Discord Webstore! \n We have tons of really cool stuff to offer from ranks to really cool premium items for our MC server! \n Go check it out yourself!")
		.setThumbnail('https://www.pngkey.com/png/full/910-9106364_kawaii-cute-cat-kitten-kitten.png')
		.setFooter('©2022 Teakuu', 'https://i.imgur.com/R37LvfJ.gif');
		msg.channel.send({ embeds: [RulesEmbed] })
	}
});

// end