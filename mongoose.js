const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

  const mongoDB = `mongodb://<dbuser>:<dbpassword>@ds151876.mlab.com:51876/ffc-personal-library`;
  mongoose.connect(mongoDB, {
    useNewUrlParser: true
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = {
  mongoose
};