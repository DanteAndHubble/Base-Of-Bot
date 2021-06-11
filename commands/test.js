module.exports.run = async (bot, message, args) => {
  var yourping = new Date().getTime() - message.createdTimestamp
  var botping = Math.round(bot.ws.ping)

  message.channel.send(`🏓\`\`\`js\nlatency: ${yourping}ms\nAPI latency: ${botping}ms\`\`\``)
}

module.exports.config = {
  name: "test",
  aliases: ['latency', 'ping']
}
