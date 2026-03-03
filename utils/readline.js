const Readline = require('node:readline/promises')

const rl = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

module.exports = rl
