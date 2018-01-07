const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    m.channel.send(`**Invite my bot to a server:** https://discordapp.com/oauth2/authorize?client_id=`+ cfg.botid +`&scope=bot&permissions=` + cfg.perms + `\nAlso here's a link to my server: https://discord.gg/` + cfg.invite);
};