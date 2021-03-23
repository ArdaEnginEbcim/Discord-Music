const Discord = require('discord.js');
exports.run = async (client, message, args) => {

  let yardım = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setColor('#000000')
    .addField('Meska Müzik Menüsü', `
**:white_small_square: = \`.çal\` : Müzik Dinlersiniz**
**:white_small_square: = \`.ses\` : Müziğin Sesin Ayarlarsınız**
**:white_small_square: = \`.geç\` : Sıradaki Şarkıya Geçersiniz**
**:white_small_square: = \`.çalan\` : Özel Eklenti Komutlarını Açar**
**:white_small_square: = \`.duraklat\` : Şarkıyı Durdurdurursunuz**
**:white_small_square: = \`.devam\` : Şarkıyı Devem Ettirirsiniz**
**:white_small_square: = \`.sıra\` : Kuyruğu Görürsünüz**
**:white_small_square: = \`.ayrıl\` : Bot Odadan Ayrılır**`)
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
    .addField('Meska Music Bot', `[Botu Davet Et](link) **|** [Destek Sunucumuz](link)`)
    .setImage(`https://cdn.glitch.com/248a6090-e949-4063-b273-820f8c8f0fea%2FSimoneAni330-preview.gif?v=1590361994909`)
    .setThumbnail(client.user.avatarURL)
  message.channel.send(yardım)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help", "music", "yardım"],
  permLevel: 0
};
exports.help = {
  name: 'müzik'
};
