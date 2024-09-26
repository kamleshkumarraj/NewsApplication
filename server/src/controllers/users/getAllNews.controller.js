import { asyncHandler } from "../../error/asyncHandler.error.js";
import ErrorHandler from "../../error/ErrorHandler.error";
import { newsModels } from "../../models/newsModels.js";

export const getAllNews = asyncHandler(async (req , res , next ) => {
    const newsList = await newsModels.find();
    if(newsList.length == 0 ) return next(new ErrorHandler("No news found !",404))
    res.status(200).josn({
        success : true,
        message : "News get successfully.",
        data : newsList
    })
}) 