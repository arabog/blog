const router = require("express").Router()
const postsController = require("../controller/posts")



// create post
router.post("/", postsController.createPost)

// update post
router.put("/:id", postsController.updatePost)

// delete post
router.delete("/:id", postsController.delPost)


// get a post
router.get("/:id", postsController.getApost)

// get all post (find/search)
router.get("/", postsController.getAllPost)


module.exports = router;
