const fs = require('fs/promises')
const { join } = require('path')

const saveData = async (data) => {
  try {
    const dir = join(__dirname, '../data')
    if (!(await exists(dir))) {
      await fs.mkdir(dir)
    }
    await fs.writeFile(join(dir, 'data.json'), JSON.stringify(data))
  } catch (err) {
    console.error('Error saving data:', err)
    process.exit(1)
  }
}

const loadData = async () => {
  try {
    const data = await fs.readFile(
      join(__dirname, '../data/data.json'),
      'utf-8',
    )
    return JSON.parse(data)
  } catch (err) {
    if (err.code === 'ENOENT') {
      // Si el archivo no existe, devuelve un array vacío
      return []
    }
    console.error('Error loading data:', err)
    process.exit(1)
  }
}

const exists = async (filePath) => {
  try {
    await fs.access(filePath, fs.constants.F_OK)
    return true
  } catch {
    return false
  }
}

module.exports = { saveData, loadData }
