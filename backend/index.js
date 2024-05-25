import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.js';
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Mongoose connection
mongoose.set('strictQuery', false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongodb database connected');
    } catch (error) {
        console.error('Mongodb database connection failed', error);
    }
};

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/auth', authRoute);
app.use('/tours', tourRoute);
app.use('/users', userRoute);


// Routes
app.get('/', (req, res) => {
    res.send('hello world');
});

// Start server
app.listen(port, () => {
    connect();
    console.log(`Server listening on port ${port}`);
});
