const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns The Ping',
 //for help command

run : async(client, message, args) => {
    const msg = await message.channel.send('Pinging...')
    const embed = new MessageEmbed()
        .setTitle('Pong !')
        .setDescription(`Websocket Ping Is ${client.ws.ping} MS !`)
        await message.channel.send(embed)
        msg.delete()
}
}