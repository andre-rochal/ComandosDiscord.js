const Discord = require("discord.js");
const client = new Discord.Client();

client.login("TOKEN")

client.on("ready", () => {
    console.log("Bot pronto para uso!");
})

client.on("message", msg => {
    if(msg.content.startsWith('!denuncia')){
    msg.delete();
    let denuncia = msg.content.replace('!denuncia', '');
    const Embed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setDescription('Denuncia enviada com sucesso!')
    .setTitle('Denuncia feita!')
    const Embed1 = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setDescription('`Conteudo da denuncia: `' +denuncia)
    .setTitle('Denuncia recebida')
    if(denuncia < 1){
        msg.channel.send("Você precisa escrever o motivo da denuncia após o comando!")
    }else {
        let canalDenuncia = msg.guild.channels.cache.find(ch => ch.id === 'id do canal');
        msg.reply(Embed);
        canalDenuncia.send(Embed1);
        }
    }
})
