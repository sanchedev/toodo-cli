const { loadData, saveData } = require('../../utils/storage')
const { tasksToString } = require('../../utils/task')

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

  if (task.completed) {
    console.log('')
    console.error(
      `✖ Task with ID \x1b[33m${args[0]}\x1b[0m was already completed.`,
    )
    console.log('')
    process.exit(1)
  }

  const newTask = { ...task, completed: true }

  await saveData([newTask, ...data.filter((n) => n.id !== newTask.id)])

  console.log('')
  console.log(`✔ Task \x1b[33m${task.id}\x1b[0m has completed successfully.`)
  console.log('')
  console.log(tasksToString([newTask]))
  console.log('')

  process.exit(0) // Salir después de mostrar la ayuda
}

module.exports = {
  command,
}
