import dotenv from 'dotenv'
import express from 'express';
import authroutes from './routes/auth.route.js'
import messagerouter from './routes/message.routes.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRoutes from './routes/user.route.js';
import { app,server } from './Socket/socket.js';
import path from 'path';


dotenv.config();
const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();

app.use(cors({
    origin: 'http://localhost:5173', // Allow this origin to access the resources
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    credentials: true, // Allow cookies or other credentials
  }));

mongoose.connect('mongodb://127.0.0.1:27017/chatapp')
    .then(() => {
        console.log("Mongo connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authroutes);
app.use('/api/messages', messagerouter);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname, "/frontend/vite-project/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/frontend/vite-project/dist/index.html"));
  }
);

server.listen(PORT, ()=>{console.log(`Listening to port ${PORT}`)});