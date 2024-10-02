import { Router } from "express";
import { getAllNews } from "../../controllers/users/getAllNews.controller.js";
import { getAllcategories } from "../../controllers/users/getAllCategories.controller.js";

export const userServiceHandlerRoute = Router();

userServiceHandlerRoute.route('/get-all').get(getAllNews)
userServiceHandlerRoute.route('/get-categories').get(getAllcategories)