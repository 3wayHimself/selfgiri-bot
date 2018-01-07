const arrays = require(`../arrays.json`)

exports.run = (m, bot, args) => {
    m.delete()
    if (args[1]) m.channel.send(arrays.ball[Math.floor(Math.random() * arrays.ball.length)]); 
};