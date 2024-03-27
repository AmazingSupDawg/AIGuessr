const{ SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong :3'),

    async execute(interaction){
        await interaction.reply('Pong');
    }
}