const { tasksToString } = require('../../utils/task')
const { loadData, saveData } = require('../../utils/storage')

const command = async (args) => {
  if (args[0] == null) return

  const data = await loadData()

  const task = data.find((n) => n.id.toString() === args[0])

  if (task == null) {
    console.log('')
    console.error(`✖ Task with ID \x1b[33m${args[0]}\x1b[0m not found.`)
    console.log('')
    process.exit(1)
  }

  let title
  let description
  let current

  args.slice(1).forEach((n) => {
    if (title == null && (n === '-t' || n === '--title')) {
      current = 'title'
    } else if (description == null && (n === '-d' || n === '--description')) {
      current = 'description'
    } else if (current != null) {
      if (current === 'title') {
        title = n.trim()
        if (title.length < 4) {
          console.error('The title must be at least 4 characters')
          process.exit(1)
        }
      } else if (current === 'description') {
        description = n.trim()
      }
      current = null
    } else {
      console.error('Invalid Options')
      process.exit(1)
    }
  })

  if (current === 'title') {
    console.error('The title should be after the flag.')
    process.exit(1)
  }

  const newTask = {
    ...task,
    title: title ?? task.title,
    description: description ?? task.description,
  }

  await saveData([newTask, ...data.filter((n) => n.id !== task.id)])

  console.log('')
  console.log('\x1b[1mTask Updated!\x1b[0m')
  console.log('')
  console.log(`✔ Task \x1b[33m${task.id}\x1b[0m updated successfully.`)
  console.log('')
  console.log(tasksToString([newTask]))
  console.log('')

  process.exit(0) // Salir después de mostrar la ayuda
}

module.exports = {
  command,
}
