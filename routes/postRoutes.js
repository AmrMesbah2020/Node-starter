const express = require("express");
const router = express.Router();
const verifyUserToken = require("../middlewares/verifyUserToken")
const { storePost, listPosts, showPost, deletePost, updatePost } = require('../controllers/postController')
const validate = require("../validation/validation")
const postValidation = require("../validation/posts")

router.post('/create', verifyUserToken, validate(postValidation.createPost), storePost);
router.get('/list', verifyUserToken, listPosts);
router.get("/show/:post", verifyUserToken, showPost);
router.put("/update/:post", verifyUserToken, updatePost);
router.delete("/delete/:post", verifyUserToken, deletePost);



module.exports = router;