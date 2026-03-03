const { command } = require('./command')
const { help } = require('./help')

const showCommand = async (args) => {
  if (args[0] !== 'show') return

  const newArgs = args.slice(1) // Elimina el primer argumento (el comando)

  await help(newArgs) // Verifica si se solicita ayuda
  await command(newArgs) // Verifica si se solicitan filtros

  // Si no se reconoce ningún subcomando, muestra un mensaje de error
  console.error('Task ID required')
  process.exit(1)
}

module.exports = {
  showCommand,
}
