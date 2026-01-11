const express = require('express');
// mergeParams allows us to access parameters from the parent router (e.g., :postId)
const router = express.Router({ mergeParams: true }); 
const commentController = require('../controllers/commentController');


router.get('/', commentController.getCommentsForPost);

router.post('/', commentController.createComment);

router.put('/:commentId', commentController.updateComment);

router.delete('/:commentId', commentController.deleteComment);  


module.exports = router;
