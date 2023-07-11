import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true,'it will give you your post more reach']
        },
        content: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        }


    },
    {
        timestamps:true
    }
)


export default mongoose.model('post','PostSchema')