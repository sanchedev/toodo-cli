const { version, name } = require('../package.json')

module.exports = {
  COMMAND_NAME: '\x1b[1mToodo CLI\x1b[0m',
  VERSION: version,
  COMMAND: name,
}
