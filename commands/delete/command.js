const { loadData, saveData } = require('../../utils/storage')

const command = async (args) => {
  // Pasa a la siguiente función si no se reconocen los filtros
  if (args.length !== 1) return

  const data = await loadData()

  const task = data.find((n) => {
    return n.id.toString() === args[0]
  })

  if (task == null) {
    console.log('')
    console.error(`✖ Task with ID \x1b[33m${args[0]}\x1b[0m not found.`)
    console.log('')
    process.exit(1)
  }

  await saveData(data.filter((n) => n.id !== task.id))

  console.log('')
  console.log('\x1b[1mTask Deleted!\x1b[0m')
  console.log('')
  console.log(`✔ Task \x1b[33m${task.id}\x1b[0m deleted successfully.`)
  console.log('')

  process.exit(0) // Salir después de mostrar la ayuda
}

module.exports = {
  command,
}
