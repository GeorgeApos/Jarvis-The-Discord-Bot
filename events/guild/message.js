const { ReactionUserManager } = require("discord.js");
const { aliases } = require("../../commands/play");

module.exports = (Discord, client, message) =>{
    const prefix = '-';

    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try{
        command.execute(message, client, Discord);
    } catch (err) {
        message.reply("There was an error trying to execute the command");
        console.log(err);
    }

}