const { loadData } = require('../../utils/storage')
const { tasksToString } = require('../../utils/task')

const command = async (args) => {
  // Pasa a la siguiente función si no se reconocen los filtros
  if (args.length !== 1) return

  const data = (await loadData()).find((n) => {
    return n.id.toString() === args[0]
  })

  if (data == null) {
    console.log('')
    console.error(`✖ Task with ID \x1b[33m${args[0]}\x1b[0m not found.`)
    console.log('')
    process.exit(1)
  }

  console.log('')
  console.log(tasksToString([data]))
  console.log('')

  process.exit(0) // Salir después de mostrar la ayuda
}

module.exports = {
  command,
}
