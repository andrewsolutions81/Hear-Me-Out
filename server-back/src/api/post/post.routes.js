const router = require('express').Router();
const postController = require('./post.controller');
const { auth } = require('../../utils/auth')

router.route('/get-posts').get(postController.listAllPosts)
router.route('/get-post').get(auth, postController.listSinglePost)
router.route('/create-post/:id').post(auth, postController.createPost )
router.route('/update-post/:id').put(auth,postController.updatePost)
router.route('/delete-post/:id').delete(auth, postController.deletePost )

module.exports = router;
