const cfg = require(`../config.json`);

exports.run = (m, bot, args) => {
    m.delete()
    m.channel.send(`View my selfbot GitHub repository here: ${cfg.repo}`)
};