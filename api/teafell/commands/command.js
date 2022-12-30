const { prefix } = require('../config.json')

// do I add const for alias??? heh??? or prefix!, pfx!, in conf???

module.exports = (client, aliases, callback) => {
  if (typeof aliases === 'string') {
    aliases = [aliases] }
  client.on('message', (message) => {
    const { content } = message
    aliases.forEach((alias) => {
      const command = `${prefix}${alias}`
      if (content.startsWith(`${command} `) || content === command) {
        console.log(`${command} Was Ran.`)
        callback(message)
      }
    })
  })
}