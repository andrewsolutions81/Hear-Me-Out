/* aplication routes */
const userRoute = require('./api/user/user.routes')

function routes(app) {
  app.use('/user', userRoute);
};


 module.exports = routes;
