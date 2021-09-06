const Discord = require('discord.js');
require('dotenv').config({ path: './config.env' });
const ytdl = require('ytdl-core');
const ytSearch = require('./costum-modules/ytsearch');
const play = require('./commands/play');

const client = new Discord.Client();

const prefix = '%';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    // channel.send('online');
});

client.on('message', async (msg) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith(prefix)) {
        const [cmd_name, ...arg] = msg.content
            .trim()
            .substr(prefix.length)
            .split(/\s+/);

        console.log(cmd_name);

        let connection;
        // let dispatcher;
        if (cmd_name === 'play') {
            if (!msg.guild || !msg.member.voice.channel)
                return msg.reply('You need to join a voice channel!');
            connection = await msg.member.voice.channel.join();
            const qureySting = arg.join('+');
            play(msg, qureySting, connection);
        } else if (cmd_name === 'pase') {
            dispatcher.pause();
        } else if (cmd_name === 'stop' || 'S' || 's') {
            connection.leave();
            msg.channel.send('stoped');
        } else if (cmd_name === 'mute') {
        } else {
            msg.channel.send('invalait comand!');
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
