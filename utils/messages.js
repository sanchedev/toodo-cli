const fs = require('fs/promises')
const { join } = require('path')
const constants = require('./constants')

const getMessage = async (path) => {
  try {
    const data = await fs.readFile(
      join(__dirname, '../messages/' + path + '.txt'),
      'utf-8',
    )
    return processMessage(data)
  } catch (err) {
    console.error('Error reading help file:', err)
    process.exit(1)
  }
}

const processMessage = (message) => {
  const data = message
    .replaceAll('{{command_name}}', constants.COMMAND_NAME)
    .replaceAll('{{version}}', constants.VERSION)
    .replaceAll('{{command}}', constants.COMMAND)
    .replaceAll(':.', '\x1b[')

  return data
}

module.exports = { getMessage }
