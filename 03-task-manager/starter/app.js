require('./db/connect')
const express = require('express')
const app = express();

const tasks = require('./routes/tasks')

// middleware

app.use(express.json())

// routes
app.get('/hello', (req, res) => {
  res.send('Hello my first app')
})

app.use('/api/v1/tasks', tasks)

const port = 3001

app.listen(port, console.log(`Server is listeting on port: ${port}...`))


