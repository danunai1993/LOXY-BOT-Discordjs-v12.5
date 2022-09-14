const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "loop",
  aliases: ["l"],
  description: "Toggle music loop",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("⛔ ไม่มีเพลงอะไรเล่นอยู่เลย").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel.send(`✅ ${queue.loop ? "**เปิด**" : "**ปิด**"} การวนลูปเรียบร้อยเเล้ว `).catch(console.error);
  }
};
