const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const { Client, Collection } = require("discord.js");
const client = new Discord.Client();



module.exports = {
  name: "stats",
  aliases: [""],
  description: "Display all commands and descriptions",
  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    let server = message.client.guilds.cache.size;
    //let memCount = message.guild.members.cache.size;
    let userCount = message.client.users.cache.size;

    let helpEmbed = new MessageEmbed()
      .setAuthor('LOXY - STATS', 'http://loxybot.xyz/icon.png')  //`\`\`หากหาความช่วยเหลือสามาเลือกดูได้เลย!!`\`\`
      .setDescription(`🕕 **Uptime** \n \`\`\`${days} วัน,${hours} ชั่วโมง, ${minutes} นาที, ${seconds} วินาที\`\`\` \n 📶 **Ping** \n \`\`\`${Math.round(message.client.ws.ping)}\`\`\` \n 💻 **Server** \n \`\`\`${server}\`\`\` \n 🙎‍♂️ **Users** \n \`\`\`${userCount}\`\`\``)
      .setColor("BLUE")
      .setFooter('www.loxybot.xyz', 'http://loxybot.xyz/icon.png')

    return message.channel.send(helpEmbed).catch(console.error);
    
  }
  
};
