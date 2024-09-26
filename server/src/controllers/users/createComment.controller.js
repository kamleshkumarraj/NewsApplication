import { asyncHandler } from "../../error/asyncHandler.error.js";
import ErrorHandler from "../../error/ErrorHandler.error.js";
import { newsModels } from "../../models/newsModels.js";

export const createComment = asyncHandler(async (req , res , next) => {
    const {content } = req.body;
    const commentData = {content , creator : req.user.id}
    const news = await newsModels.findById(req.params.id);
    if(!news) return next(new ErrorHandler("Invalid id no any news found !",404))

    const alreadyCommented = async () => {
        return news.comment.find((coment) => coment.creater === req.user.id)
    }
    if(await alreadyCommented()){
        news.comment.forEach((coment) => {
            if(coment.creater === req.user.id)  {
                    coment.content.push(content)
                    news.commentCount += 1;
                }
        })
    }else{
        news.comment.push(commentData)
        news.commentCount += 1;
    }
    
    await news.save({validateBeforeSave : false})
    res.status(200).json({
        success : true,
        message : "Comment added successfully"
    })

})