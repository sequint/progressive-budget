const mongoose = require('mongoose')

module.exports = async function syncDB() { await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/budget', {
  useNewUrlParser: true
}) }
