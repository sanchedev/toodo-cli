const { processMessage } = require('../utils/messages')

const version = async (args) => {
  if (args.length !== 1) return // Pasa a la siguiente función
  if (args[0] !== '-v' && args[0] !== '--version') return

  console.log(processMessage('Version :.33m{{version}}'))

  process.exit(0) // Salir después de mostrar la versión
}

module.exports = {
  version,
}
