const rl = require('../../utils/readline')
const { tasksToString } = require('../../utils/task')
const { loadData, saveData } = require('../../utils/storage')

const command = async (args) => {
  let title
  let description
  let current
  let withoutDescription = false

  args.forEach((n) => {
    if (title == null && (n === '-t' || n === '--title')) {
      if (current === 'description') withoutDescription = true
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
    console.error('The title is required')
    process.exit(1)
  }
  if (current === 'description') {
    withoutDescription = true
  }

  if (title == null) {
    const setTitle = async () => {
      const answer = await rl.question('? Title (min 4 chars) ')
      const trimmed = answer.trim()

      if (trimmed.length < 4) await setTitle()
      else title = trimmed
    }

    await setTitle()
  }
  if (description == null && !withoutDescription) {
    const setDescription = async () => {
      const answer = await rl.question('? Description (optional) ')
      const trimmed = answer.trim()
      description = trimmed === '' ? null : trimmed
    }

    await setDescription()
  }

  const data = await loadData()

  const task = {
    id: Math.max(0, ...data.map((n) => n.id)) + 1,
    title,
    description,
    completed: false,
  }

  await saveData([...data, task])

  console.log('')
  console.log('\x1b[1mTask Created!\x1b[0m')
  console.log('')
  console.log(`✔ Task \x1b[33m${task.id}\x1b[0m created successfully.`)
  console.log('')
  console.log(tasksToString([task]))
  console.log('')

  process.exit(0) // Salir después de mostrar la ayuda
}

module.exports = {
  command,
}
