import Conversations from "../models/conversation.model.js";
import Messages from "../models/message.model.js";
import { getReceiverSocketId, io } from "../Socket/socket.js";

export const sendmessage = async (req, res)=>{
    try {
        
        const {message} =  req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;
      
        
        let conversation = await Conversations.findOne({
            participants:{$all : [senderId, receiverId]}
        })
    
        if(!conversation){
            conversation = await Conversations.create({
                participants:[senderId, receiverId]
            });
        };
    
        const newMessage = new Messages({
            senderid: senderId,
            receiverid: receiverId,
            message : message 
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        await conversation.save();
        await newMessage.save();
        const receiverSocketId = getReceiverSocketId(receiverId);
        console.log(receiverSocketId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}
        res.status(200).json(newMessage);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}
export const getmessage = async(req, res)=>{
    try {
        const {id: receiverId} = req.params;
        const senderId = req.user._id;
    
        const conversation = await Conversations.findOne({
            participants :{$all : [senderId,receiverId]}
        }).populate("messages");

        res.status(200).json(conversation.messages);
        
    } catch (error) {
        res.status(500).json({error});
    }

}