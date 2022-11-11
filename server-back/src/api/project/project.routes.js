const router = require('express').Router();
const projectController = require('./project.controller');
const { auth } = require('../../utils/auth')

router.route('/get-projects').get(projectController.listAllProjects)
router.route('/get-project').get(auth, projectController.listSingleProject)
router.route('/create-project').post(auth, projectController.createProject )
router.route('/update-project/:id').put(auth, projectController.updateProject )
router.route('/delete-project/:id').delete(auth, projectController.deleteProject )

module.exports = router;
