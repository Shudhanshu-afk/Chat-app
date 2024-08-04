import bcrypt from 'bcryptjs'
import User from '../models/user.mode.js';
import generateandsetcookies from '../jwt/genratetoken.js';

export const signup = async(req, res)=>{
    const { name, username, password, gender  } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        const user =await User.findOne({username});
        if (user) {
            return res.status(400).json({error:'Username already exists'});
        }
        const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = new User({
            name,
            username,
            password : hashedpassword,
            gender,
            profilepic: gender==='male'? boyprofilepic : girlprofilepic
        })
        await newUser.save();
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            username: newUser.username,
            password: newUser.password,
            gender: newUser.gender,
            profilepic: newUser.profilepic
        });
    } catch (err) {
        res.status(500).send('Error creating user: ' + err.message);
    }
}
export const login = async(req, res)=>{
    const {username, password} = req.body;
    try {
        const user =await User.findOne({username});
        if (!user) {
            return res.status(400).json({error: 'user does not exists'});
        }
        const passmatch = await bcrypt.compare(password, user.password);
        if (!passmatch) {
            return res.status(400).json({error: 'Incorrect password'});
        }
        generateandsetcookies(user._id,res);
        res.status(200).json({user});
    } catch (error) {
        res.status(500).send('Internal server error', error);
    }
}
export const logout = (req, res)=>{
try {
      
    
    res.cookie('jwt','', {maxAge: 0, httpOnly:true, sameSite: 'strict'});
    res.status(200).send("logged out successfully");
} catch (error) {
    res.status(500).send("error logging out"+error);
}
}