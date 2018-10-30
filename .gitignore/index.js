const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("_")

bot.on('ready', function(){
    bot.user.setGame("with master|_help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    if (message.content === "waifu"){
        message.reply("you're already my waifu <3");
    }
    
    if (message.content === "Who are you?"){
        message.channel.sendMessage("I'm AnimeBot, nice to meet you ! ^^");
    }
    
    if (message.content === prefix + "serverinfo"){
        var embed = new Discord.RichEmbed()
            .setDescription("Server's info")
            .addField("Server's name", message.guild.name)
            .addField("Server owner", message.guild.owner)
            .addField("Server region", message.guild.region)
            .addField('Server created at:')
            .setTimestamp(message.guild.createdAt)
            .addField("Joined at", message.member.joinedAt)
            .addField("Users on the server (with bots)", message.guild.memberCount)
            .setColor("0xFF459F")
    message.channel.sendEmbed(embed)
    }
}
