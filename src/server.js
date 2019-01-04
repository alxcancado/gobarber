// import package
const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')

// create a class
class App {
  // metodo construtor
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    // execute each method in constructor, in this order
    this.middlewares()
    this.views()
    this.routes()
  }

  // metodo de middlewares
  middlewares () {
    this.express.use(express.urlencoded({ extended: false })) // para handling forms
  }

  // metodo de views
  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoescape: true
    })

    this.express.set('view engine', 'njk')
  }

  // metodo de routes
  routes () {}
}

// export a new instance of this class
// as we think that only express will be used we can export the express object
module.exports = new App().express
