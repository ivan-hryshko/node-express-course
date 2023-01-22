const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.static('./public'))

app.use(express.json())

// routes
app.get('/hello', (req, res) => {
  res.send('Hello my first app')
})

app.use('/api/v1/tasks', tasks)

const port = 3001

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listeting on port: ${port}...`))
  } catch (error) {
    console.log(error);
  }
}

start()
