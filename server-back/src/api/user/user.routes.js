const router = require('express').Router();
const userController = require('./user.controller');
const { auth } = require('../../utils/auth')

router.route('/get-users').get(userController.listAllUsers)
router.route('/get-user').get(/* auth, */userController.listSingleUser);
router.route('/signup').post(userController.signup);
router.route('/login').post(userController.login);
router.route('/update-user').put(auth,userController.updateUser);
router.route('/delete-user').delete(auth,userController.deleteUser);

module.exports = router;
