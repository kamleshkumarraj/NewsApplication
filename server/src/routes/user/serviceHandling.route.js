import { Router } from "express";
import { getAllNews } from "../../controllers/users/getAllNews.controller.js";
import { getAllcategories } from "../../controllers/users/getAllCategories.controller.js";
import { getRecentNews } from "../../controllers/users/getRecentNews.controller.js";
import { getPopularNews } from "../../controllers/users/getPopularNews.controller.js";
import { isLoggedIn } from "../../middlewares/authentication/isLoggedIn.middleware.js";
import { createComment } from "../../controllers/users/createComment.controller.js";

export const userServiceHandlerRoute = Router();

userServiceHandlerRoute.route('/get-all').get(getAllNews)
userServiceHandlerRoute.route('/get-categories').get(getAllcategories)
userServiceHandlerRoute.route('/recent-news').get(getRecentNews)
userServiceHandlerRoute.route('/popular-news').get(getPopularNews)
userServiceHandlerRoute.route('/create-comment/:id').post(isLoggedIn , createComment)