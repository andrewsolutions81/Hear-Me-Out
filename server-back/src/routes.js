/* aplication routes */
const userRoute = require('./api/user/user.routes')
const projectRoute = require('./api/project/project.routes')

function routes(app) {
  app.use('/', userRoute);
  app.use('/',projectRoute);
};


 module.exports = routes;
