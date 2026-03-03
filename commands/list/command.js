const { loadData } = require('../../utils/storage')
const { tasksToString } = require('../../utils/task')

const listFilters = ['--completed', '--pending']

const command = async (args) => {
  // Pasa a la siguiente función si no se reconocen los filtros
  if (args.some((arg) => !listFilters.includes(arg))) return

  const filters = {
    completed: args.includes(listFilters[0]),
    pending: args.includes(listFilters[1]),
  }

  const data = (await loadData()).filter((n) => {
    if (filters.completed && filters.pending) return true
    if (filters.completed) return n.completed
    if (filters.pending) return !n.completed
    return true
  })

  if (data.length < 1) {
    console.log('')
    console.log('\x1b[1mNo Tasks found\x1b[0m')
    console.log('')
  } else {
    console.log('')
    console.log(tasksToString(data))
    console.log('')
  }

  process.exit(0) // Salir después de mostrar la ayuda
}

module.exports = {
  command,
}
