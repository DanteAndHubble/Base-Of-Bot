const config = require('./settings.json');

module.exports = async (bot, message) => {
  if (message.author.bot) return;

  const messageArray = message.content.split(' ');
  const cmd = messageArray[0];
  const args = messageArray.slice(1);

  const prefix = config.defPrefix;

  if (!message.content.startsWith(prefix)) return;
  const commandfile = bot.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));;
  if (commandfile) {
    commandfile.run(bot, message, args);
  }
}
