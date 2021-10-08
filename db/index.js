const mongoose = require('mongoose')

module.exports = async function syncDB() { await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/budget', {
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(connect => console.log('connected to mongo db'))
  .catch(err => console.log('could not connect to mongodb')) }
