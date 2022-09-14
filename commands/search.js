const { MessageEmbed } = require("discord.js");
const YouTubeAPI = require("simple-youtube-api");
const { YOUTUBE_API_KEY } = require("../util/EvobotUtil");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);

module.exports = {
  name: "search",
  aliases: ["sh"],
  description: "Search and select videos to play",
  async execute(message, args) {
    if (!args.length)
      return message
        .reply(` **${message.client.prefix}${module.exports.name} < ชื่อที่จะค้นหา >**`)
        .catch(console.error);
    if (message.channel.activeCollector)
      return message.reply("❗ ตัวรวบรวมข้อความเปิดใช้งานอยู่แล้วในช่องนี้");
    if (!message.member.voice.channel)
      return message.reply("❗ คุณต้องเข้าร่วมช่องเสียงก่อน").catch(console.error);

    const search = args.join(" ");

    let resultsEmbed = new MessageEmbed()
      .setTitle(`**🔎เลือกเลขหน้าเพลงที่จะเล่น ใส่ช่องเเชท 💌**`)
      .setDescription("เพลงที่คนหาคือ :" + "`\`\`" + `${search}` + "`\`\`")
      .setColor("RANDOM");

    try {
      const results = await youtube.searchVideos(search, 10);
      results.map((video, index) => resultsEmbed.addField(video.shortURL, `${index + 1}. ${video.title}`));

      let resultsMessage = await message.channel.send(resultsEmbed);

      function filter(msg) {
        const pattern = /^[0-9]{1,2}(\s*,\s*[0-9]{1,2})*$/g;
        return pattern.test(msg.content);
      }

      message.channel.activeCollector = true;
      const response = await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ["time"] });
      const reply = response.first().content;

      if (reply.includes(",")) {
        let songs = reply.split(",").map((str) => str.trim());

        for (let song of songs) {
          await message.client.commands
            .get("play")
            .execute(message, [resultsEmbed.fields[parseInt(song) - 1].name]);
        }
      } else {
        const choice = resultsEmbed.fields[parseInt(response.first()) - 1].name;
        message.client.commands.get("play").execute(message, [choice]);
      }

      message.channel.activeCollector = false;
      resultsMessage.delete().catch(console.error);
      response.first().delete().catch(console.error);
    } catch (error) {
      console.error(error);
      message.channel.activeCollector = false;
      message.reply(error.message).catch(console.error);
    }
  }
};
