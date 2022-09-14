const discord = require('discord.js')
const pagination = require('discord.js-pagination')


module.exports = {
    name: "help",
    aliases: [""],
    description: "Display all commands and descriptions",
    execute(message) {
////////////////////////////////////
    const page1 = new discord.MessageEmbed()
    .setTitle(`ยินดีต้อนรับเข้าสู่เมนูช่วยเหลือ `)
    .setAuthor('LOXYBOT', 'http://loxybot.xyz/icon.png')
    .setDescription("\n `\`\`หากหาความช่วยเหลือสามาเลือกดูได้เลย!!`\`\`" 
                    + "\n เราเป็นบอทเพลงที่อำนวยความสะดวกให้กับผู้ใช้ดิสคอร์ดให้สามารถเปิดเพลงโดยไม่ต้องออกจากดิสคอร์ด บอทเราจะพัฒนาอย่างต่อเนื่องและสามารถใช้ได้ฟรีๆ!!")
    .setImage('https://cdn.discordapp.com/attachments/863017437325557760/867742365619585034/standard.gif')
    .setColor("#00c8ff")
    .setFooter('LOXY - NEXTGEN', 'http://loxybot.xyz/icon.png')
    .setTimestamp();
                  

                      //+ "\n `l/play` - เล่นเพลง "
                     
/////////////////////////////////////////////
    const page2 = new discord.MessageEmbed()
      .setAuthor('LOXYBOT', 'http://loxybot.xyz/icon.png')
      .setTitle(`**🎶 คำสั่งเปิดเพลง** `)
      .setDescription(" **Prefix** : " + `**${message.client.prefix}**` + 
                      " \n\n `l/play (p)` - เล่นเพลง " 
                      + "\n `l/playlist (pl)` - เล่นเพลงเพลย๋ลิสต์ " 
                      + "\n `l/pause (pa)` - หยุดเพลงชั่วคราว " 
                      + "\n `l/resume (r)` - เล่นเพลงต่อ " 
                      + "\n `l/stop (s)` - หยุดเพลง " 
                      + "\n `l/skip (sk)` - ข้ามเพลง " 
                      + "\n `l/skipto (st)` - ข้ามเพลง ( ลำดับเพลง ) " 
                      + "\n `l/loop (l)` - วนเพลง " 
                      + "\n `l/queue (q)` - แสดงคิวเพลง " 
                      + "\n `l/move (mv)` - ย้ายเพลงเข้าคิว " 
                      + "\n `l/shuffle (sf)` - สุ่มคิวเพลง " 
                      + "\n `l/remove (rm)` - ลบเพลงออกจากคิว " 
                      + "\n `l/nowplaying (np)` - ดูข้อมูลเพลงที่เล่น "  
                      + "\n `l/lyrics (ly)` - ดูเนื้อเพลงที่เล่นอยู่ " 
                      + "\n `l/search (sh)` - ค้นหาและเลือกวิดีโอที่จะเล่น " 
                      + "\n `l/volume (v)` - ปรับเสียงของเพลง [ 0-100 ]" 
                      //+ "\n `l/play` - เล่นเพลง "
                     )
      .setColor("#00c8ff")
      .setFooter('LOXY - NEXTGEN', 'http://loxybot.xyz/icon.png')
      .setTimestamp();
////////////////////////////
      const page3 = new discord.MessageEmbed()
      .setTitle(`💟 เมนูทั่วไป `)
      .setAuthor('LOXYBOT', 'http://loxybot.xyz/icon.png')
      .setDescription("\n **Prefix** : " + `**${message.client.prefix}**` 
                    + "\n\n `l/help ` - เมนูช่วยเหลือ " 
                    + "\n `l/stats ` - ดูสถานะของบอท " 
                    + "\n `l/uptime ` - ดูเวลาที่บอทออนไลน์ " 
                    + "\n `l/ping ` - เช็คความหน่วงของบอท " 
                    + "\n `l/invite ` - รับลิ้งค์บอทและลิ้งค์เว็บไซต์ " )
      .setColor("#00c8ff")
      .setFooter('LOXY - NEXTGEN', 'http://loxybot.xyz/icon.png')
      .setTimestamp();
      ///////////////////////////////////////////
    const pages = [
        page1,
        page2,
        page3
    ]
    const emoji = ["◀","▶"]

    const timeout = '600000'

    pagination(message, pages, emoji, timeout)
  
        
        
      /*  
      commands.forEach((cmd) => {
        helpEmbed.addField(`**${message.client.prefix}${cmd.name} **`,`${message.client.prefix}${cmd.name} ${cmd.description}` , `\n`,
          true
        );
      });
  */

      
    }
    
  };