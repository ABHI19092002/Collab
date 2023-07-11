import { Router } from "express";
const router = express.Router();

import { createPost,deletePost,getAllPost,getOnePost,updatePost } from "../controllers/postController";

router.route('/createPost').post(createPost);
router.route('/deletePost').post(deletePost);
router.route('/getAllPost').post(getAllPost);
router.route('/getOnePost').post(getOnePost);
router.route('/updatePost').post(updatePost);

export default router;