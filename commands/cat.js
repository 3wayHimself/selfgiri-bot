const request = require (`request`);

exports.run = (m, bot, args) => {
    request({
        url: `http://random.cat/meow.php`,
        json: true
    }, function (error, response, body) {
        m.delete()
        m.channel.send(body)
    })
};
