const express = require('express');
const app  = express();


//routes
app.get("/hello", (req, res) => {
	res.send("task manager starting work!!")
})


const port = 3000
app.listen(port, console.log(`server's listening on port ${port}...`))