exports.run = (m, bot, args) => {
    m.delete()
    m.channel.send({file: "./img/pingcat.png"})
};
