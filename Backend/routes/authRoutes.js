import  Router from "express";
const router = express.router();

import { register,login,updateUser } from "../controllers/authControllers";


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateUser').post(updateUser);

export default router;
