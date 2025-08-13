const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Devland Backend API' })
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`)
})