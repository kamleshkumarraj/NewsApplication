import { asyncHandler } from "../../../error/asyncHandler.error.js";
import ErrorHandler from "../../../error/ErrorHandler.error.js";
import { newsModels } from "../../../models/newsModels.js";

export const cerateNews = asyncHandler(async (req , res , next) => {
    const {title , content , summary , category } = req.body;

    const newsData = {title , content , summary , category , id : req.user.id}
    
    const news = await newsModels.create(newsData)
    if(!news) return next(new ErrorHandler("News creation failed !",402))
    res.status(200).json({
        success : true,
        message : "News created successfully",
        data : news
    })
})