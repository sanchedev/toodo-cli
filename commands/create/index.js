const { help } = require('./help')
const { command } = require('./command')

const createCommand = async (args) => {
  if (args[0] !== 'create') return

  const newArgs = args.slice(1)

  await help(newArgs)
  await command(newArgs)

  // Si no se reconoce ningún subcomando, muestra un mensaje de error
  console.error('Task ID required')
  process.exit(1)
}

module.exports = {
  createCommand,
}
