
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    
    password:{
        type: String,
        required: true,
        
    },
    gender:{
        type: String,
        required: true,
        enum:['male','female']
        
    },
    profilepic:{
        type: String,
        default:''
    }
    
    
});

const User = mongoose.model('User', userSchema);

export default User;