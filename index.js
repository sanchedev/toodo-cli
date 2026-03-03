const { help } = require('./commands/help')
const { listCommand } = require('./commands/list')
const { showCommand } = require('./commands/show')
const { createCommand } = require('./commands/create')
const { updateCommand } = require('./commands/update')

async function main() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    console.error('Please provide a command to run')
    process.exit(1)
  }

  await help(args)
  await listCommand(args)
  await showCommand(args)
  await createCommand(args)
  await updateCommand(args)

  console.error('Invalid command')
  process.exit(1)
}

main()
