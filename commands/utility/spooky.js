const{ SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('spooky')
    .setDescription('Sends a possibly spooky message')
    .addBooleanOption(option =>
        option.setName("spook")
        .setDescription("???")),
    async execute(interaction){
        const isSpook = interaction.options.getBoolean("spook");
        if(isSpook){
            await interaction.reply({content: "BOO! :ghost:", ephemeral: true});
        }
        else{
            await interaction.reply('Hiiii');
        }
    }
}