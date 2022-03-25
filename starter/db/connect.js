const mongoose = require('mongoose')
const urltry = 
	'mongodb+srv://Guilhermebn:OOOOay198%21%40%23@nodetaskmanagerdatabase.xymxy.mongodb.net/taskmanager?retryWrites=true&w=majority'
const connectDB = (url) => {
  return mongoose.connect(urltry, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
