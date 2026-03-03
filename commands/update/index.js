const { help } = require('./help')
const { command } = require('./command')

const updateCommand = async (args) => {
  if (args[0] !== 'update') return

  const newArgs = args.slice(1)

  await help(newArgs)
  await command(newArgs)

  // Salir después de mostrar la ayuda
  console.error('Invalid command')
  process.exit(1)
}

module.exports = {
  updateCommand,
}
