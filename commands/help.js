const { getMessage } = require('../utils/messages')

const help = async (args) => {
  if (args.length !== 1) return // Pasa a la siguiente función
  if (args[0] !== '-h' && args[0] !== '--help') return

  const data = await getMessage('index')

  console.log(data)

  process.exit(0) // Salir después de mostrar la ayuda
}

module.exports = {
  help,
}
