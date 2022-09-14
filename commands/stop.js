const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "stop",
  aliases: ["s"],
  description: "Stops the music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("❗ ไม่มีเพลงอะไรเล่นอยู่เลย").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ หยุดเพลงแล้ว`).catch(console.error);
  }
};
