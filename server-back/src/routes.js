/* aplication routes */
const userRoute = require('./api/user/user.routes')
const projectRoute = require('./api/project/project.routes')
const postRoute = require('./api/post/post.routes')

function routes(app) {
  app.use('/user', userRoute);
  app.use('/project', projectRoute);
  app.use('/post', postRoute)
};


 module.exports = routes;
