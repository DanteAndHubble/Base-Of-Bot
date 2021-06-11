const config = require('../settings.json')

module.exports = bot => {
    console.log('Bot is online!')
    client.user.setPresence({ activity: { name: `${config.Status}` }, status: 'ONLINE'}).catch(console.error);
}
