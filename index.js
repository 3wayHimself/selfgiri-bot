const Discord = require (`discord.js`);
const fs = require(`fs`);

const bot = new Discord.Client();
const cfg = require(`./config.json`);
const arrays = require(`./arrays.json`)

function log(m, c) {
    console.log(`[${new Date().toUTCString()}] ${m.author.username}#${m.author.discriminator} UID ${m.author.id} called ${c}.` );
};

bot.on(`ready`,() =>{
    var date = new Date().toUTCString()
    console.log(`[${date}] Ready`);
});


bot.on(`message`, (m)=> {
    if (!m.content.startsWith(cfg.prefix)) return;
    if (m.author != bot.user) return;
    var args = m.content.slice(cfg.prefix.length).trim().split(/ +/g);
    if (!args[0]) return;
    var cmd = false;
    for(var x in arrays.commands) {
        if(arrays.commands[x] == args[0].toLowerCase()) {
            let commandFile = require(`./commands/${args[0].toLowerCase()}.js`);
            log(m, args[0])
            commandFile.run(m, bot, args);
            cmd = true;
        } 
    }
    if (cmd === false) m.channel.send(`Command does not exist.`);
});


bot.login(cfg.token)