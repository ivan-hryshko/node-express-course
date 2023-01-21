const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://giver0:12345@cluster0.8oohz6f.mongodb.net/?retryWrites=true&w=majority'

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('CONNECTED TO DB...'))
  .catch((error) => console.log('error >> ', error))