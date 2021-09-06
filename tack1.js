const Discord = require('discord.js');
const dotenv = require('dotenv').config({ path: './config.env' });
const ytdl = require('ytdl-core');

const client = new Discord.Client();

const prifix = '$';
// const que = new Map();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith(prifix)) {
        const [cmd_name, ...song] = msg.content
            .trim()
            .substr(prifix.length)
            .split(/\s+/);
        console.log(song);

        if (cmd_name === 'play') {
            // const n = que.get(msg.guild.id);
            // exucute(msg, n);

            msg.member.voice.channel.join().then(() => {
                play(ytdl(songinfo.url)).on('finish', () => {
                    msg.member.voice.channel.leave();
                });
            });

            console.log('playing');
            console.log(msg.guild.id);
            console.log(msg.client.user);
        } else if (cmd_name === 'skip') {
            console.log('skiped');
        } else if (cmd_name === 'sotp') {
            msg.member.voice.channel.leave();
            console.log('stoped');
            stop(msg);
        } else {
            msg.channel.send('in valait comand');
        }
    }
});

// const exucute = async (msg, song) => {
//     const voice1 = msg.member.voice.channel;
//     if (!voice1)
//         return msg.reply('You need to be in a voice channel to play music!');
//     const permition = msg.member.voice.channel.permissionsFor(msg.client.user);
//     if (!permition.has('CONNECT') || !permition.has('SPEAK'))
//         return msg.reply(
//             'I need the permissions to join and speak in your voice channel!'
//         );

//     const getsongInfo = await ytdl.getInfo(song);
//     const songinfo = {
//         title: getsongInfo.videoDetails.title,
//         url: getsongInfo.videoDetails.video_url,
//     };
//     // if (!n) {
//     //     const queueContruct = {
//     //         textChannel: msg.channel,
//     //         voiceChannel: voice1,
//     //         connection: null,
//     //         songs: [],
//     //         volume: 5,
//     //         playing: true,
//     //     };

//     //     que.set(msg.client.id, queueContruct);
//     //     queueContruct.songs.push(songinfo);
//     //     console.log(queueContruct);
//     // }

//     try {
//         const connection = await voice1.join();
//         // queueContruct.connection = connection;
//         // play(msg.guild, songinfo);
//         connection
//             .play(ytdl(songinfo.url))
//             .on('finish', () => {
//                 connection.leave();
//             })
//             .on('error', (error) => console.error(error));
//     } catch (err) {
//         // que.delete(msg.member.id);
//         return msg.channel.send(err);
//     }
//     console.log(songinfo);
// };

// const stop = async (msg) => {
//     const x = await msg.member.voice.channel.leave();
//     msg.channel.send(`${x} out`);
// };
// // const play = (guild, songinfo) => {
// //     // const serverQueue = queue.get(guild.id);

// //     const dispatcher = serverQueue.connection
// //         .play(ytdl(songinfo.url))
// //         .on('finish', () => {
// //             serverQueue.song.shfit();
// //             play(guild, serverQueue.song[0]);
// //         })
// //         .on('error', (error) => console.error(error));
// //     dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
// //     serverQueue.textChannel.send(`Start playing: **${songinfo.title}**`);
// // };

client.login(process.env.DISCORD_TOKEN);
