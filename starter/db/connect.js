const mongoose = require('mongoose')

const connectionString = 
	'mongodb+srv://Guilhermebn:OOOOay198!@%23@nodetaskmanagerdatabase.xymxy.mongodb.net/taskmanager?retryWrites=true&w=majority'

mongoose
	.connect(connectionString,{
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(()=> console.log('CONNECTED TO THE DB...!'))
	.catch((err) => console.log(err));