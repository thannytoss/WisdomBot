require('dotenv').config();

const {Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(` 🤔${c.user.tag} is now ready to dispense wisdom!`);
});

client.on('messageCreate', message => {
    if (message.author.bot) {
        return;
    }
    // if (message.mentions.has(client.user)) 

    // Need to figure out how to grab a mention from message content, or access a group of mentions from another file.
    if (message.content.includes(`Like @Thannytoss Always Says`)){
        message.channel.send('Whos at whatta now?');
    }
});

client.login(process.env.TOKEN);
