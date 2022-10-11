const mongoose = require('mongoose') 

function connect() {

  //solution to 2 erros on professor video:
  // mongoose.set('useNewUrlParser', true)
  // mongoose.set('useUnifiedTopology', true)

  mongoose.connect('mongodb://localhost:27017/api-RESTful')

  const db = mongoose.connection
  
  db.once('open', () => {
    console.log('Connected to database!')
  })

  db.on('error', console.error.bind(console, 'connection error: '))

}

module.exports = {
  connect
}