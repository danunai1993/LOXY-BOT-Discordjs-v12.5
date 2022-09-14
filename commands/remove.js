const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "remove",
  aliases: ["rm"],
  description: "Remove song from the queue",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("❗ ไม่มีเพลงในคิว").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`${message.client.prefix}**remove < ลำดับคิว >**`);
    if (isNaN(args[0])) return message.reply(`${message.client.prefix}**remove < ลำดับคิว >**`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ ลบ **${song[0].title}** ออกจากคิว`);
  }
};
