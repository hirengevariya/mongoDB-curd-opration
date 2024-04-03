module.exports = {
  mongoDB: (process.env.PROD) ? 'mongodb://localhost:27017/userDetails' : 'mongodb://localhost:27017/userDetails',
  serverAddress: `http://localhost:3000`,
};