import { Router } from "express";
import { getAllNews } from "../../controllers/users/getAllNews.controller.js";

export const userServiceHandlerRoute = Router();

userServiceHandlerRoute.route('/get-all').get(getAllNews)