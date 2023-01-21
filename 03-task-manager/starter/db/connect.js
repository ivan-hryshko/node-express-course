const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://giver0:12345@cluster0.8oohz6f.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB

