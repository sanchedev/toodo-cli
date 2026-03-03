const { command } = require('./command')
const { help } = require('./help')

const listCommand = async (args) => {
  if (args[0] !== 'list') return

  const newArgs = args.slice(1) // Elimina el primer argumento (el comando)

  await help(newArgs) // Verifica si se solicita ayuda
  await command(newArgs) // Verifica si se solicitan filtros

  // Si no se reconoce ningún subcomando, muestra un mensaje de error
  console.error('Invalid command')
  process.exit(1)
}

module.exports = {
  listCommand,
}
