import express from 'express';
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { createCategoryController} from './../controllers/categoryController.js';

const router = express.Router();

//Routes
//Create category

router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
  );

export default router;