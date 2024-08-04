import mongoose, { mongo } from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants :[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User"

        }
    ],
    messages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messages",
        default: []
    }]
},{timestamps: true});

const Conversations = mongoose.model("Conversation", conversationSchema);

export default Conversations;