const server = require('./server') // import our express server

server.listen(process.env.PORT || 3000) // listen to port config in environment var then if not found uses 3000
