require("dotenv").config();

const server = require("./server")

const port = process.env.PORT || 4000

server.listen(port, () => {
	console.log(`API running at http://localhost:${port}`)
})
