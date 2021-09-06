const ytdl = require('ytdl-core');
const ytSearch = require('../costum-modules/ytsearch');

const play = async (msg, qureyStr, connection) => {
    console.log('geting url.....');
    const url = await ytSearch(qureyStr);
    console.log('got url...!');
    const dispatcher = connection.play(
        ytdl(url, { filter: 'audioonly', quality: 'highestaudio' })
    );
    dispatcher.on('error', (error) => {
        console.log(error);
    });
    dispatcher.on('finish', () => {
        console.log('Finished playing!');
    });
};

module.exports = play;
