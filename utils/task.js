const tasksToString = (tasks) => {
  let str = ''
  for (let i = 0; i < tasks.length; i++) {
    const { id, title, description, completed } = tasks[i]
    str += ` [${completed ? '\x1b[34mx\x1b[0m' : ' '}] - ID \x1b[33m${id}\x1b[0m: ${title}`
    if (description != null) {
      str += `\n       \x1b[90m${description}\x1b[0m`
    }
    if (i !== tasks.length - 1) {
      str += '\n\n'
    }
  }

  return str
}

module.exports = { tasksToString }
