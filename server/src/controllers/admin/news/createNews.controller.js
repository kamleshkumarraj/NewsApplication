
import { asyncHandler } from "../../../error/asyncHandler.error.js";
import ErrorHandler from "../../../error/ErrorHandler.error.js";
import { newsModels } from "../../../models/newsModels.js";
import { sensitiveNews } from "../../../models/sensitiveNews.models.js";
import { fileUploadOnCloudinary } from "../../../utils/cloudinary.config.js";

export const cerateNews = asyncHandler(async (req , res , next) => {
    const {title , content , summary , category } = req.body;

    const newsData = {title , content , summary , category , id : req.user.id}
    let image;
    console.log(req.file.path)
    const response = await fileUploadOnCloudinary(req.file.path)
    console.log(response)
    if(response == null) return next(new ErrorHandler("Image upload failed ",400))
    req.body.image = response.secure_url;
    
    const news = await newsModels.create({...req.body , writerName : req.user.firstname})
    
    if(!news) return next(new ErrorHandler("News creation failed !",402))

    //! code for created recent or latest news.
    const senNews = await sensitiveNews.findOne(); 
    if(senNews.recentNews.length < 10) senNews.recentNews.unshift({...news._doc , writerName : news.writerName})
    else{
        senNews.recentNews.pop()
        senNews.recentNews.unshift(news)
    }
    await senNews.save({validateBeforeSave : false})

    
    


    res.status(200).json({
        success : true,
        message : "News created successfully",
        data : news
    })
})