import { asyncHandler } from "../../error/asyncHandler.error.js";
import ErrorHandler from "../../error/ErrorHandler.error.js";
import jwt from 'jsonwebtoken'
import { userModels } from "../../models/user.model.js";

export const isLoggedIn = asyncHandler(async (req , res , next) => {
    const {tocken} = req.cookies
    
    if(!tocken) return next(new ErrorHandler("Please login to access this resource !",400))
    
    try {
        const decodeData = await jwt.verify(tocken , process.env.JWT_SECRET)
        const user = await userModels.findById(decodeData.id)
        req.user = user
        next();
    }
    catch(err){
        return next(new ErrorHandler("Invalid tocken !",401))
    }
})