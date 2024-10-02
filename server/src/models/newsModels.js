import mongoose from 'mongoose'

const newsSchema =  new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    summary : {
        type : String,
    },
    status : {
        type : String,
        enum : ['draft', 'published', 'archive'],
        default : 'draft',
       
    },
    category : {
        type : String,
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
    image : {
        type : String,
        required : true
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
    
    writerName : {
        type : String,
        
    }
}, {timestamps : true})

export const newsModels  = mongoose.model('news' , newsSchema);