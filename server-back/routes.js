/* aplication routes */
const userRoute = require('./api/user/user.routes')//


function routes(app) {
  app.use('/users', userRoute);
};


 module.exports = routes;
