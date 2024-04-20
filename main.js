const express = require('express')

const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/boop', (req, res) => {
  res.send('boop the snoot')
})

app.use((req, res) => {
  res.status(404).send('not found')
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})
