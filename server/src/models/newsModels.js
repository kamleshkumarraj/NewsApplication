import mongoose from 'mongoose'

const newsSchema =  new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    summary : {
        type : String,
        required : true
    },
    status : {
        type : String,
        enum : ['draft', 'published', 'archive'],
       
    },
    category : {
        type : String,
        enum : ['style' , 'fashion' , 'food' , 'travel' , 'culture' , 'coding'],
        required  :true
    },
    viewCount : {
        type : Number,
        default : 0,
    },
    commentCount : {
        type : Number,
        default : 0
    },
    featureImage : {
        publicId :{
             type : String,
        },
        url : {
            type : String
        }
    },
    comment : [{
        creater : {
            type : mongoose.Schema.ObjectId,
            ref : "usersModels"

        },
        content : {
            type : [],
        }
    }],
    reactions : [{
        creator : {
            type : mongoose.Schema.ObjectId,
            ref : 'usersModel'
        },
        reactionType : {
            type : String,
            enum : ['like', 'dislike','share'],
        }

    }],
    
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "usersModels"
    }
}, {timestamps : true})

export const newsModels  = mongoose.model('news' , newsSchema);