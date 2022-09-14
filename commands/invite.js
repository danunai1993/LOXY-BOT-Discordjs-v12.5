const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "To add/invite the bot to your server",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 2452748656;

    let invite = new MessageEmbed()
      .setTitle(`**🤖 LOXY **`)
      .setDescription(
        `**ลิ้งค์เชิญบอท และ เว็บไซต์ ** \n\n [❤ เชิญบอท](https://discord.com/oauth2/authorize?client_id=865454730355539969&permissions=${permissions}&scope=bot) • [💟 เว็บไซต์](http://loxybot.xyz/)`
      )
      .setURL(
        `http://loxybot.xyz/`
      )
      .setImage('https://cdn.discordapp.com/attachments/863017437325557760/867742365619585034/standard.gif')
      .setColor("#00c8ff");
    return message.channel.send(invite);
  }
};
